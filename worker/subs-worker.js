// Ludham FC subs reminders: lets the manager send the fixed "match subs" alert to the players he picks.
// Runs on Cloudflare Workers. Secrets set in Cloudflare (never in this file):
//   ONESIGNAL_KEY  the OneSignal app API key
//   MANAGER_HASH   sha-256 hex of "ludham-subs:" + the manager password in capitals
const APP_ID = '39c65d59-3d4f-4668-8ed2-18a4032872cb';
const ORIGIN = 'https://jamesdennes.github.io';
const NAME_RE = /^[A-Za-z][A-Za-z .'-]{0,39}$/;
const cors = {
  'Access-Control-Allow-Origin': ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
const reply = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

async function sha256(text) {
  const d = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(d)].map(b => b.toString(16).padStart(2, '0')).join('');
}
// one reminder per player per day: OneSignal ignores repeats with the same key
async function dailyKey(name, day) {
  const h = await sha256(`ludham/subs-chase/${day}/${name.toLowerCase()}`);
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-5${h.slice(13, 16)}-8${h.slice(17, 20)}-${h.slice(20, 32)}`;
}

export default {
  async fetch(req, env) {
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (req.method !== 'POST') return reply({ error: 'POST only' }, 405);
    let body;
    try { body = await req.json(); } catch { return reply({ error: 'bad request' }, 400); }
    const pw = typeof body.pw === 'string' ? body.pw.trim().toUpperCase() : '';
    if (!pw || (await sha256('ludham-subs:' + pw)) !== env.MANAGER_HASH) return reply({ error: 'not allowed' }, 403);

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
      const r = await fetch('https://api.onesignal.com/notifications', {
        method: 'POST',
        headers: { Authorization: 'Key ' + env.ONESIGNAL_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          app_id: APP_ID, target_channel: 'push',
          filters,
          headings: { en: 'Match subs 💷' },
          contents: { en: `Subs reminder: please pay your £4 match subs${game ? ' for ' + game : ''}. Thanks!` },
          url: 'https://jamesdennes.github.io/Ludham-FC/',
          name: `subs-chase-${day}`,
          idempotency_key: await dailyKey(name, day),
        }),
      });
      const j = await r.json().catch(() => ({}));
      results[name] = j.id ? 'sent' : /not subscribed/i.test(JSON.stringify(j.errors || '')) ? 'no-alerts' : 'error';
    }
    return reply({ results });
  },
};
