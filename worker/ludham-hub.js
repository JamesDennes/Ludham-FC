// Ludham FC go-between, on Cloudflare Workers. Keeps the OneSignal key out of the public app.
//   POST /subs   manager picks players; each gets the fixed "match subs" alert (one a day at most)
//   GET  /score  the latest score sent from the touchline (public: score and opponent only)
//   POST /score  admin (or manager) sends a score update / half time / full time, with an optional alert to everyone
//   DELETE /score  clear it once /ludham-update has turned it into the proper result
// Settings in Cloudflare (never in this file):
//   secrets  ONESIGNAL_KEY, ADMIN_HASH, MANAGER_HASH (sha-256 hex of "ludham-subs:" + that password in capitals)
//   KV       SCORES (namespace binding)
const APP_ID = '39c65d59-3d4f-4668-8ed2-18a4032872cb';
const ORIGIN = 'https://jamesdennes.github.io';
const SITE = 'https://jamesdennes.github.io/Ludham-FC/';
const NAME_RE = /^[A-Za-z][A-Za-z .'-]{0,39}$/;
const OPP_RE = /^[A-Za-z0-9][A-Za-z0-9 .'()&-]{0,49}$/;
const cors = {
  'Access-Control-Allow-Origin': ORIGIN,
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
const reply = (body, status = 200, extra = {}) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json', ...extra } });

async function sha256(text) {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(d)].map(b => b.toString(16).padStart(2, '0')).join('');
}
const asUuid = h => `${h.slice(0, 8)}-${h.slice(8, 12)}-5${h.slice(13, 16)}-8${h.slice(17, 20)}-${h.slice(20, 32)}`;
async function who(pw, env) {
  const h = await sha256('ludham-subs:' + String(pw || '').trim().toUpperCase());
  return h === env.ADMIN_HASH ? 'admin' : h === env.MANAGER_HASH ? 'manager' : '';
}
async function push(env, msg) {
  const r = await fetch('https://api.onesignal.com/notifications', {
    method: 'POST',
    headers: { Authorization: 'Key ' + env.ONESIGNAL_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ app_id: APP_ID, target_channel: 'push', ...msg }),
  });
  return r.json().catch(() => ({}));
}

async function subs(body, env) {
  if ((await who(body.pw, env)) !== 'manager') return reply({ error: 'not allowed' }, 403);
  // each player is a list of names they might have saved, e.g. ["JJ Roe", "JJ"]; the first is how the app shows them
  const players = (Array.isArray(body.names) ? body.names : []).slice(0, 25)
    .map(p => [...new Set((Array.isArray(p) ? p : [p]).map(n => String(n).trim()))].filter(n => NAME_RE.test(n)).slice(0, 4))
    .filter(p => p.length);
  if (!players.length) return reply({ error: 'no players chosen' }, 400);
  const game = String(body.game || '').replace(/[^A-Za-z0-9 .'()-]/g, '').slice(0, 60).trim();
  const day = new Date().toISOString().slice(0, 10);
  const results = {};
  for (const aliases of players) {
    const name = aliases[0];
    const filters = aliases.flatMap((a, i) => [...(i ? [{ operator: 'OR' }] : []),
      { field: 'tag', key: 'name', relation: '=', value: a }, { field: 'tag', key: 'role', relation: '=', value: 'players' }]);
    const j = await push(env, {
      filters, headings: { en: 'Match subs 💷' },
      contents: { en: `Subs reminder: please pay your £4 match subs${game ? ' for ' + game : ''}. Thanks!` },
      url: SITE, name: `subs-chase-${day}`,
      idempotency_key: asUuid(await sha256(`ludham/subs-chase/${day}/${name.toLowerCase()}`)),   // one reminder per player per day
    });
    results[name] = j.id ? 'sent' : /not subscribed/i.test(JSON.stringify(j.errors || '')) ? 'no-alerts' : 'error';
  }
  return reply({ results });
}

async function score(req, env) {
  if (req.method === 'GET') {
    const s = await env.SCORES.get('score', 'json');
    return reply(s || {}, 200, { 'Cache-Control': 'no-store' });
  }
  let body;
  try { body = await req.json(); } catch { return reply({ error: 'bad request' }, 400); }
  if (!(await who(body.pw, env))) return reply({ error: 'not allowed' }, 403);
  if (req.method === 'DELETE') { await env.SCORES.delete('score'); return reply({ cleared: true }); }

  const us = Number(body.us), them = Number(body.them);
  const stage = ['live', 'ht', 'ft'].includes(body.stage) ? body.stage : '';
  const opponent = String(body.opponent || '').trim(), date = String(body.date || '');
  if (!Number.isInteger(us) || !Number.isInteger(them) || us < 0 || them < 0 || us > 30 || them > 30 || !stage
      || !OPP_RE.test(opponent) || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return reply({ error: 'check the score and game' }, 400);
  const homeAway = body.homeAway === 'A' ? 'A' : 'H';
  const s = { date, opponent, homeAway, us, them, stage, at: new Date().toISOString() };
  await env.SCORES.put('score', JSON.stringify(s));

  let alert = 'not sent';
  if (body.alert) {
    const head = `${stage === 'ft' ? 'FT' : stage === 'ht' ? 'HT' : 'Score update'}: Ludham ${us}–${them} ${opponent}`;
    const text = stage === 'ft' ? 'Full time. Match report to follow – tap for the score.'
      : stage === 'ht' ? 'Half time. Second half coming up. Up the Ludham!' : 'Live from the touchline. Up the Ludham!';
    const j = await push(env, {
      included_segments: ['Total Subscriptions'], headings: { en: head }, contents: { en: text }, url: SITE + '#next',
      name: `score-${date}-${stage}`, idempotency_key: asUuid(await sha256(`ludham/score/${date}/${stage}/${us}-${them}`)),
    });
    alert = j.id ? 'sent' : /not subscribed/i.test(JSON.stringify(j.errors || '')) ? 'nobody subscribed' : 'error';
  }
  return reply({ saved: s, alert });
}

export default {
  async fetch(req, env) {
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    const path = new URL(req.url).pathname.replace(/\/+$/, '');
    if (path === '/score') return score(req, env);
    if (path === '/subs' && req.method === 'POST') {
      let body;
      try { body = await req.json(); } catch { return reply({ error: 'bad request' }, 400); }
      return subs(body, env);
    }
    return reply({ error: 'not found' }, 404);
  },
};
