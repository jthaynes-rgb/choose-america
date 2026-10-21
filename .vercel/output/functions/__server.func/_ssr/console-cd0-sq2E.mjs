import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, q as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Flag, t as CANON } from "./canon-BPakAiLO.mjs";
import { a as Mic, i as Shield, n as Volume2, o as BookOpen, t as VolumeX } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/console-cd0-sq2E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DIALECT_NAME = {
	gulf: "Gulf Coast",
	appalachian: "Appalachian",
	atlantic: "Atlantic Coastal",
	urban: "Urban"
};
var MARKERS = [
	{
		display: "where y'at",
		phrases: ["where y'at", "where yat"],
		dialects: ["gulf"],
		gloss: "How are you. A greeting, not a request for a street."
	},
	{
		display: "yeah you right",
		phrases: ["yeah you right"],
		dialects: ["gulf"],
		gloss: "Agreement. You have it."
	},
	{
		display: "lagniappe",
		phrases: ["lagniappe"],
		dialects: ["gulf"],
		gloss: "A little extra. Thrown in."
	},
	{
		display: "make groceries",
		phrases: [
			"make groceries",
			"making groceries",
			"make a grocery"
		],
		dialects: ["gulf"],
		gloss: "Buy food. The errand, not cooking it."
	},
	{
		display: "neutral ground",
		phrases: ["neutral ground"],
		dialects: ["gulf"],
		gloss: "The median. Where the streetcar runs."
	},
	{
		display: "cher",
		phrases: ["cher", "sha"],
		dialects: ["gulf"],
		gloss: "Dear. Address, warm."
	},
	{
		display: "all y'all",
		phrases: ["all y'all", "all yall"],
		dialects: ["gulf"],
		gloss: "Every one of you. A real plural."
	},
	{
		display: "y'all",
		phrases: [
			"y'all",
			"yall",
			"ya'll"
		],
		dialects: ["gulf", "atlantic"],
		gloss: "You, plural. The word stands."
	},
	{
		display: "fixin' to",
		phrases: [
			"fixin' to",
			"fixin to",
			"fixing to"
		],
		dialects: ["gulf", "appalachian"],
		gloss: "About to. Immediate future."
	},
	{
		display: "might could",
		phrases: [
			"might could",
			"might should",
			"might would"
		],
		dialects: [
			"gulf",
			"appalachian",
			"atlantic"
		],
		gloss: "Double modal. Tentative possibility. The stack is the grammar."
	},
	{
		display: "you'uns",
		phrases: [
			"you'uns",
			"you uns",
			"youuns",
			"y'uns"
		],
		dialects: ["appalachian"],
		gloss: "You, plural."
	},
	{
		display: "holler",
		phrases: ["the holler", "up the holler"],
		dialects: ["appalachian"],
		gloss: "A hollow. The valley, and the people in it."
	},
	{
		display: "airish",
		phrases: ["airish"],
		dialects: ["appalachian"],
		gloss: "Chilly."
	},
	{
		display: "sigogglin",
		phrases: [
			"sigogglin",
			"sigoggling",
			"sigoglin"
		],
		dialects: ["appalachian"],
		gloss: "Crooked. Out of square."
	},
	{
		display: "a right smart",
		phrases: ["a right smart", "right smart"],
		dialects: ["appalachian"],
		gloss: "A good amount."
	},
	{
		display: "yonder",
		phrases: ["over yonder", "yonder"],
		dialects: ["appalachian", "gulf"],
		gloss: "Over there. A place you can point at."
	},
	{
		display: "reckon",
		phrases: ["reckon"],
		dialects: ["appalachian", "gulf"],
		gloss: "Suppose. Think."
	},
	{
		display: "high tider",
		phrases: [
			"high tider",
			"hoi toide",
			"hoi toider"
		],
		dialects: ["atlantic"],
		gloss: "Outer Banks speech, and the people who keep it."
	},
	{
		display: "dingbatter",
		phrases: ["dingbatter", "dingbatters"],
		dialects: ["atlantic"],
		gloss: "Someone from off. An outsider on the Banks."
	},
	{
		display: "pizer",
		phrases: ["pizer", "the pizer"],
		dialects: ["atlantic"],
		gloss: "The porch."
	},
	{
		display: "mash",
		phrases: ["mash the"],
		dialects: ["atlantic"],
		gloss: "Press. Mash the light means hit the switch."
	},
	{
		display: "benne",
		phrases: ["benne"],
		dialects: ["atlantic"],
		gloss: "Sesame. Lowcountry."
	},
	{
		display: "wicked",
		phrases: ["wicked"],
		dialects: ["atlantic"],
		gloss: "Very. Coastal New England."
	},
	{
		display: "bubbler",
		phrases: ["bubbler"],
		dialects: ["atlantic"],
		gloss: "A drinking fountain. Rhode Island."
	},
	{
		display: "bang a uey",
		phrases: ["bang a uey", "bang a u-ey"],
		dialects: ["atlantic"],
		gloss: "Make a U-turn."
	},
	{
		display: "jimmies",
		phrases: ["jimmies"],
		dialects: ["atlantic"],
		gloss: "Sprinkles. On ice cream."
	},
	{
		display: "deadass",
		phrases: ["deadass"],
		dialects: ["urban"],
		gloss: "Seriously. No joke."
	},
	{
		display: "finna",
		phrases: ["finna"],
		dialects: ["urban"],
		gloss: "About to. This form. Do not swap the word."
	},
	{
		display: "no cap",
		phrases: ["no cap"],
		dialects: ["urban"],
		gloss: "Not lying."
	},
	{
		display: "ion",
		phrases: ["ion"],
		dialects: ["urban"],
		gloss: "I don't."
	},
	{
		display: "she be",
		phrases: [
			"she be",
			"he be",
			"they be",
			"we be",
			"i be"
		],
		dialects: ["urban"],
		gloss: "Habitual. A regular state, not a missing is."
	},
	{
		display: "bodega",
		phrases: ["bodega"],
		dialects: ["urban"],
		gloss: "The corner store."
	},
	{
		display: "stoop",
		phrases: ["the stoop", "stoop"],
		dialects: ["urban"],
		gloss: "The front steps."
	},
	{
		display: "jawn",
		phrases: ["jawn"],
		dialects: ["urban"],
		gloss: "A thing, a place, a person. Philadelphia."
	},
	{
		display: "yous",
		phrases: [
			"yous",
			"youse",
			"youse guys"
		],
		dialects: ["urban"],
		gloss: "You, plural."
	},
	{
		display: "schlep",
		phrases: ["schlep"],
		dialects: ["urban"],
		gloss: "Haul it."
	},
	{
		display: "holler at",
		phrases: ["holler at"],
		dialects: ["urban"],
		gloss: "Contact someone. Not a shout unless the line says so."
	}
];
var REGIONS = [
	{
		id: "gulf",
		name: "Gulf Coast",
		where: "Louisiana, Mississippi, Alabama, the Florida Gulf, the Texas coast.",
		note: "The line stays. y'all, fixin' to, and the New Orleans errands are already English.",
		lines: [{
			text: "Where y'at? Y'all fixin' to make groceries?",
			why: "where y'at greets. make groceries is the food run."
		}, {
			text: "Yeah you right. That's some lagniappe, cher.",
			why: "yeah you right agrees. lagniappe is the extra. cher is dear."
		}]
	},
	{
		id: "appalachian",
		name: "Appalachian",
		where: "The mountains from north Georgia through eastern Kentucky and West Virginia.",
		note: "you'uns, holler, airish. Older English that stayed put.",
		lines: [{
			text: "You'uns come up the holler if it gets airish.",
			why: "you'uns is plural you. A holler is a hollow. Airish is chilly."
		}, {
			text: "That shelf looks sigogglin.",
			why: "sigogglin: out of square."
		}]
	},
	{
		id: "atlantic",
		name: "Atlantic Coastal",
		where: "The Banks, the Tidewater, the Lowcountry, and the New England shore.",
		note: "High tider, the pizer, mash the light, wicked.",
		lines: [{
			text: "Mash the light. It's wicked cold on the pizer.",
			why: "mash means press. A pizer is a porch. wicked means very."
		}, {
			text: "Dingbatters are thick. High tider weather.",
			why: "A dingbatter is from off. High tider is the Banks speech."
		}]
	},
	{
		id: "urban",
		name: "Urban",
		where: "The cities. The stoop, the bodega, the block.",
		note: "Habitual be is not a dropped is. finna is not a mistake.",
		lines: [{
			text: "She be working nights, deadass.",
			why: "be marks habit. deadass locks it."
		}, {
			text: "Leave it on the stoop. I'm finna hit the bodega.",
			why: "stoop is the steps. finna is about to. bodega is the corner store."
		}]
	}
];
var SAMPLES = REGIONS.flatMap((region) => region.lines.map((line) => line.text));
var FILLER = /^(?:uh|um|hmm|mm|er|ah|huh|hm)(?:\s+(?:uh|um|hmm|mm|er|ah|huh|hm))*$/;
var MAILBOX = /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/i;
var PHONE = /(?:\+?\d{1,3}[\s.-]?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]\d{4}\b/;
var PASSWORD = /\bpass(?:word|code)\b/i;
function kept(input) {
	return !MAILBOX.test(input) && !PHONE.test(input) && !PASSWORD.test(input);
}
function fold(input) {
	return input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’‘]/g, "'").replace(/[^a-z0-9'\s-]/g, " ").replace(/\s+/g, " ").trim();
}
function soften(input) {
	return input.replace(/[’‘]/g, "'").replace(/\s+/g, " ").trim();
}
var sortedMarkers = MARKERS.flatMap((marker) => marker.phrases.map((phrase) => ({
	marker,
	phrase: fold(phrase)
}))).sort((a, b) => b.phrase.length - a.phrase.length);
function findSignals(folded) {
	if (!folded) return [];
	const text = ` ${folded} `;
	const occupied = [];
	const seen = /* @__PURE__ */ new Set();
	const signals = [];
	for (const { marker, phrase } of sortedMarkers) {
		if (!phrase) continue;
		const needle = ` ${phrase} `;
		let from = 0;
		while (from < text.length) {
			const idx = text.indexOf(needle, from);
			if (idx === -1) break;
			const start = idx + 1;
			const end = idx + needle.length - 1;
			if (!occupied.some(([a, b]) => start < b && end > a) && !seen.has(marker.display)) {
				occupied.push([start, end]);
				seen.add(marker.display);
				signals.push({
					display: marker.display,
					dialects: marker.dialects,
					gloss: marker.gloss
				});
			}
			from = idx + Math.max(1, needle.length - 1);
		}
	}
	return signals;
}
function dialectRank(signals) {
	const score = /* @__PURE__ */ new Map();
	for (const signal of signals) for (const id of signal.dialects) score.set(id, (score.get(id) ?? 0) + 1);
	return [...score.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([id]) => id);
}
function commandFor(raw, folded) {
	if (!kept(raw)) return { type: "drop" };
	if (!folded || FILLER.test(folded)) return { type: "repeat" };
	if (/\b(read (?:that|it) back|say (?:that|it) again|run it back)\b/.test(folded)) return { type: "readback" };
	if (folded === "escape" || folded === "back to the line") return { type: "escape" };
	if (folded === "tot" || folded === "text only" || folded === "open tot") return { type: "tot" };
	const gloss = folded.match(/\bwhat(?:'s| is| does|s)\s+(.+?)\s+mean\b/) ?? folded.match(/\bwhat do(?:es)?\s+(.+?)\s+mean\b/);
	if (gloss?.[1]) return {
		type: "gloss",
		query: gloss[1].trim()
	};
	return { type: "hold" };
}
function intentFor(command, signals) {
	switch (command.type) {
		case "repeat": return {
			intentLabel: "Repeat.",
			intentDetail: "Nothing intelligible in that take."
		};
		case "drop": return {
			intentLabel: "Not kept.",
			intentDetail: "A mailbox, a password, or a phone number is not kept."
		};
		case "readback": return {
			intentLabel: "Read the line.",
			intentDetail: "This device says the same words. They do not leave."
		};
		case "gloss": return {
			intentLabel: "Gloss.",
			intentDetail: "The word stays. The reading is local."
		};
		case "escape": return {
			intentLabel: "Escape.",
			intentDetail: "Back to the line. The desk is not armed."
		};
		case "tot": return {
			intentLabel: "Text only.",
			intentDetail: "The held line is set as text. It stays on this device."
		};
		case "hold": return {
			intentLabel: "Held.",
			intentDetail: signals.length > 0 ? "The line stays. Signals are a reading, not a rewrite." : "The line stays. No regional markers in the four."
		};
		default: return {
			intentLabel: "Held.",
			intentDetail: "The line stays."
		};
	}
}
function interpret(rawInput) {
	const raw = soften(rawInput);
	if (!kept(raw)) return {
		raw: "",
		signals: [],
		dialects: [],
		command: { type: "drop" },
		intentLabel: "Not kept.",
		intentDetail: "A mailbox, a password, or a phone number is not kept."
	};
	const folded = fold(raw);
	const signals = findSignals(folded);
	const command = commandFor(raw, folded);
	const { intentLabel, intentDetail } = intentFor(command, signals);
	return {
		raw,
		signals,
		dialects: dialectRank(signals),
		command,
		intentLabel,
		intentDetail
	};
}
function lookupGloss(query) {
	const folded = fold(query);
	if (!folded) return null;
	let best = null;
	for (const marker of MARKERS) for (const phrase of marker.phrases) {
		const p = fold(phrase);
		if (!p) continue;
		if (folded === p || folded.includes(p) || p.includes(folded)) {
			if (!best || p.length > best.len) best = {
				len: p.length,
				gloss: marker.gloss
			};
		}
	}
	return best?.gloss ?? null;
}
function dialectLabel(id) {
	return DIALECT_NAME[id];
}
function spokenReading(result, gloss) {
	if (result.command.type === "repeat") return "Repeat.";
	if (result.command.type === "drop") return "Not kept.";
	if (result.command.type === "readback") return result.raw;
	if (result.command.type === "escape") return "Escape. The line stays.";
	if (result.command.type === "tot") return result.raw || "No line yet.";
	if (result.command.type === "gloss") return `${result.raw}. ${gloss ?? "Not in the book."}`;
	const region = result.dialects[0] ? dialectLabel(result.dialects[0]) : "No regional markers";
	const marks = result.signals.slice(0, 3).map((signal) => `${signal.display}. ${signal.gloss}`).join(" ");
	return marks ? `${result.raw}. ${region}. ${marks}` : `${result.raw}. ${region}.`;
}
var NOTES = {
	gulf: {
		name: "Gulf Coast",
		note: "Creole-influenced: vowel nasalization, rhythm, loanwords. Thin open data. Experimental.",
		experimental: true
	},
	appalachian: {
		name: "Appalachian",
		note: "Historical elisions and cadence.",
		experimental: false
	},
	atlantic: {
		name: "Atlantic Coastal",
		note: "R-coloring variation.",
		experimental: false
	},
	urban: {
		name: "Urban",
		note: "Pacing.",
		experimental: false
	}
};
function phrasesFor(id) {
	return MARKERS.filter((marker) => marker.dialects.includes(id)).map((marker) => marker.display);
}
var REGION_PROFILES = Object.keys(NOTES).map((id) => {
	const phrases = phrasesFor(id);
	return {
		id,
		name: NOTES[id].name,
		note: NOTES[id].note,
		experimental: NOTES[id].experimental,
		phrases,
		prompt: phrases.slice(0, 12).join(", ")
	};
});
function regionProfile(id) {
	if (!id) return null;
	return REGION_PROFILES.find((profile) => profile.id === id) ?? null;
}
var RATE = 16e3;
var MAX_MS = 12e3;
function recognitionCtor() {
	if (typeof window === "undefined") return null;
	const w = window;
	return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}
function sttAvailable() {
	if (typeof window === "undefined") return false;
	return typeof navigator.mediaDevices?.getUserMedia === "function" || recognitionCtor() !== null;
}
function withTimeout(work, ms) {
	return new Promise((resolve, reject) => {
		const timer = setTimeout(() => reject(/* @__PURE__ */ new Error("timeout")), ms);
		work.then((value) => {
			clearTimeout(timer);
			resolve(value);
		}, (error) => {
			clearTimeout(timer);
			reject(error instanceof Error ? error : /* @__PURE__ */ new Error("failed"));
		});
	});
}
async function localPackReady(ctor, handlers) {
	let probe;
	try {
		probe = new ctor();
	} catch {
		return false;
	}
	if (!("processLocally" in probe) || !ctor.available) return false;
	try {
		let status = await withTimeout(ctor.available({
			langs: ["en-US"],
			processLocally: true
		}), 2e3);
		if (status === "available") return true;
		if (status !== "downloadable" && status !== "downloading") return false;
		if (!ctor.install) return false;
		handlers.onStatus?.("loading");
		if (!await ctor.install({
			langs: ["en-US"],
			processLocally: true
		})) return false;
		status = await withTimeout(ctor.available({
			langs: ["en-US"],
			processLocally: true
		}), 2e3);
		return status === "available";
	} catch {
		return false;
	}
}
function startLocal(handlers) {
	const Ctor = recognitionCtor();
	if (!Ctor) return null;
	let rec;
	try {
		rec = new Ctor();
	} catch {
		return null;
	}
	if (!("processLocally" in rec)) return null;
	rec.processLocally = true;
	rec.lang = "en-US";
	rec.continuous = false;
	rec.interimResults = true;
	rec.onresult = (ev) => {
		let interim = "";
		let finalText = "";
		for (let i = ev.resultIndex; i < ev.results.length; i += 1) {
			const piece = ev.results[i][0].transcript;
			if (ev.results[i].isFinal) finalText += piece;
			else interim += piece;
		}
		if (interim.trim()) handlers.onInterim(interim.trim());
		if (finalText.trim()) handlers.onFinal(finalText.trim());
	};
	rec.onerror = (ev) => {
		if (ev.error === "aborted") return;
		handlers.onError(ev.error === "network" ? "ear" : ev.error);
	};
	rec.onend = () => handlers.onEnd();
	try {
		rec.start();
	} catch {
		return null;
	}
	handlers.onStatus?.("hearing");
	return () => {
		try {
			rec.stop();
		} catch {}
	};
}
function mix(chunks) {
	const length = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
	const mixed = new Float32Array(length);
	let offset = 0;
	for (const chunk of chunks) {
		mixed.set(chunk, offset);
		offset += chunk.length;
	}
	return mixed;
}
function to16k(input, fromRate) {
	if (fromRate === RATE) return input;
	const ratio = fromRate / RATE;
	const length = Math.max(0, Math.floor(input.length / ratio));
	const out = new Float32Array(length);
	for (let i = 0; i < length; i += 1) {
		const pos = i * ratio;
		const left = Math.floor(pos);
		const right = Math.min(left + 1, input.length - 1);
		const blend = pos - left;
		out[i] = input[left] * (1 - blend) + input[right] * blend;
	}
	return out;
}
var earWorker = null;
var earRegion = null;
function setEarRegion(id) {
	earRegion = id;
}
function ear() {
	if (!earWorker) earWorker = new Worker(new URL("./ear.worker.ts", import.meta.url), { type: "module" });
	return earWorker;
}
function warmEar(handlers) {
	let worker;
	try {
		worker = ear();
	} catch {
		handlers.onError();
		return () => {};
	}
	let settled = false;
	const stop = () => {
		settled = true;
		window.clearTimeout(timer);
		worker.removeEventListener("message", onMessage);
	};
	const onMessage = (event) => {
		if (settled) return;
		const message = event.data;
		if (!message || message.type === "status" || message.type === "net") return;
		if (message.type === "progress") {
			handlers.onProgress(message);
			return;
		}
		if (message.type === "ready") {
			stop();
			handlers.onReady();
			return;
		}
		if (message.type === "error") {
			stop();
			handlers.onError();
		}
	};
	const timer = window.setTimeout(() => {
		if (settled) return;
		stop();
		handlers.onError();
	}, 125e3);
	worker.addEventListener("message", onMessage);
	worker.addEventListener("error", () => {
		if (settled) return;
		stop();
		handlers.onError();
	});
	worker.addEventListener("messageerror", () => {
		if (settled) return;
		stop();
		handlers.onError();
	});
	worker.postMessage({ type: "warmup" });
	return stop;
}
function transcribeHere(audio, handlers, cancelled) {
	let worker;
	try {
		worker = ear();
	} catch {
		handlers.onError("ear");
		handlers.onEnd();
		return;
	}
	let settled = false;
	let timer = 0;
	const stopWait = () => window.clearTimeout(timer);
	const onMessage = (event) => {
		if (settled) return;
		const message = event.data;
		if (!message || message.type === "status" || message.type === "net" || message.type === "progress" || message.type === "ready") {
			if (message?.type === "status") handlers.onStatus?.(message.status);
			if (message?.type === "net") handlers.onNet?.(1);
			return;
		}
		settled = true;
		stopWait();
		worker.removeEventListener("message", onMessage);
		worker.removeEventListener("error", giveUp);
		worker.removeEventListener("messageerror", giveUp);
		if (cancelled()) {
			handlers.onEnd();
			return;
		}
		if (message.type === "error") {
			handlers.onError("ear");
			handlers.onEnd();
			return;
		}
		if (!message.text) {
			handlers.onError("no-speech");
			handlers.onEnd();
			return;
		}
		handlers.onFinal(message.text);
		handlers.onEnd();
	};
	const giveUp = () => {
		if (settled) return;
		settled = true;
		stopWait();
		worker.removeEventListener("message", onMessage);
		worker.removeEventListener("error", giveUp);
		worker.removeEventListener("messageerror", giveUp);
		handlers.onError("ear");
		handlers.onEnd();
	};
	worker.addEventListener("message", onMessage);
	timer = window.setTimeout(giveUp, 45e3);
	worker.addEventListener("error", giveUp);
	worker.addEventListener("messageerror", giveUp);
	const copy = audio.slice();
	const profile = regionProfile(earRegion);
	worker.postMessage({
		type: "transcribe",
		audio: copy,
		phrases: profile?.phrases ?? [],
		prompt: profile?.prompt ?? ""
	}, [copy.buffer]);
}
function startCapture(handlers) {
	let closed = false;
	let hearing = false;
	let stream = null;
	let context = null;
	const chunks = [];
	let timer = 0;
	const finish = () => {
		if (closed) return;
		closed = true;
		window.clearTimeout(timer);
		stream?.getTracks().forEach((track) => track.stop());
		const recorded = mix(chunks);
		const rate = context?.sampleRate ?? RATE;
		context?.close();
		if (recorded.length < rate * .25) {
			handlers.onError("no-speech");
			handlers.onEnd();
			return;
		}
		handlers.onStatus?.("reading");
		transcribeHere(to16k(recorded, rate), handlers, () => false);
	};
	(async () => {
		try {
			stream = await navigator.mediaDevices.getUserMedia({ audio: {
				channelCount: 1,
				echoCancellation: true,
				noiseSuppression: false
			} });
		} catch {
			handlers.onError("not-allowed");
			handlers.onEnd();
			return;
		}
		if (closed) {
			stream.getTracks().forEach((track) => track.stop());
			return;
		}
		context = new AudioContext();
		const source = context.createMediaStreamSource(stream);
		const processor = context.createScriptProcessor(4096, 1, 1);
		const mute = context.createGain();
		mute.gain.value = 0;
		processor.onaudioprocess = (event) => {
			if (closed) return;
			chunks.push(new Float32Array(event.inputBuffer.getChannelData(0)));
		};
		source.connect(processor);
		processor.connect(mute);
		mute.connect(context.destination);
		hearing = true;
		handlers.onStatus?.("hearing");
		timer = window.setTimeout(finish, MAX_MS);
	})();
	return () => {
		if (!hearing) {
			closed = true;
			stream?.getTracks().forEach((track) => track.stop());
			return;
		}
		finish();
	};
}
function watchOutbound(onHit) {
	if (typeof window === "undefined") return () => {};
	const origFetch = window.fetch.bind(window);
	window.fetch = ((...args) => {
		onHit();
		return origFetch(...args);
	});
	const origOpen = XMLHttpRequest.prototype.open;
	XMLHttpRequest.prototype.open = function(...args) {
		onHit();
		return origOpen.apply(this, args);
	};
	const beacon = navigator.sendBeacon?.bind(navigator);
	if (beacon) navigator.sendBeacon = (...args) => {
		onHit();
		return beacon(...args);
	};
	return () => {
		window.fetch = origFetch;
		XMLHttpRequest.prototype.open = origOpen;
		if (beacon) navigator.sendBeacon = beacon;
	};
}
function startStt(handlers) {
	const gate = {
		dropped: false,
		stop: null
	};
	let net = 0;
	const bump = () => {
		net += 1;
		handlers.onNet?.(net);
	};
	const stopWatch = watchOutbound(bump);
	const wrapped = {
		...handlers,
		onNet: bump,
		onEnd: () => {
			stopWatch();
			handlers.onEnd();
		}
	};
	(async () => {
		const ctor = recognitionCtor();
		const local = ctor ? await localPackReady(ctor, wrapped) : false;
		if (gate.dropped) {
			stopWatch();
			return;
		}
		if (local) {
			const stop = startLocal(wrapped);
			if (stop) {
				if (gate.dropped) stop();
				else gate.stop = stop;
				return;
			}
		}
		if (gate.dropped) {
			stopWatch();
			return;
		}
		if (typeof navigator.mediaDevices?.getUserMedia !== "function") {
			wrapped.onError("unavailable");
			wrapped.onEnd();
			return;
		}
		const stop = startCapture(wrapped);
		if (gate.dropped) stop();
		else gate.stop = stop;
	})();
	return () => {
		gate.dropped = true;
		gate.stop?.();
	};
}
function ttsAvailable() {
	return typeof window !== "undefined" && "speechSynthesis" in window;
}
function englishVoices() {
	if (!ttsAvailable()) return [];
	const voices = window.speechSynthesis.getVoices();
	const english = voices.filter((voice) => voice.lang.toLowerCase().startsWith("en"));
	return english.length > 0 ? english : voices;
}
function speakText(line, voiceURI, onend) {
	if (!ttsAvailable() || !line.trim()) {
		onend();
		return;
	}
	const synth = window.speechSynthesis;
	synth.cancel();
	const utter = new SpeechSynthesisUtterance(line);
	utter.lang = "en-US";
	const voice = englishVoices().find((item) => item.voiceURI === voiceURI) ?? null;
	if (voice) {
		utter.voice = voice;
		utter.lang = voice.lang;
	}
	utter.onend = onend;
	utter.onerror = () => onend();
	synth.speak(utter);
}
function stopText() {
	if (!ttsAvailable()) return;
	window.speechSynthesis.cancel();
}
var EAR_ID = "Xenova/whisper-tiny.en";
var DESK = {
	codex: "v1",
	channel: "one",
	account: "none",
	armed: false
};
function envelope(result, place) {
	const lead = result.dialects[0];
	return {
		codex: DESK.codex,
		channel: DESK.channel,
		account: DESK.account,
		armed: false,
		place,
		raw: result.command.type === "drop" ? "" : result.raw,
		region: lead ? dialectLabel(lead) : null,
		command: result.command.type,
		kept: result.command.type !== "drop" && result.raw.length > 0
	};
}
function publishDesk(next) {
	if (typeof window === "undefined") return;
	window.dispatchEvent(new CustomEvent("aethelos-command", { detail: next }));
}
function megabytes(bytes) {
	return `${(bytes / 1e6).toFixed(1)} MB`;
}
function EarLoad({ load, bytes }) {
	if (load === "error") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 font-sans text-sm text-fg",
		children: "The ear did not load. The line was not sent. Type it."
	});
	if (load === "ready") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 font-sans text-sm text-fg",
		children: "The ear is on this device."
	});
	const total = bytes?.total ?? 0;
	const loaded = bytes?.loaded ?? 0;
	const pct = total > 0 ? Math.max(0, Math.min(100, Math.round(loaded / total * 100))) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 max-w-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-sans text-sm text-fg",
			children: total > 0 ? `whisper-tiny.en · ${megabytes(loaded)} of ${megabytes(total)}` : "whisper-tiny.en · getting the size"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("progress", {
			className: "ear-load mt-1",
			value: pct,
			max: 100,
			"aria-label": "Ear download"
		})]
	});
}
function Console() {
	const [draft, setDraft] = (0, import_react.useState)("");
	const [interim, setInterim] = (0, import_react.useState)("");
	const [take, setTake] = (0, import_react.useState)(null);
	const [gloss, setGloss] = (0, import_react.useState)(null);
	const [reply, setReply] = (0, import_react.useState)(null);
	const [listening, setListening] = (0, import_react.useState)(false);
	const [talking, setTalking] = (0, import_react.useState)(false);
	const [sttOk, setSttOk] = (0, import_react.useState)(false);
	const [micNote, setMicNote] = (0, import_react.useState)(null);
	const [speaking, setSpeaking] = (0, import_react.useState)(false);
	const [voices, setVoices] = (0, import_react.useState)([]);
	const [voiceURI, setVoiceURI] = (0, import_react.useState)("");
	const [region, setRegion] = (0, import_react.useState)(null);
	const [netCalls, setNetCalls] = (0, import_react.useState)(0);
	const [earLoad, setEarLoad] = (0, import_react.useState)("loading");
	const [earBytes, setEarBytes] = (0, import_react.useState)(null);
	const talkRef = (0, import_react.useRef)(false);
	const stopRef = (0, import_react.useRef)(null);
	const applyRef = (0, import_react.useRef)(() => {});
	const takeRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		takeRef.current = take;
	}, [take]);
	(0, import_react.useEffect)(() => {
		return warmEar({
			onProgress: (progress) => {
				setEarLoad("loading");
				setEarBytes({
					loaded: progress.loaded,
					total: progress.total
				});
			},
			onReady: () => setEarLoad("ready"),
			onError: () => setEarLoad("error")
		});
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			localStorage.removeItem("choose-america.v1");
		} catch {}
		setSttOk(sttAvailable());
		if (!ttsAvailable()) return;
		const load = () => {
			const next = englishVoices();
			setVoices(next);
			setVoiceURI((current) => current || next.find((voice) => voice.lang === "en-US")?.voiceURI || next[0]?.voiceURI || "");
		};
		load();
		window.speechSynthesis.addEventListener("voiceschanged", load);
		return () => window.speechSynthesis.removeEventListener("voiceschanged", load);
	}, []);
	(0, import_react.useEffect)(() => {
		setEarRegion(region);
	}, [region]);
	(0, import_react.useEffect)(() => () => {
		stopRef.current?.();
		stopText();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!take) {
			publishDesk(null);
			return;
		}
		publishDesk(envelope(take, "line"));
	}, [take]);
	function readRaw(line) {
		if (!line.trim()) return;
		setSpeaking(true);
		speakText(line, voiceURI || null, () => setSpeaking(false));
	}
	function applyLine(rawInput, talk = false) {
		const result = interpret(rawInput);
		if (result.command.type === "escape" || result.command.type === "tot") {
			const held = takeRef.current;
			setInterim("");
			setDraft(held?.raw ?? "");
			if (result.command.type === "escape") {
				stopText();
				setSpeaking(false);
				setReply("Escape. The line stays.");
				if (held) publishDesk(envelope(held, "escape"));
				if (talk) readRaw("Escape. The line stays.");
				return;
			}
			setReply("The line stays.");
			return;
		}
		setTake(result);
		takeRef.current = result;
		setInterim("");
		setDraft(result.command.type === "drop" ? "" : result.raw);
		const glossText = result.command.type === "gloss" ? lookupGloss(result.command.query) ?? "Not in the book." : null;
		setGloss(glossText);
		if (result.command.type === "readback") {
			const prior = takeRef.current?.raw;
			setReply(prior ?? "Repeat.");
			if (prior) readRaw(prior);
			return;
		}
		const spoken = spokenReading(result, glossText);
		setReply(talk ? spoken : null);
		if (talk && result.command.type !== "drop") readRaw(spoken);
	}
	applyRef.current = applyLine;
	function stopMic() {
		talkRef.current = false;
		stopRef.current?.();
		stopRef.current = null;
		setListening(false);
		setTalking(false);
		setInterim("");
	}
	function startMic(talk) {
		stopRef.current?.();
		stopRef.current = null;
		setMicNote(null);
		setNetCalls(0);
		stopText();
		setSpeaking(false);
		talkRef.current = talk;
		const stop = startStt({
			onInterim: (text) => setInterim(text),
			onFinal: (text) => {
				setInterim("");
				applyRef.current(text, talkRef.current);
			},
			onEnd: () => {
				stopRef.current = null;
				setListening(false);
				setTalking(false);
				talkRef.current = false;
			},
			onError: (code) => {
				setListening(false);
				setTalking(false);
				talkRef.current = false;
				setInterim("");
				if (code === "not-allowed" || code === "service-not-allowed") setMicNote("Mic blocked.");
				else if (code === "unavailable") setMicNote("No on-device ear in this window. Type the line.");
				else if (code === "ear") setMicNote("The ear did not load. The line was not sent. Type it.");
				else if (code === "language-not-supported") setMicNote("No on-device English pack. Type the line.");
				else setMicNote("Repeat.");
			},
			onStatus: (status) => {
				if (status === "loading") setMicNote("Loading the on-device ear. The line stays here.");
				else if (status === "reading") setMicNote("Reading the line on this device.");
				else setMicNote("Hearing on this device.");
			},
			onNet: (count) => setNetCalls(count)
		});
		if (!stop) return;
		stopRef.current = stop;
		setListening(true);
		setTalking(talk);
	}
	const lead = take?.dialects[0];
	const shown = interim || take?.raw || "No line yet.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-screen w-full max-w-5xl px-4 py-6 sm:px-8 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
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
								className: "text-fg",
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
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex items-center gap-2 border border-line bg-surface px-3 py-2 font-sans text-xs tracking-widest text-fg uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
						className: "size-3.5 text-oxide",
						"aria-hidden": "true"
					}), speaking ? "Speaking" : listening ? talking ? "Talk" : "Listening" : "On this device"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mb-6 border border-line bg-surface p-4 sm:p-5",
				"aria-label": "Desk",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-title text-2xl text-fg",
						children: "Desk"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-pretty text-fg",
						children: "Codex v1. Hold the line. One channel. No personal account."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => applyLine("escape"),
						className: "min-h-11 border border-line bg-bg px-4 font-sans text-xs tracking-widest text-fg uppercase",
						children: "Escape"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-6 border border-line bg-surface p-4 sm:p-5",
				"aria-label": "Region",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-title text-2xl text-fg",
						children: "Region"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-pretty text-muted",
						children: "None uses the base ear. A region is a bias layer, not a fine-tune. It does not rewrite the line."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": region === null,
							onClick: () => setRegion(null),
							className: "min-h-11 border border-line bg-bg px-3 font-sans text-xs tracking-widest text-fg uppercase",
							children: "None"
						}), REGION_PROFILES.map((profile) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": region === profile.id,
							onClick: () => setRegion(profile.id),
							className: "min-h-11 border border-line bg-bg px-3 text-left text-sm text-fg",
							children: [profile.name, profile.experimental ? " · experimental" : ""]
						}, profile.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-pretty text-muted",
						children: region ? REGION_PROFILES.find((profile) => profile.id === region)?.note : "Base model. No regional lift."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "min-w-0 border border-line bg-surface p-4 sm:p-5",
					"aria-label": "Line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-title text-2xl text-fg",
								children: "Line"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-xs text-oxide uppercase",
								children: talking ? "Talk open" : listening ? "Mic open" : "Mic idle"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-4",
							onSubmit: (event) => {
								event.preventDefault();
								stopMic();
								applyLine(draft);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "line",
								className: "sr-only",
								children: "Line"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 sm:flex-row",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "line",
										value: interim || draft,
										onChange: (event) => {
											setInterim("");
											setDraft(event.target.value);
										},
										placeholder: "As spoken. The words stay.",
										autoComplete: "off",
										autoCapitalize: "off",
										spellCheck: false,
										inputMode: "text",
										className: "min-h-12 w-full min-w-0 border border-line bg-bg px-3 font-sans text-base text-fg placeholder:text-muted"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onPointerDown: (event) => {
											if (event.button !== 0) return;
											event.currentTarget.setPointerCapture(event.pointerId);
											startMic(false);
										},
										onPointerUp: () => stopMic(),
										onPointerCancel: () => stopMic(),
										disabled: !sttOk,
										"aria-pressed": listening && !talking,
										className: "inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-oxide px-4 text-oxide-ink disabled:opacity-40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {
											className: "size-5",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-sans text-sm tracking-widest uppercase",
											children: "Hold to speak"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => listening ? stopMic() : startMic(true),
										disabled: !sttOk || !ttsAvailable(),
										"aria-pressed": talking,
										className: "inline-flex min-h-12 shrink-0 items-center justify-center border border-fg bg-fg px-4 font-sans text-sm tracking-widest text-bg uppercase disabled:opacity-40",
										children: talking ? "Stop" : "Talk"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "min-h-12 shrink-0 border border-line bg-surface px-5 font-sans text-sm tracking-widest text-fg uppercase",
										children: "Hold"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-sans text-sm text-fg",
							"aria-live": "polite",
							children: netCalls === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "Nothing left this device."
							}) : `${netCalls} network calls during this take.`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EarLoad, {
							load: earLoad,
							bytes: earBytes
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-pretty text-muted",
							children: micNote ?? "Hold to speak. The words stay as spoken. Weights may be fetched once from Hugging Face. The wasm comes from the app host. The line is not sent."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-xs tracking-widest text-muted uppercase",
								children: "Field samples"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 flex flex-wrap gap-2",
								children: SAMPLES.map((sample) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => applyLine(sample),
									className: "min-h-11 max-w-full border border-line bg-bg px-3 py-2 text-left text-sm text-fg hover:border-oxide",
									children: sample
								}) }, sample))
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "min-w-0 border border-line bg-surface p-4 sm:p-5",
					"aria-label": "Reading",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-title text-2xl text-fg",
								children: "Reading"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-xs tracking-wide text-oxide uppercase",
								children: lead ? dialectLabel(lead) : "No line"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-sans text-xs tracking-widest text-muted uppercase",
							children: "Raw"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-2 min-h-16 border-l-2 border-oxide bg-bg px-3 py-3 font-sans text-lg leading-snug text-pretty ${interim ? "text-muted" : "text-fg"}`,
							children: shown
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-sans text-xs tracking-widest text-muted uppercase",
							children: "Signals"
						}),
						take && take.signals.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 divide-y divide-line border-y border-line",
							children: take.signals.map((signal) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans text-sm text-fg",
									children: signal.display
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-pretty text-muted",
									children: [
										signal.dialects.map((id) => dialectLabel(id)).join(" · "),
										" — ",
										signal.gloss
									]
								})]
							}, signal.display))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: take ? "No regional markers in the four." : "Markers show up here. They do not replace the line."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-sans text-xs tracking-widest text-muted uppercase",
							children: "Weights"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 border border-line bg-bg px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-sm text-fg",
								children: EAR_ID
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-pretty text-muted",
								children: [
									"Not fine-tuned. ",
									region ? "This region biases words the ear was already close to." : "No region selected. Base model.",
									" ",
									"A fine-tune would change the weights and would have to keep the audio. This tab does neither. Weights may be fetched once from Hugging Face. The wasm comes from the app host."
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-sans text-xs tracking-widest text-muted uppercase",
							children: "Voice"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 border border-line bg-bg px-3 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg text-fg",
									children: take?.intentLabel ?? "Waiting."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-pretty text-muted",
									children: take?.intentDetail ?? "One line. The device voice reads the same words."
								}),
								gloss ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 border-t border-line pt-3 font-sans text-sm text-fg",
									children: gloss
								}) : null,
								reply ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 border-t border-line pt-3 font-sans text-sm text-pretty text-fg",
									children: reply
								}) : null,
								voices.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-3 block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-sans text-xs tracking-widest text-muted uppercase",
										children: "Device voice"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: voiceURI,
										onChange: (event) => setVoiceURI(event.target.value),
										className: "mt-1 min-h-11 w-full border border-line bg-surface px-2 font-sans text-sm text-fg",
										children: voices.map((voice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: voice.voiceURI,
											children: voice.name
										}, voice.voiceURI))
									})]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: [take?.raw ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => readRaw(take.raw),
										disabled: !ttsAvailable(),
										className: "inline-flex min-h-11 items-center gap-2 border border-oxide px-3 font-sans text-xs tracking-widest text-oxide uppercase disabled:opacity-40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
											className: "size-4",
											"aria-hidden": "true"
										}), "Read raw"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											const spoken = spokenReading(take, gloss);
											setReply(spoken);
											readRaw(spoken);
										},
										disabled: !ttsAvailable(),
										className: "inline-flex min-h-11 items-center gap-2 border border-fg px-3 font-sans text-xs tracking-widest text-fg uppercase disabled:opacity-40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
											className: "size-4",
											"aria-hidden": "true"
										}), "Speak reading"]
									})] }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											stopText();
											setSpeaking(false);
										},
										disabled: !speaking,
										className: "inline-flex min-h-11 items-center gap-2 border border-line px-3 font-sans text-xs tracking-widest text-fg uppercase disabled:opacity-40",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, {
											className: "size-4",
											"aria-hidden": "true"
										}), "Stop"]
									})]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 border border-line bg-surface p-4 sm:p-5",
				"aria-label": "Book",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
						className: "size-4 text-oxide",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-title text-2xl text-fg",
						children: "Four regions"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 divide-y divide-line border-y border-line",
					children: REGIONS.map((region) => {
						const hot = take?.dialects.includes(region.id) ?? false;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								className: "flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fg",
									children: region.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate font-sans text-xs text-muted",
									children: hot ? "In this line" : region.where
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-pretty text-muted",
									children: region.note
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-2",
									children: region.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => applyLine(line.text),
										className: "w-full min-h-11 border border-line bg-bg px-3 py-2 text-left hover:border-oxide",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-sans text-sm text-fg",
											children: line.text
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm text-pretty text-muted",
											children: line.why
										})]
									}) }, line.text))
								})]
							})]
						}, region.id);
					})
				})]
			})
		]
	});
}
//#endregion
export { Console as t };
