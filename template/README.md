# Matchday app template

A phone app for a grassroots football club: next match, squad, fixtures, results, match reports, league table, player stats, fines, manager tools and admin pages. It is a website that installs to the home screen, so there is nothing to put in an app store.

This folder is a ready-to-run demo for a made-up club, **Oakfield Rovers**. Change two files and it becomes your club's.

The full feature guide for clubs is in [`docs/guide.html`](docs/guide.html) (also as a PDF in `docs/`).

## Try the demo

Any static web server will do:

```
cd template
python3 -m http.server 8000
```

Open http://localhost:8000 and use one of the demo passwords: `PLAYERS`, `SUPPORTERS`, `MANAGER` or `ADMIN`. The demo's dates move with the calendar, so the next match is always this Saturday.

## What's in the folder

| File | What it is | Do you edit it? |
|---|---|---|
| `config.js` | Club name, league, colours, crest, sponsor, staff, optional extras | **Yes**, once |
| `data.js` | The club's data. Demo data now; an encrypted file once you lock it | **Yes**, every update |
| `icons/` | Crest, sponsor logo, home-screen icons | Replace with your own |
| `manifest.webmanifest` | App name and colours used when it's installed | Change the names and two colours |
| `index.html` | The app itself | No |
| `sw.js` | Lets the app open with no signal | No |
| `push/onesignal/` | Match alerts worker | Only the badge name, if you change `storageKey` |
| `tools/lock.html` | Encrypts the data behind the passwords | No |

## Make it your club's

1. **`config.js`**: fill in the names, league, season, colours and staff. Every line has a comment. `name` must match the start of the club's name in the league table (for example `Oakfield` matches `Oakfield Rovers`), or your row won't be highlighted.
2. **Crest**: replace `icons/crest.svg` (or point `crest` in `config.js` at a PNG). It is shown in a circle, so a round badge or a badge with space around it works best.
3. **Home-screen icons**: replace `icons/icon-180.png`, `icon-192.png` and `icon-512.png` with the crest on the club colour, at those sizes in pixels.
4. **Sponsor**: replace `icons/sponsor.svg` and set the name and link in `config.js`, or set `sponsor: null`.
5. **`manifest.webmanifest`**: change `name`, `short_name`, `description`, `theme_color` (your primary colour) and `background_color` (your paper colour).
6. **Data and passwords**: see the next section.

## Adding the club's data and locking it

1. Serve the folder (as above) and open `/tools/lock.html`.
2. Press **Start from the demo data** and replace it with the club's own. The format is below.
3. Choose four passwords: players, supporters, manager and admin.
4. Press **Lock and download data.js**, and put that file in place of the demo `data.js`.

To make changes later, open `tools/lock.html`, load the current `data.js` with the admin password, edit, and lock again. Nothing leaves your computer while you do this.

Each password opens a different version of the app. Supporters never receive the fines data at all: it isn't in their copy.

## Data format

Dates are `YYYY-MM-DD`. Times are 24-hour `14:00`. Scores are always **our goals first**: `3-1` is a win whether home or away. `homeAway` is `Home` or `Away`. Add `(Cup)` to an opponent's name for a cup game. Put `(C)` and `(GK)` after a name to mark the captain and goalkeeper.

