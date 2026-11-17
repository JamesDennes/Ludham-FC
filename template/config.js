/* =====================================================================
   CLUB SETTINGS
   ---------------------------------------------------------------------
   This is the only file you need to change to make the app your club's.
   Everything here is public (anyone can read it), so never put passwords
   or private data in this file. Those go in data.js, locked with a password.
   ===================================================================== */
window.CLUB_CONFIG = {

  /* ---------- Names ---------- */
  // How the club's name appears in scorelines and the league table.
  // It must match the start of the club's name in the league table so the app can highlight your row.
  name: "Oakfield",
  shortName: "Oakfield Rovers",          // app icon label, notifications
  fullName: "Oakfield Rovers FC",        // page title, calendar, invites
  mastheadName: "OAKFIELD ROVERS",       // big letters at the top of every page and graphic
  footerName: "OAKFIELD ROVERS FOOTBALL CLUB",  // band along the bottom of the graphics
  slogan: "UP THE ROVERS!",              // shown on the "Here we go!" graphic and the alerts welcome message

  /* ---------- League ---------- */
  league: "County League",
  division: "Division One",              // leave "" if the league has no divisions
  season: "2026/27",
  fullTimeUrl: "",                       // link to the league table on FA Full-Time, e.g. https://fulltime.thefa.com/index.html?league=1234567
  timezone: "Europe/London",

  /* ---------- Look ---------- */
  colours: {
    primary: "#0E3B2E",          // main club colour: text, buttons, tab bar. Pick a dark shade.
    secondary: "#1F6B4F",        // second club colour: highlights, your row in the table
    secondaryOnDark: "#8FD1B0",  // a light version of the second colour, for phones in dark mode
    accent: "#D6A532",           // trophies, confetti, the "Here we go!" tick
    paper: "#F3EFE9"             // page background. Cream looks like a printed programme; use #FFFFFF for plain white
  },
  crest: "icons/crest.svg",      // a square image. Shown in a circle, so keep the badge in the middle.

  // Optional sponsor shown under the masthead and on the loading screen. Set to null for none.
  sponsor: { name: "Brightwater Builders", logo: "icons/sponsor.svg", url: "https://example.com/" },

  // Names in the footer of every page
  staff: [
    { role: "Manager", name: "Sam Whitlock" },
    { role: "Chairman", name: "Graham Pike" },
    { role: "Assistant", name: "Lee Morton" }
  ],

  // What the club calls its two match awards
  awards: { motm: "Man of the Match", supporters: "Supporters' Player" },

  // Default thank-you note shown to supporters under each match report
  clubNote: "Thank you, as always, for your continued support, home and away. It means a great deal to the players and everyone at the club.",

  /* ---------- Web address ---------- */
  siteUrl: "",                   // the app's address once it's live, used in WhatsApp messages and invites. Blank = work it out.
  storageKey: "oakfield",        // a short unique word: keeps this app's saved settings apart from other apps on the same site

  /* ---------- Optional extras (all free). Leave blank to switch off. ---------- */
  goatcounter: "",               // visitor counts, e.g. "https://yourclub.goatcounter.com". Blank = sample numbers in the admin pages.
  statsSince: "2026-11-01",      // the day you started counting visitors
  onesignal: {
    appId: "",                   // match alerts (push notifications) from onesignal.com. Blank = alerts switched off.
    basePath: ""                 // the folder the app lives in, if not the root of the site, e.g. "oakfield-matchday"
  },
  githubRepo: ""                 // e.g. "yourname/oakfield-matchday" to show the real update history to the admin
};
