importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// Red badge on the app icon: the number of Ludham alerts still sitting in the phone's notifications,
// like Messages. Opening the app clears them (and the badge). A stored count is kept only as a fallback
// for phones that can't list their notifications.
const BADGE = 'ludham-badge';
const COUNT = '/Ludham-FC/badge-count';   // full path: a bare name would be read relative to this folder, not the app's
async function updateBadge() {
  if (!self.navigator.setAppBadge) return;
  let n = 0;
  try {
    const c = await caches.open(BADGE);
    const r = await c.match(COUNT);
    n = (r ? Number(await r.text()) || 0 : 0) + 1;
    await c.put(COUNT, new Response(String(n)));
  } catch (e) {}
  try {
    await new Promise(r => setTimeout(r, 1500));   // let OneSignal show the alert first
    const shown = (await self.registration.getNotifications()).length;
    if (shown) n = shown;
  } catch (e) {}
  try { await self.navigator.setAppBadge(Math.max(1, n)); } catch (e) {}
}
self.addEventListener('push', e => e.waitUntil(updateBadge()));
