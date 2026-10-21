# Handoff

Seat: Choose America / Aethelos, this workspace only. No primer/, aesthetic/, review/, or Corrections Ledger exists here. Those were not mine. Canon and doctrine were not edited for this handoff.

## What I built, and where

Choose America. One channel. Four regions (Gulf Coast, Appalachian, Atlantic Coastal, Urban). The line stays on the device. No account. Autonomy is not armed.

- `src/components/choose/console.tsx` — the desk: line, mic, talk, ear, lift, Escape, TOT.
- `src/lib/dialect/lexicon.ts` — the four regions and the glosses.
- `src/lib/dialect/parse.ts` — hold, gloss, readback, drop, escape, tot. Mail, phone, and password are not kept.
- `src/lib/dialect/speech.ts` — on-device ear. Browser pack only if it stays local. Otherwise Whisper in the tab. No cloud recognizer.
- `src/lib/dialect/ear.worker.ts` — `Xenova/whisper-tiny.en`, q8, wasm.
- `src/lib/dialect/bias.ts` — dialect lift. Not a fine-tune. Weights are not changed.
- `src/lib/aethelos/command.ts` — local envelope. Event `aethelos-command`. `armed` is always false. Not posted out of the window.
- `src/routes/index.tsx` — the only page.
- `src/styles.css` — paper theme.
- `src/lib/og/site.json` — title Choose America.
- `public/favicon.svg`
- `specs/tot-consent-boundary.md` — the master prompt, rules 1–8, as given. Not built.
- `specs/oauth-notes.md` — scopes I could actually see.

There is no /ethos, /privacy, or /login page. There is no TOT database, export, or delete. There is no six-seat wire and no 300-character limit in this app.

## Approved (quoted)

Ethos and privacy, approved as written:

"TOT is the desk's voice on the public web. The account is a name, not a vault. TOT takes nothing you did not approve. Keys, notes, and tokens stay on Command."

Login, not approved as "name and email only". Placeholder until scopes are confirmed:

"Google or X sign-in shares only basic profile details (name, email, picture). Nothing else is requested."

Codex v1 target sentence, stated by you, not yet written into this app:

"Codex v1. Hold the line. One channel. No personal account holds the vault."

## Still waiting (numbered)

1. Rule 4. Current text: A note filed from Command reaches the TOT desk only when the person chooses "Copy to desk" on that note. The default is the sealed copy only. The card says: "This copy is readable on your TOT desk."
2. Rule 8. Current text: Update Codex v1 wording in all three apps to "Codex v1. Hold the line. One channel. No personal account holds the vault."
3. The /login line, after the real Google scopes and the real X scopes are known. Nothing about sign-in or data sharing goes public until 1 and 2 are confirmed.
4. Optional Codex upgrade "One channel in, nothing out." Do not add it. It is not literally true here. The spoken line is not uploaded. The in-tab ear does fetch its weights once from Hugging Face, and the wasm comes from the app host.

## Scopes, login line, Codex decision

Google, as this app asks the broker: `openid`, `profile`, `email`. Returns: not verified. `profile` can include a picture. Handle: not requested by this file.

X, as this app asks the broker: the same three, `openid`, `profile`, `email`. The broker's own ask to X was not seen. Do not claim followers, posts, or write, and do not claim they are absent upstream.

Final /login line for now: do not publish one. If a placeholder must sit in a draft, use your sentence about basic profile details (name, email, picture). Do not use "name and email only".

Codex v1 in the running app today is a different sentence: "Codex v1. Escape and TOT share this desk. One channel. No account. Autonomy is not armed." Left as-is. "One channel in, nothing out" is not true enough to ship.

## Next step

Do not ship sign-in copy. Wait for approval of rules 4 and 8. Then verify the broker's upstream Google and X scopes, rewrite the login line to match, and only then add the ethos, privacy, and login sentences on the TOT pages. This Choose America app is not those pages.

## Not verified

Acceptance checks for the consent boundary: all fail, because that product was not built here. Whisper lift was not scored on real dialect audio. The browser on-device pack path was not confirmed on your phone. I did not watch a live Google or X consent screen.
