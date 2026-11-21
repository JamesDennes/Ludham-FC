importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// Red badge on the app icon: count the alerts that arrive while the app is closed.
// The app clears it when it's opened.
const BADGE = 'ludham-badge';
const COUNT = '/Ludham-FC/badge-count';   // full path: a bare name would be read relative to this folder, not the app's
async function bumpBadge() {
  try {
    const c = await caches.open(BADGE);
    const r = await c.match(COUNT);
    const n = (r ? Number(await r.text()) || 0 : 0) + 1;
    await c.put(COUNT, new Response(String(n)));
    if (self.navigator.setAppBadge) await self.navigator.setAppBadge(n);
  } catch (e) {}
}
self.addEventListener('push', e => e.waitUntil(bumpBadge()));
