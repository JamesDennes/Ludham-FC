/* =====================================================================
   CLUB DATA: DEMONSTRATION VERSION
   ---------------------------------------------------------------------
   This file holds made-up sample data for a made-up club so the app can be
   shown off. The dates move with the calendar, so the next match is always
   this coming Saturday and the last result is always last Saturday.

   For a real club, replace this whole file with the one made by
   tools/lock.html (see README.md). That version is encrypted: nobody can
   read the squad, fines or match reports without a password.

   Demo passwords (capitals don't matter):
     PLAYERS     the players' version, with fines and calendar buttons
     SUPPORTERS  the supporters' version, with ground facilities and league positions
     MANAGER     everything the players see, plus squad picker, messages and graphics
     ADMIN       visitor numbers, a site health check, update history, alerts and passwords
   ===================================================================== */
window.DEMO_PASSWORDS = { PLAYERS: "players", SUPPORTERS: "supporters", MANAGER: "manager", ADMIN: "admin" };

window.DEMO_DATA = function (role) {
  /* ---- dates relative to today ---- */
  const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const nextSat = new Date(today); nextSat.setDate(today.getDate() + ((6 - today.getDay() + 7) % 7 || 7));
  const day = n => { const d = new Date(nextSat); d.setDate(d.getDate() + n); return iso(d); };   // 0 = next Saturday, -7 = last Saturday

  const C = "Oakfield";
  const home = { ground: "Oakfield Recreation Ground", address: "Station Road, Oakfield", postcode: "OK4 7RV" };

  const results = [
    { date: day(-7), opponent: "Mill Lane", homeAway: "Home", score: "3-1", report: {
      motm: "Callum Hughes", supporters: "Josh Palmer",
      goals: { "Callum Hughes": 2, "Alfie Turner": 1 }, assists: { "Josh Palmer": 2, "Ryan Ellis": 1 },
      squad: ["Ben Carter (C)", "Matt Doyle (GK)", "Alfie Turner", "Callum Hughes", "Josh Palmer", "Ryan Ellis", "Harry Webb", "Dan Fletcher", "Tom Reeve", "Kieran Shaw", "Luke Barnes", "Owen Price", "Jake Sutton", "Sam Holt"],
      summary: "Callum Hughes scored twice as Oakfield came from behind to beat Mill Lane and go top of the league.",
      writeup: "Oakfield went top of County League Division One with a hard-earned 3–1 win over Mill Lane at the Recreation Ground.\n\nThe visitors went ahead against the run of play on 20 minutes, but Callum Hughes levelled before the break with a low finish from Josh Palmer's cut-back.\n\nThe second half belonged to the Rovers. Hughes headed in his second from a corner on the hour, and Alfie Turner sealed it late on after good work from Ryan Ellis.\n\n* Thanks to everyone who came down and to the tea hut team for keeping us warm." } },
    { date: day(-14), opponent: "Kingsmead", homeAway: "Away", score: "2-2", report: {
      motm: "Matt Doyle", supporters: "Ben Carter",
      goals: { "Alfie Turner": 1, "Harry Webb": 1 }, assists: { "Callum Hughes": 1 },
      squad: ["Ben Carter (C)", "Matt Doyle (GK)", "Alfie Turner", "Callum Hughes", "Josh Palmer", "Harry Webb", "Dan Fletcher", "Tom Reeve", "Kieran Shaw", "Luke Barnes", "Owen Price", "Ollie Grant"],
      writeup: "A point on the road at Kingsmead, where Matt Doyle made three outstanding saves to keep Oakfield in it.\n\nAlfie Turner and Harry Webb scored either side of half-time, but a late Kingsmead equaliser meant the points were shared." } },
    { date: day(-21), opponent: "Ashby Town (Cup)", homeAway: "Home", score: "4-0", report: {
      motm: "Josh Palmer", supporters: "Josh Palmer",
      goals: { "Callum Hughes": 1, "Josh Palmer": 2, "Kieran Shaw": 1 }, assists: { "Ryan Ellis": 2, "Alfie Turner": 1, "Harry Webb": 1 },
      squad: ["Ben Carter (C)", "Matt Doyle (GK)", "Alfie Turner", "Callum Hughes", "Josh Palmer", "Ryan Ellis", "Harry Webb", "Kieran Shaw", "Luke Barnes", "Owen Price", "Jake Sutton", "Sam Holt", "Ollie Grant"],
      writeup: "Oakfield are through to the County Cup quarter-finals after a commanding win over Ashby Town.\n\nJosh Palmer was the star with two goals and a hand in the others." } },
    { date: day(-28), opponent: "Westcott Athletic", homeAway: "Away", score: "1-0", report: {
      motm: "Ben Carter", supporters: "Dan Fletcher", goals: { "Harry Webb": 1 }, assists: { "Josh Palmer": 1 },
      squad: ["Ben Carter (C)", "Matt Doyle (GK)", "Callum Hughes", "Josh Palmer", "Harry Webb", "Dan Fletcher", "Tom Reeve", "Kieran Shaw", "Luke Barnes", "Owen Price", "Jake Sutton"],
      writeup: "A scrappy but vital win at Westcott, settled by Harry Webb's header ten minutes from time." } },
    { date: day(-35), opponent: "Fenwick Rangers", homeAway: "Home", score: "1-2", report: {
      motm: "Ryan Ellis", supporters: "Ryan Ellis", goals: { "Callum Hughes": 1 }, assists: { "Ryan Ellis": 1 },
      squad: ["Ben Carter (C)", "Matt Doyle (GK)", "Alfie Turner", "Callum Hughes", "Josh Palmer", "Ryan Ellis", "Harry Webb", "Tom Reeve", "Luke Barnes", "Owen Price", "Sam Holt"],
      writeup: "Oakfield's first league defeat of the season, beaten by two Fenwick goals in the last fifteen minutes." } },
    { date: day(-42), opponent: "Thornbury Park", homeAway: "Away", score: "5-1", report: {
      motm: "Callum Hughes", supporters: "Alfie Turner", goals: { "Callum Hughes": 3, "Alfie Turner": 1, "Jake Sutton": 1 }, assists: { "Josh Palmer": 2, "Ryan Ellis": 1, "Harry Webb": 1 },
      squad: ["Ben Carter (C)", "Matt Doyle (GK)", "Alfie Turner", "Callum Hughes", "Josh Palmer", "Ryan Ellis", "Harry Webb", "Dan Fletcher", "Kieran Shaw", "Jake Sutton", "Sam Holt"],
      writeup: "A Callum Hughes hat-trick on a sunny afternoon at Thornbury Park." } }
  ];

  const fixtures = [
    { date: day(0), opponent: "Hollybank United", homeAway: "Home" },
    { date: day(7), opponent: "Ashby Town", homeAway: "Away" },
    { date: day(14), opponent: "Calder Vale (Cup)", homeAway: "Home" },
    { date: day(21), opponent: "Ridgeway Wanderers", homeAway: "Away" },
    { date: day(28), opponent: "St Aldric's", homeAway: "Home" },
    { date: day(35), opponent: "Norbrook Reserves", homeAway: "Away" }
  ];

  const data = {
    role,
    announcement: {
      kicker: "CLUB ANNOUNCEMENT", headline: "HERE WE GO!",
      title: "Rovers into the County Cup quarter-finals",
      body: "Calder Vale come to the Recreation Ground in a fortnight. Bring everyone you know.",
      scoreline: "Oakfield 4–0 Ashby Town", until: day(10), confetti: true
    },
    nextMatch: {
      date: day(0), opponent: "Hollybank United", homeAway: "Home", kickOff: "14:00", ...home,
      preview: "Top plays third as Hollybank United visit the Recreation Ground. They have won four of their last five and like to press high, so expect a quick start.\n\nWin this and the Rovers open a five-point gap at the top. A big crowd would make all the difference."
    },
    squad: ["Ben Carter (C)", "Matt Doyle (GK)", "Alfie Turner", "Callum Hughes", "Josh Palmer", "Ryan Ellis", "Harry Webb", "Dan Fletcher", "Tom Reeve", "Kieran Shaw", "Luke Barnes", "Owen Price", "Jake Sutton", "Sam Holt"],
    fixtures, results,
    leagueTable: { asOf: day(-7), rows: [
      [1, "Oakfield Rovers", 12, 9, 2, 1, 22, 29, ""],
      [2, "Fenwick Rangers", 12, 8, 3, 1, 15, 27, ""],
      [3, "Hollybank United", 12, 8, 1, 3, 11, 25, ""],
      [4, "Kingsmead", 12, 6, 3, 3, 6, 21, ""],
      [5, "Ashby Town", 12, 6, 1, 5, 2, 19, ""],
      [6, "Ridgeway Wanderers", 11, 5, 2, 4, 1, 17, ""],
      [7, "Westcott Athletic", 12, 4, 3, 5, -3, 15, ""],
      [8, "Mill Lane", 12, 4, 2, 6, -5, 14, ""],
      [9, "St Aldric's", 11, 3, 3, 5, -6, 12, ""],
      [10, "Calder Vale", 12, 3, 1, 8, -10, 10, ""],
      [11, "Norbrook Reserves", 12, 2, 2, 8, -14, 5, "*"],
      [12, "Thornbury Park", 12, 1, 1, 10, -19, 4, ""]
    ] },
    goals: { "Callum Hughes": 14, "Alfie Turner": 7, "Josh Palmer": 6, "Harry Webb": 4, "Kieran Shaw": 3, "Jake Sutton": 2, "Ryan Ellis": 1, "Ben Carter": 1 },
    assists: { "Josh Palmer": 11, "Ryan Ellis": 8, "Alfie Turner": 5, "Harry Webb": 4, "Callum Hughes": 3, "Dan Fletcher": 2, "Tom Reeve": 1 },
    appearances: { "Ben Carter": 14, "Matt Doyle": 14, "Callum Hughes": 14, "Josh Palmer": 13, "Alfie Turner": 12, "Harry Webb": 12, "Ryan Ellis": 11, "Luke Barnes": 11, "Owen Price": 10, "Dan Fletcher": 9, "Kieran Shaw": 9, "Tom Reeve": 8, "Jake Sutton": 7, "Sam Holt": 6, "Ollie Grant": 3 },
    allTimeApps: { "Ben Carter": 212, "Matt Doyle": 168, "Dan Fletcher": 141, "Callum Hughes": 97, "Josh Palmer": 88, "Tom Reeve": 76, "Harry Webb": 64, "Alfie Turner": 51, "Luke Barnes": 44, "Ryan Ellis": 39, "Owen Price": 31, "Kieran Shaw": 22, "Jake Sutton": 15, "Sam Holt": 12, "Ollie Grant": 3 },
    records: { appearances: { name: "Pete Ashworth", n: 431 } },
    grounds: {
      "Oakfield": { toilets: "Yes", refreshments: "Tea hut and bacon rolls" },
      "Hollybank United": { toilets: "Yes", refreshments: "Clubhouse bar" },
      "Ashby Town": { toilets: "On request", refreshments: "No" },
      "Calder Vale": { toilets: "Yes", refreshments: "Yes" },
      "Ridgeway Wanderers": { toilets: "No", refreshments: "No" },
      "St Aldric's": { toilets: "Yes", refreshments: "Not known" },
      "Norbrook Reserves": { toilets: "Yes", refreshments: "Pub next door", aka: ["Norbrook"] }
    },
    fines: {
      rules: [{ name: "Late for kick-off", amount: 5 }, { name: "Late for training", amount: 2 }, { name: "Yellow card (dissent)", amount: 5 },
              { name: "Red card", amount: 15 }, { name: "Forgot kit", amount: 3 }, { name: "Not paying subs on time", amount: 5 }],
      master: { name: "Ben Carter", first: "Ben", title: "Club captain" },
      list: [{ name: "Harry Webb", amount: 5, paid: false }, { name: "Harry Webb", amount: 2, paid: false }, { name: "Josh Palmer", amount: 3, paid: true },
             { name: "Dan Fletcher", amount: 5, paid: false }, { name: "Tom Reeve", amount: 2, paid: true }, { name: "Kieran Shaw", amount: 15, paid: false }]
    }
  };

  if (role === "supporters") { delete data.fines; return data; }
  if (role === "admin") return { role: "admin", site: data, passwords: { players: "PLAYERS", supporters: "SUPPORTERS", manager: "MANAGER", admin: "ADMIN" } };
  return data;
};