```js
{
  "announcement": {                 // optional "HERE WE GO!" banner at the top of the Match tab
    "title": "Rovers into the County Cup quarter-finals",
    "body": "Short paragraph.",
    "until": "2026-12-01",          // shown until the end of this day
    "kicker": "CLUB ANNOUNCEMENT", "headline": "HERE WE GO!",
    "scoreline": "Oakfield 4–0 Ashby Town",   // optional, for the graphic
    "link": "", "linkText": "",     // optional button
    "confetti": true
  },
  "nextMatch": {
    "date": "2026-11-21", "opponent": "Hollybank United", "homeAway": "Home",
    "kickOff": "14:00", "arrival": "13:00",     // arrival defaults to an hour before kick-off
    "ground": "Oakfield Recreation Ground", "address": "Station Road, Oakfield", "postcode": "OK4 7RV",
    "preview": "Paragraphs separated by a blank line."
  },
  "squad": ["Ben Carter (C)", "Matt Doyle (GK)", "Alfie Turner"],
  "fixtures": [ { "date": "2026-11-28", "opponent": "Ashby Town", "homeAway": "Away" } ],
  "results": [ {
    "date": "2026-11-14", "opponent": "Mill Lane", "homeAway": "Home", "score": "3-1",
    "report": {
      "motm": "Callum Hughes", "supporters": "Josh Palmer",
      "goals": { "Callum Hughes": 2, "Alfie Turner": 1 },
      "assists": { "Josh Palmer": 2 },
      "squad": ["Ben Carter (C)", "..."],
      "writeup": "Paragraphs separated by a blank line. A paragraph starting with * is shown as a footnote.",
      "summary": "One or two sentences for the match report graphic (optional).",
      "clubNote": "Optional thank-you to supporters, replacing the default."
    }
  } ],
  "leagueTable": { "asOf": "2026-11-14", "rows": [
    [1, "Oakfield Rovers", 12, 9, 2, 1, 22, 29, ""]   // pos, team, P, W, D, L, GD, Pts, "*" if points adjusted
  ] },
  "goals":       { "Callum Hughes": 14 },     // season totals
  "assists":     { "Josh Palmer": 11 },
  "appearances": { "Ben Carter": 14 },
  "allTimeApps": { "Ben Carter": 212 },       // every season for the club
  "records": { "appearances": { "name": "Pete Ashworth", "n": 431 } },
  "grounds": {                                 // toilets and refreshments, shown to supporters and the manager
    "Oakfield": { "toilets": "Yes", "refreshments": "Tea hut" },
    "Ashby Town": { "toilets": "On request", "refreshments": "No", "aka": ["Ashby"] }
  },                                           // values: "Yes", "No", "On request", "Not known" or any short description
  "fines": {                                   // players and manager only
    "rules": [ { "name": "Late for kick-off", "amount": 5 } ],
    "master": { "name": "Ben Carter", "first": "Ben", "title": "Club captain" },
    "list": [ { "name": "Harry Webb", "amount": 5, "paid": false } ]
  }
}
```

Leave out anything the club doesn't use. No `fines` means no Fines tab. No `grounds` means no facilities shown.

### Weekly routine

| When | What to update |
|---|---|
| Fixtures announced | `fixtures`, and `nextMatch` for the next game |
| Squad picked | `squad` |
| After the game | Move the game from `fixtures` to `results` with the score and report; update `goals`, `assists`, `appearances`, `allTimeApps`; set the new `nextMatch`; clear `squad` |
| Table changes | `leagueTable` from FA Full-Time |

The admin **Check** tab lists anything that's out of date.

## Putting it online

Any static host works. The free option most clubs use is **GitHub Pages**:

1. Create a GitHub repository and upload the contents of this folder.
2. Settings → Pages → deploy from the main branch, root folder.
3. The app is live at `https://<username>.github.io/<repository>/`. Put that in `siteUrl` in `config.js`.
4. Set `githubRepo` in `config.js` to `<username>/<repository>` to show the real update history on the admin History tab.

Netlify, Cloudflare Pages or the club's existing web host work just as well: upload the folder.

## Optional extras

Both are free for a club this size and both are switched off until you add them to `config.js`.

**Visitor numbers (GoatCounter).** Sign up at goatcounter.com, put the address in `goatcounter` and set `statsSince`. In GoatCounter's settings tick *Allow adding visitor counts on your website*. For live numbers in the admin pages, create an API key and paste it into the lock tool's GoatCounter box. GoatCounter uses no cookies and collects no personal data. Until it's set up, the admin pages show made-up sample numbers.

**Match alerts (OneSignal).** Create a free OneSignal web push app for the site's address, then put the App ID in `onesignal.appId`. If the app lives in a sub-folder (as on GitHub Pages), put the folder name in `onesignal.basePath`. Phones that turn alerts on are tagged by group (`role` = players, supporters or manager; `team` = 1 for anyone who isn't a supporter), so you can send squad news to the team only and full-time scores to everyone from the OneSignal dashboard. On iPhone, alerts work once the app has been added to the home screen (iOS 16.4 or later).

## Good to know

- The encryption keeps the data private from anyone without a password. Anyone *with* a password can see that version, and passwords get shared, so don't put anything in that the club wouldn't want a member to see.
- Phones keep the last copy, so the app opens with no signal at the ground. Pull down in the installed app to check for updates; it also checks automatically when reopened.
- If `name` doesn't match the table, fix `name` in `config.js` rather than the table.
