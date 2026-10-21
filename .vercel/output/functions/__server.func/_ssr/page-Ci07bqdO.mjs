import { q as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Flag, t as CANON } from "./canon-BPakAiLO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-Ci07bqdO.js
var import_jsx_runtime = require_jsx_runtime();
function Page({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-screen w-full max-w-5xl px-4 py-6 sm:px-8 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-8 border-b border-line pb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs tracking-widest text-muted uppercase",
						children: "One channel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-1 flex flex-wrap items-center gap-3 font-title text-4xl font-semibold tracking-tight text-fg sm:text-5xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, {}),
							"Choose America",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-sm font-medium text-oxide",
								children: "Beta"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-pretty text-gold",
						children: CANON
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mt-3 flex gap-4 font-sans text-xs tracking-widest text-muted uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/america",
								children: "America"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/ethos",
								children: "Ethos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								children: "Privacy"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-title text-3xl text-fg",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 max-w-2xl space-y-4 text-pretty text-fg",
				children
			})
		]
	});
}
//#endregion
export { Page as t };
