# Choose America handoff

Pass 4. Not published. Joshua has not said to publish.

## Routes

- `/` and `/america` — the reader. Region, hold to speak, the line, the reading.
- `/ethos` — the rules, in plain words.
- `/privacy` — what is kept and what is not.
- No `/login`. No account.

## Data

The spoken line is not written down. On load the page removes `choose-america.v1` if a browser left it there. There is no timeline, so there is nothing to clear. Kronos is not used.

The command envelope stays `armed: false`. It is not posted out of the window.

The ear weights may stay in the browser cache so the next open does not fetch them. That cache is the model, not the line.

## Model

`Xenova/whisper-tiny.en`, quantized q8. The worker loads it. Weights come from huggingface.co and cdn-lfs.huggingface.co. The wasm file is served by this app. Audio is turned into text in the worker. Only the finished text comes back to the page.

## Live vs draft

Live, checked 18 Oct 2026 12:10 UTC. The page has the flag. Bundle names: `index-DaUZ5Wd6.js`, `console-C-d6jPny.js`, `america-CxcJF0wR.js`, `styles-Bj9pbuoc.css`.

This archive is that source plus edits that are not on the live site:

- A download bar with the model size, then "The ear is on this device." If it fails, the screen says the ear did not load. It does not sit on "Loading" forever.
- `/ethos` says you are the final authority and the model is only an instrument, and that only the finished words cross to the screen.
- `/privacy` says no timeline is kept, and that keeping the line on the device is a goal, not a finished claim.

## Security headers

Set in `server/middleware/security-headers.ts`. The live response carried this policy (the two sha256 values are for that response's inline scripts):

`default-src 'self'; script-src 'self' 'wasm-unsafe-eval' 'unsafe-eval' https://grok.com 'sha256-oAO1eIQEz1ymyZSJahQe1UvP7fgfGF3nSOi80njsnYY=' 'sha256-REkTQ3mZNdOnZ0xWxlKdqBEAWdIVpJdIT6tm57gvq8Y='; style-src 'self'; font-src 'self'; img-src 'self' data:; connect-src 'self' https://huggingface.co https://cdn-lfs.huggingface.co https://*.hf.co https://app-builder-deployer.grok.com; worker-src 'self' blob:; media-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'`

`Permissions-Policy` is `microphone=(self), camera=(), geolocation=()`, from the same file. HSTS on the live response is the host's (`max-age=31536000`). `x-robots-tag: noindex` is host-forced.

## Not checked

A microphone take in a browser. The wasm path inside the page. A second visit proving the browser cache. A phone.
