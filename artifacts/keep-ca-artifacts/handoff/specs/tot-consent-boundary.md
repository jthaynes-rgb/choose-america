MASTER PROMPT: TOT Consent Boundary (Codex-compatible)

Command, Escape, and TOT share one desk. Do not redesign. Keep every existing page, theme (light, dark, contrast), the 300-character wire, chronological order, the six seats, and the I CONFIRM gate exactly as they are. This change adds one boundary and states it in plain words.

GOAL
TOT is the desk's extension into the public web. Its account is a public handle only. TOT collects nothing the person has not approved, and it must say so on its own pages.

RULES
1. Account scope. The TOT account holds only: @name, display name, password hash, sign-in email, the public wire posts, and follows. Nothing from the Command vault, no keys, no notes in clear text unless the person files them, and no third-party tokens.
2. No collection without approval. TOT does not read contacts, location, device lists, other apps, browser history, or imported social graphs. Google or X sign-in requests identity only (name and email), never contacts, followers, posts, or write access.
3. Approval is explicit and per item. Any new data TOT would hold (for example importing a follow list) appears as a card naming exactly what is taken and why. Nothing is taken until the person types I CONFIRM. A bot cannot arm it.
4. Fix the clear-text handoff. A note filed from Command reaches the TOT desk only when the person chooses "Copy to desk" on that note. The default is the sealed copy only. The card says: "This copy is readable on your TOT desk."
5. No tracking. No analytics, no third-party scripts, no ad pixels, no fingerprinting. Server logs keep no IP addresses beyond what abuse limits need, and are cleared on a stated schedule.
6. Export and leave. The person can export everything TOT holds as text and delete the account. Deleting removes the desk from the server. Command and Escape are untouched.
7. Say it on the page. Add to /ethos and /privacy, word for word:
   "TOT is the desk's voice on the public web. The account is a name, not a vault. TOT takes nothing you did not approve. Keys, notes, and tokens stay on Command."
   Add to /login, under the fields:
   "Google or X sign-in shares your name and email only."
8. Codex alignment. Update Codex v1 wording in all three apps to:
   "Codex v1. Hold the line. One channel. No personal account holds the vault."

ACCEPTANCE CHECK (report each as pass or fail before delivery)
- The TOT database schema contains only the fields in rule 1.
- OAuth scopes requested are identity and email only.
- No network request leaves TOT to an analytics or ad host.
- A filed Command note does not appear on TOT until "Copy to desk" is chosen.
- The /ethos, /privacy, and /login text matches rule 7 exactly.
- Export returns all held data. Delete removes it.
- Nothing else changed: same pages, themes, seats, gate, and limits.

COMPATIBILITY
A version that adds an account field beyond rule 1, a seventh seat, a bot that sends, posts, or deletes, or any data collection without I CONFIRM is not compatible.
