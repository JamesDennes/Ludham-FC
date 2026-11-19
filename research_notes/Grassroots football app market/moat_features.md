# Moat features and strategies for a small grassroots football club app (England)

Method note: research done via web search on 2026-11-19. Direct page fetches to stripe.com, gocardless.com and help.pitchero.com were blocked by this session's network settings, so figures for those come from search-result snippets of the vendor pages and third-party summaries, not from reading the pages in full. Searches did not surface any Reddit threads (r/grassrootsfootball, r/bootroom, r/sundayleague); pain-point evidence is from blogs, press and vendor surveys. Much of the evidence is vendor marketing and is flagged where it is.

## 1. What grassroots managers and club secretaries complain about

### Takeaway
The steady complaints are chasing money (subs, match fees, ref fees, fines) and chasing availability through WhatsApp groups. Admin falls on one or two volunteers, and some say they are thinking of quitting over it. The best figures come from vendor surveys, so treat them as directional.

### Cited Findings
- GoCardless research (2026 press release): 44% of grassroots football officials are considering quitting because of the admin burden of chasing payments. This is a vendor study, not an FA survey. — [FF News](https://ffnews.com/news/gocardless-research-reveals-grassroots-football-crisis-as-44-of-volunteers-consider-quitting-over-admin-burden)
- FORZA 2026 grassroots report (409 UK clubs): 99% of clubs depend on volunteers, and 61% say a referee shortage is a serious problem already affecting games. — [FORZA grassroots report](https://www.forza.com/uk/football/grassroots-report)
- "67% of club volunteers now spend more time on administrative tasks than on actual football related activities", attributed to an FA Grassroots Survey 2023. This is a secondary source; I could not find the original FA publication. — [TeamStats blog](https://teamstats.net/blog/celebrating-the-volunteers-behind-grassroots-football)
- The FA has over 1 million volunteers, including 160,000 coaches and 37,000 referees. — [FA written evidence to Parliament](https://committees.parliament.uk/writtenevidence/134345/html/)
- An April 2024 survey found English grassroots clubs see bad weather, the cost of living and insufficient funding as serious threats to their existence. — [Guardian via PressReader](https://www.pressreader.com/usa/the-guardian-usa/20240501/282587383051223)
- Vendor estimates of time spent: about 3-4 hours a week collecting availability, and 8-12 hours a week of total volunteer admin. WhatsApp is described as "particularly problematic" because availability messages get buried, and a typical cycle is to post, wait about two days, and still be missing replies. These are vendor claims. — [TeamStats: improving response rates](https://www.teamstats.net/blog/improving-response-rates-to-availability-requests); [TeamStats: automating availability](https://www.teamstats.net/blog/automating-player-availability-updates)
- A Sunday league manager's first-hand account compares chasing players for money to being a loan shark. Players promise to pay "after the game" and don't, and some teams set a cap on what a player can owe before being barred from playing. — [Jim Taylor: running a Sunday league team](https://iamjimtaylor.com/posts/running-a-sunday-league-football-team)
- Collecting ref fees after the match is called a "nightmare": ref money was requested in the group chat and players still forgot it. — [Playfinder: 5 problems every captain faces](https://www.playfinder.com/blog/5-problems-every-captain)
- Another estimate puts admin at 6-8 hours a week, usually landing on one volunteer. — [Kitlocker blog](https://www.kitlocker.com/blog/how-to-successfully-run-a-grassroots-football-team)
- Teams get league fines for missed admin duties, and the team is liable but may pass them on to the player at fault. — same Sunday league sources above; also [GoCardless blog: reducing admin](https://gocardless.com/blog/three-ways-grassroots-football-clubs-can-reduce-their-admin-burden)
- A pro-Spond editorial argues WhatsApp and Facebook aren't built for grassroots sport and raises GDPR and safeguarding concerns. It is promotional. — [Grassroots Post](https://www.grassrootspost.uk/2022/03/21/spond/)
- The FA's own Matchday app was launched (2018) in response to a Telegraph campaign to cut grassroots bureaucracy. It sits on the Whole Game System as the official record for fixtures, results and registration, offers availability checking, and added PayPal for match fees and subs in 2019. — [Yahoo/Telegraph](https://sports.yahoo.com/fa-answers-telegraph-call-slash-000100910.html); [FA: PayPal partnership](https://www.thefa.com/news/2019/feb/27/fa-paypal-partnership-kicks-off-270219); [FA Whole Game benefits](https://www.thefa.com/get-involved/matchday/whole-game-system/benefits)

### Inferences
- The biggest and most emotional pain is money collection, more than comms. A product that ends "who still owes?" (auto-reminders, a debts ledger, linking fines to the ledger, and a block on selection when someone owes over a cap) attacks the pain that makes volunteers quit.
- The product already does ready-to-paste WhatsApp messages. That works with the channel players actually use, where Spond and Teamer try to replace it. "Works with your WhatsApp group" is a credible position, because the complaint is buried messages and unanswered polls, not WhatsApp itself.
- The done-for-you service answers the "one overloaded volunteer" problem directly. None of the self-serve competitors offer that.

### Gaps
- No Reddit threads came up in search. Direct first-hand forum sentiment (r/sundayleague, r/bootroom) wasn't captured, and a targeted Reddit search or browse is still needed.
- I couldn't verify the FA 2023 "67%" figure at source.
- I found no independent survey on social media burden for club secretaries.

## 2. Engagement features that drive usage

### Takeaway
Player-of-the-match voting, live score and event updates with push, and stats or awards are standard in grassroots apps (Pitchero, Mingle Sport, Clava, FTACT, Clubzio). I found no independent data quantifying their effect on engagement at grassroots level. The case for them rests on vendor claims and pro-club practice.

### Cited Findings
- Pitchero: team admins and webmasters can enter live scores and match events from their phone. Events appear in the app and on the website, post automatically to the club's social accounts, and trigger push notifications to app members. League tables update from the results entered, and leagues can require admin verification of club-entered scores. — [Pitchero help: scores & match events](https://help.pitchero.com/knowledge/club-app/scores-match-events); [Pitchero blog: add match events from your phone](https://blog.pitchero.com/add-match-events-straight-from-your-phone); [Pitchero help: manage league results](https://help.pitchero.com/knowledge/manage-league-results)
- Pitchero says over 10,000 clubs use it worldwide. Elite and Ultimate packages include a club domain and email. One cricket-board page lists Elite at £360 a year and Ultimate at £840 a year, which may be out of date. — [Pitchero: why Pitchero](https://join.pitchero.com/clubhouse/what-does-pitchero-offer-my-sports-club); [Cricket Yorkshire](https://cricketyorkshire.com/cricket-club-website)
- Mingle Sport offers post-match voting in three categories (MVP, Playmaker, Workhorse), live scoring, and match reports visible to followers. — [Soccer Scene: Mingle Sport](https://soccerscene.com.au/mingle-sport-transforming-grassroots-football-management/)
- Clava (amateur football live results) has Man of the Match voting with live percentages. — [Clava listing](https://mwm.ai/apps/clava-live-results/1637227932)
- FTACT has a live match centre and fan polls, including POTM voting by fans and parents. — [FTACT App Store](https://apps.apple.com/ae/app/ftact-ft/id6749849332)
- Clubzio offers web-based MVP voting with no app download needed for voters. This is vendor marketing. — [Clubzio MVP voting](https://clubzio-landingpage.pages.dev/mvp-voting-app/)
- Scoreshare is a live scoreboard followed through a shared link. — [Scoreshare listing](https://mwm.ai/apps/soccer-scoreboard-scoreshare/6738917403)
- At pro level, player and goal voting is a staple: there is a YinzCam case study for Brentford's goal and player voting. — [YinzCam: Brentford](https://casestudies.yinzcam.com/p/brentford-goal-player-voting)

### Inferences
- POTM voting, live scores and stats are table stakes, not a moat. Any of them can be copied in weeks. What is defensible is the accumulated output: a season-by-season POTM history, appearance milestones (100 apps), all-time top scorers and head-to-head records against each opponent, which a club can't take with them.
- No-install web voting (a link pasted into WhatsApp) fits the PWA and WhatsApp-first approach and lowers the participation barrier compared with app-download competitors.
- Milestone push alerts ("X is 2 games from 100 apps") and auto-generated milestone graphics give supporters and family reasons to share content. These features turn the stats archive into social reach.

### Gaps
- I found no independent quantitative evidence (retention or DAU uplift) for POTM voting, predictions, digital programmes or club history archives in grassroots apps.
- I didn't find Pitchero GameDay-specific or Spond engagement data.

## 3. AI-generated match reports and AI social content

### Takeaway
AI match reports and auto result graphics are now a crowded niche in 2025-26 (TeamStats, FootballGPT, Match Report Pro, FootBot, Show Your Score, CapCut templates). Generation alone is not a differentiator. What could differentiate is the input pipeline (one email or voice note in, everything out) and a human-checked, done-for-you finish.

### Cited Findings
- TeamStats markets AI "newspaper-style" match reports built from match data, and notes that automated reports state facts (scorers, assists) while the best leave room for coach observations. — [TeamStats: generating match reports automatically](https://www.teamstats.net/blog/generating-match-reports-automatically)
- FootballGPT "Voice Match Notes" turns post-match voice notes into a transcript and report with player ratings, timeline and training recommendations. Its "Graphics Studio" makes matchday result cards with "no design skills needed". — [FootballGPT voice notes](https://footballgpt.co/features/voice-match-notes); [FootballGPT Graphics Studio](https://footballgpt.co/features/graphics-studio)
- Match Report Pro (iOS, free) generates a match report from live scoring actions. — [App Store](https://apps.apple.com/us/app/id1278860386)
- FootBot (grassroots-focused): admins enter results manually and it outputs result graphics, fixture announcements and MOTM posts with sponsor logos, with no data integration required. — [FootBot](https://statbot-5o3.pages.dev/social-media-content)
- Other graphics tools: Show Your Score (multi-sport), Social Sports Manager (fixture and result templates covering 500+ grassroots leagues according to its listing), 4KMATCH, Sportgraphics (animated, early-stage), and CapCut AI matchday post guides. — [Show Your Score](https://spark.mwm.ai/us/apps/show-your-score/6476277229); [Social Sports Manager](https://apps.apple.com/us/app/id1220504256); [Sportgraphics](https://www.producthunt.com/products/sportgraphics); [CapCut](https://www.capcut.com/ideas/ai-poster-generator/ai-sports-team-match-day-post-maker)
- Teamo partners with GetSocial for club social media output. — [Teamo/GetSocial](https://sites.teamo.chat/teamo/boostYourClubsSocialMediaWithgetsocial)
- Pitchero automatically shares live match events to club social accounts. — [Pitchero help](https://help.pitchero.com/knowledge/club-app/scores-match-events)

### Inferences
- Because many tools generate reports and graphics, the edge is in removing the input step. The email-to-update pipeline (manager sends one rough email or WhatsApp after the game, and it produces the report, graphics, table update, stats and push) is a stronger story than "AI writes reports".
- Reports grounded in the club's own history ("first win at X since 2019", "Y's 50th goal") are only possible with the accumulated archive, so AI output quality compounds with data lock-in.
- Reception risk: generic AI text in a small community is easy to spot. Human review in the done-for-you tier, and a light "coach's comment" field, address this. TeamStats itself concedes the point.

### Gaps
- I found no independent evidence on how grassroots audiences receive AI-written reports (sentiment, engagement versus human-written).
- I found no data on whether auto graphics raise club social follower growth.

## 4. Sponsor value features

### Takeaway
Digital sponsorship for grassroots clubs is being packaged (in-app tiles, sponsor pages, attention reports), and County FAs have partnered with SNAP Sponsorship. Local sponsors still value physical visibility, and there are no public benchmarks for grassroots digital impressions. A measurable sponsor report would set the product apart.

### Cited Findings
- ClubSpot offers clubs up to 10 (in another article 25) in-app sponsor banners linking to sponsor sites, sold as 24/7 visibility compared with pitch boards. This is vendor marketing. — [ClubSpot: digital sponsorship in your app](https://www.clubspot.app/post/how-your-club-can-leverage-digital-sponsorship-within-your-app); [ClubSpot: selling sponsorship](https://www.clubspot.app/post/how-do-you-sell-sponsorship-on-your-club-app)
- Guidance: sponsors "don't buy a logo on the homepage". Report impressions, clicks and leads, UTM-tag every sponsor link, report monthly, and don't depend on sponsors sharing their sales data. — [Purple Imp](https://purpleimp.com/stop-selling-logos-start-selling-outcomes-sponsorship-roi-for-clubs/)
- SNAP Sponsorship: digital assets are cheap to deliver and can be bundled into higher-value packages. SNAP has partnerships with Oxfordshire FA and Liverpool County FA to boost grassroots club revenue. — [SNAP: digital assets](https://site.snapsponsorship.com/news/how-digital-assets-increase-sponsorship-value-at-grassroots-level); [SNAP + Oxfordshire FA](https://site.snapsponsorship.com/news/snap-sponsorship-and-oxfordshire-fa-partner-to-strengthen-grassroots-football-sustainability); [SNAP + Liverpool County FA](https://site.snapsponsorship.com/news/snap-sponsorship-partners-with-liverpool-county-fa-to-boost-grassroots-club-revenue/)
- FootballGPT is piloting digital-only shirt sponsorship (placement, sponsor page, "attention report", explicitly no guaranteed leads). — [FootballGPT shirt sponsor lab](https://footballgpt.co/labs/shirt-sponsor)
- Local sponsors tend to value physical touchline visibility, so digital works best as an add-on to kit and boards. — [TeamStats](https://www.teamstats.net/blog/evaluating-commercial-opportunities-beyond-local-borders)
- TeamApp lets clubs replace its in-app ads with their own sponsor content. — [TeamApp advertising info](https://support.teamapp.com/en/knowledgebase/5-general-faqs/docs/3-advertising-information)

### Inferences
- Moat feature: an automatic end-of-season (or monthly) sponsor report PDF. It would cover app opens, sponsor-logo impressions on every auto-generated graphic and how often those graphics were shared, push notifications carrying the sponsor's name, and link clicks. Clubs can then re-sell renewals with evidence, and if the app pays for itself through sponsorship, churn falls.
- "Matchday sponsor" or "POTM sponsored by X" slots on auto graphics multiply sponsor inventory without extra volunteer work.
- Member offers (a discount at a sponsor's pub or shop shown in the app) create a reason for players and supporters to open the app, and a measurable outcome for the sponsor.

### Gaps
- I found no public CPM, impression or click-through benchmarks for grassroots club apps or websites, and no published rate cards.

## 5. Payments: subs, match fees, fines

### Takeaway
Payment processing is how the leading free competitors make money (Spond is free and ad-free, earning purely on transactions at 2.5% + 20p in GBP). Raw Stripe is 1.5% + 20p and GoCardless Direct Debit is about 1% + 20p capped at £4. A lower-fee, ledger-based approach that understands fines is a credible wedge.

### Cited Findings
- Spond is "free to download, free to use and completely ad-free", with a "purely transactions-based" model. It charges only for payment processing and fundraising, uses Stripe, and Stripe's case study cites 50,000+ clubs and teams and 40% annual payment growth across 19 countries. — [TechRound interview with Spond](https://techround.co.uk/interviews/a-chat-with-trine-falnes-spond/); [Spond help: free to use](https://help.spond.com/en/articles/25998-spond-is-free-to-download-and-use); [Stripe: Spond case study](https://stripe.com/en-gi/customers/spond)
- Spond Club GBP fee: 2.5% + £0.20 per transaction. The club absorbs it by default and can pass it to members. UK payments are processed via the Norwegian parent and sit outside UK VAT. — [Spond help: transaction fees](https://help.spond.com/club/en/articles/58192-what-are-the-transaction-costs-for-payments-made-in-spond-club); [Spond help: VAT and fees](https://help.spond.com/club/en/articles/600536-vat-and-fees-what-clubs-need-to-know)
- Pitchero adds its own fee on top of processor fees. Its June 2025 help page shows 1.1% (Pro) and 2.2% (Standard) plus Stripe card fees for international clubs. UK fees vary by charity or CASC status, VAT status, package, and whether the club uses Stripe Connect Express or GoCardless. An undated blog gives older figures (0.90% Pro and 1.90% Standard). Pitchero runs a "Price Promise" to beat rivals' fees for clubs processing over £25k a year. — [Pitchero UK fees](https://help.pitchero.com/knowledge/pitchero-club-website/payment-tools/transaction-fees); [Pitchero international fees](https://help.pitchero.com/knowledge/pitchero-club-website/payment-tools/international-transaction-fees); [Pitchero Price Promise blog](https://blog.pitchero.com/digital-payment-processing-the-pitchero-price-promise); [Pitchero fee guarantee](https://help.pitchero.com/knowledge/pitchero-club-website/payment-tools/fee-guarantee); [Pitchero: lower fees for charities/CASCs](https://blog.pitchero.com/lower-transaction-fees-for-charities-cascs-non-profits)
- Stripe UK: standard UK cards 1.5% + 20p (in effect since April 2023), and premium UK cards 1.9% + 20p according to secondary sources. Stripe Billing surcharge figures conflict across sources (0.5% versus 0.7%). — [Stripe support: UK pricing updates](https://support.stripe.com/questions/pricing-updates-for-businesses-in-the-united-kingdom); [We Are Founders: Stripe fees UK 2026](https://www.wearefounders.uk/stripe-fees-uk-2026/)
- GoCardless UK Direct Debit is about 1% + 20p, capped at £4, on the Standard plan according to secondary sources. One table gives 1-1.4% depending on plan. GoCardless claims Direct Debit is 56% cheaper than cards (vendor claim). — [WorldFirst: GoCardless fees](https://www.worldfirst.com/uk/blog/global-business-tips/go-cardless-fees/); [Wise: GoCardless vs Stripe](https://wise.com/gb/blog/gocardless-vs-stripe-uk); [GoCardless football page](https://gocardless.com/g/football-clubs-prize-draw)
- SumUp payment links: 2.5% on pay-as-you-go. The subscription plan (£19 a month) has a reported 0.79-0.99% rate, but sources conflict. — [Wise: SumUp payment links](https://wise.com/gb/blog/sumup-payment-links); [SumUp pricing](https://sumup.co.uk/pricing)
- TeamApp is free and ad-funded, with a member ad-removal fee (about US$2.99 a year) and transaction fees on its Store feature. — [TeamApp: cost](https://support.teamapp.com/en/knowledgebase/5-general-faqs/docs/97-cost-of-team-app); [TeamApp App Store](https://apps.apple.com/us/app/team-app-your-team-your-app/id625607532)
- SportMember (a competitor's own marketing) quotes £0.35 + 1%. — [SportMember vs Spond](https://www.sportmember.co.uk/en/clubmanagement/sportmember-vs-spond)

### Inferences
- Worked example: a £5 match fee costs about £0.33 on Spond (2.5% + 20p), about £0.28 on raw Stripe (1.5% + 20p) and about £0.25 on GoCardless (1% + 20p). The fixed 20p dominates small payments, so the efficient approach is to batch: a monthly Direct Debit or one "settle up" payment of the running balance (subs + match fees + fines) rather than a payment per match.
- A per-player balance ledger (owed, paid, fines added automatically from the fines feature) with a "pay your balance" link pasted into WhatsApp is more defensible than raw payments. Once a club's money history lives there, switching means reconciling the books.
- Revenue: a small platform fee on top of Stripe or GoCardless (still under Spond's 2.5% + 20p) could fund the service. The pitch is "cheaper than Spond and it understands fines".

### Gaps
- I couldn't load stripe.com, gocardless.com or help.pitchero.com directly, so figures are from search snippets and secondary sources. Confirm them before quoting.
- No results came back for Heja, Teamer or ClubBuzz pricing or payment models.

## 6. Network effects and distribution: leagues, County FAs, cross-club data

### Takeaway
The FA's systems (Whole Game, Full-Time, Matchday) are the official league data spine, and the FA restricts scraping and league-wide harvesting. County FAs do sign commercial partners (London FA with Footy Addicts; Oxfordshire and Liverpool County FAs with SNAP). League-level live scoring with verification already exists in Pitchero. A crowd-sourced away-ground directory has no obvious incumbent in the sources found.

### Cited Findings
- FA Full-Time integration with Whole Game is triggered by the league via its County FA. Divisions, cups, team admins and players are pushed from Whole Game into Full-Time. — [FA: Full-Time integration manual](https://grassrootstechnology.thefa.com/support/solutions/articles/48001175625-full-time-integration-manual); [Lancashire FA integration steps](https://lancashirefa.freshdesk.com/support/solutions/articles/76000046348-step-by-step-process-for-integration)
- The FA moved Full-Time embed code into the admin area "to reduce the risk of other sites or products scraping" league-wide fixtures and results. Club-level embeds remain available. — [FA: embedding Full-Time feeds](https://grassrootstechnology.thefa.com/support/solutions/articles/48001158072-embedding-league-tables-fixtures-tables-full-time-feeds-)
- FA website and app terms prohibit scraping, crawling and text or data mining. — [FA terms](https://www.thefa.com/public/terms); [FA App terms](https://englandfanapp.thefa.com/support/solutions/articles/48001281400-the-fa-app-terms-of-service)
- Third-party Full-Time scrapers exist (an Apify actor), which shows the practice exists but not that it is permitted. — [Apify FA Full Time scraper](https://apify.com/abe/fa-full-time-results-scraper/api)
- County FA partnerships: London FA with Footy Addicts (2020); Oxfordshire FA and Liverpool County FA with SNAP Sponsorship. — [London FA](https://www.londonfa.com/news/2020/oct/28/london-fa-and-footy-addicts-announce-new-partnership-to-boost-grassroots-participation); [SNAP + Oxfordshire FA](https://site.snapsponsorship.com/news/snap-sponsorship-and-oxfordshire-fa-partner-to-strengthen-grassroots-football-sustainability)
- Pitchero leagues: league, division and club admins enter live scores, leagues can require verification, and tables update automatically. — [Pitchero: manage league results](https://help.pitchero.com/knowledge/manage-league-results)
- Pelly (a football operations platform) signed a league-wide deal with the JD Cymru Premier in Wales, an example of league-level selling, though at a higher level than grassroots. — [FAW: Pelly](https://faw.cymru/cymru-leagues/news/jd-cymru-premier-partners-up-with-football-operations-platform-pelly/)
- Teamo positions itself as complementing, not replacing, FA systems (affiliation, registration, Full-Time, Matchday). — [Sportplan: FA Matchday and Spond alternatives](https://www.sportplan.net/drills/Football/guides/fa-matchday-spond-alternatives-football.jsp)

### Inferences
- League-wide sale: a small district or Sunday league (for example, all clubs in one Norfolk league) is a natural unit. One league deal gives every club a themed app, and the league gets consistent results and tables, a league-wide sponsor slot and a league "hub". Each club's app then shows opponents' info, so every additional club in the league makes the others' apps better. This is a real local network effect.
- Away-ground directory (parking, changing rooms, postcode, pitch surface, nearest pub, kick-off quirks) crowd-sourced across clubs is cross-club data that no competitor in the sources has. Every club using the product adds grounds, and new clubs in the same league inherit a complete directory. Referee-facing info (directions, contact, kit colours) helps too, given 61% of clubs report referee shortages.
- Position against FA systems: complement Full-Time and Matchday rather than compete. Use club-level embeds or permitted feeds plus the email ingestion, and avoid scraping given the FA's terms. A County FA endorsement is plausible (precedents exist) but would need a safeguarding and GDPR story.

### Gaps
- I found no current (2025-26) list of FA-approved third-party data partners or a Full-Time API licence for third parties.
- I found no evidence of any grassroots app selling league-wide in England at district or Sunday league level, with pricing. Pitchero's league product pricing wasn't found.
- I found no existing crowd-sourced away-ground directory for grassroots football (absence in results is not proof of absence).

## 7. Data moat and switching costs

### Takeaway
Competitors hold fixtures, availability and payment data, but none of the sources show them building rich club-history archives. Long-run lock-in comes from accumulated history (appearances, goals, POTM, milestones, records, honours, photos), money ledgers, sponsor reporting records and cross-club ground data, all of which build up each season and are painful to rebuild elsewhere.

### Cited Findings
- Pitchero brings ECB Play-Cricket data into cricket club sites (fixtures, results, tables, scorecards within 24h), showing the value of attaching to the governing-body data spine. — [Pitchero blog: Play-Cricket](https://blog.pitchero.com/connect-your-club-website-to-ecb-play-cricket)
- The FA systems are the "official record" for fixtures, results and registration. They are not a rich club-history or stats product. — [Sportplan guide](https://www.sportplan.net/drills/Football/guides/fa-matchday-spond-alternatives-football.jsp); [FA Whole Game benefits](https://www.thefa.com/get-involved/matchday/whole-game-system/benefits)
- Payments growth at Spond (40% a year according to the Stripe case study) shows money flows are the sticky, monetised layer for incumbents. — [Stripe: Spond](https://stripe.com/en-gi/customers/spond)

### Inferences
- Moat layers ranked by defensibility:
  1. Club history archive: back-fill past seasons from old programmes, Full-Time history and the club's own records (a done-for-you job competitors won't do), plus player career pages, records and honours boards.
  2. Money ledger: running balances and fines history.
  3. Sponsor proof: multi-season impressions reports used in renewals.
  4. Cross-club data: ground directory and opponent head-to-heads, which strengthens with league density.
  5. Brand and theme: a club-identity PWA icon on phones. This is weak but helps.
- Offering data export eases club fears of being locked in and is good practice (GDPR). The moat should come from the convenience of the archive and the effort of re-creating it, not from trapping data.
- The done-for-you service is itself a moat with small clubs. Competitors are self-serve software, and the human relationship plus email automation is hard for venture-backed SaaS to copy cheaply.

### Gaps
- I found no evidence on churn rates or switching behaviour among grassroots clubs moving between Pitchero, Spond and others.
- I found no data on how much clubs value history archives (willingness to pay).
