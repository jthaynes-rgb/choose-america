import { q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Page } from "./page-Ci07bqdO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-EQ3veh-c.js
var import_jsx_runtime = require_jsx_runtime();
function Privacy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: "Privacy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The spoken line is not stored, so there is no export and no delete for it. No timeline of lines is kept." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The line stays in the tab until you leave. It is not sent to a model off this device. It is not posted out of the window." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No analytics, no ad script, no third-party tracker." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Keeping the line on the device is the goal. This page does not call that finished." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Weights for whisper-tiny.en may be fetched once from Hugging Face and kept in this browser so the next load does not fetch them again. The wasm comes from the app host. That download is the ear, not the line. During a take, the page counts network calls. Zero means nothing left this device." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "There is no sign-in page. These pages are open to crawlers." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A mailbox, a password, or a phone number is not kept." })
		]
	});
}
//#endregion
export { Privacy as component };
