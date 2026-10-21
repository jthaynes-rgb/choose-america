OAuth config for Choose America. Read from this workspace on 2026-10-18. Nothing here was published. Secret values are omitted.

Broker
- Name: Grok auth broker.
- Issuer this app uses if GROK_AUTH_ISSUER is unset: https://auth.grok.me
- Endpoints this app calls: /api/auth/oauth2/authorize, /api/auth/oauth2/token, /api/auth/oauth2/userinfo
- This app does not call Google or X itself. It asks the broker, and the broker holds the Google and X secrets.

Client setup
- Deployed: the deployer injects GROK_AUTH_CLIENT_ID and GROK_AUTH_CLIENT_SECRET for this app. Values are not in this bundle.
- Preview fallback: client id grok_preview. The preview client secret is in src/lib/auth/preview.ts in the live workspace and is NOT copied into this zip.
- Both buttons use the same client. The upstream is chosen with authorizationUrlParams.idp.
- authorizationUrlParams also sends prompt=login. A comment in src/lib/auth/server.ts says the broker sends Google prompt=select_account. That comment was not checked against the broker.

Google
- Local provider id: grok-google
- idp sent to the broker: google
- Scopes this app requests from the broker: openid, profile, email
- Upstream scopes the broker requests from Google: UNVERIFIED. Not in this repo. Not observed on a consent screen.
- Fields returned: UNVERIFIED. No userinfo payload was captured. This file does not prove name, email, picture, or handle. A comment in server.ts says Google and X carry distinct emails. Picture and handle are not named in the scope list this app sends.

X
- Local provider id: grok-x
- idp sent to the broker: twitter (Better Auth's id for X)
- Scopes this app requests from the broker: openid, profile, email
- Same list as Google. There is one scopes array shared by both providers in src/lib/auth/server.ts.
- Upstream scopes the broker requests from X: UNVERIFIED. Not in this repo. Not observed.
- Fields returned: UNVERIFIED. A comment says X emails are synthetic or unverified. Handle, picture, followers, posts, and write access were not seen.

Choose America does not show a login page. VITE_AUTH_ENABLED is false in the workspace app env. Sign-in is off.

Do not claim "name and email only". profile can mean more than a name, and the broker's upstream ask was not verified.
