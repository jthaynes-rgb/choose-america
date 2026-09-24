import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Shield, i as Square, o as Mic, r as Timer, s as BookOpen, t as Volume2 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bl6wXKBM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DIALECT_NAME = {
	southern: "Southern",
	appalachian: "Appalachian",
	aave: "African American English",
	"mexican-american": "Mexican-American English",
	midwestern: "Midwestern",
	northeastern: "Northeastern",
	california: "California",
	"upper-midwest": "Upper Midwest",
	"italian-american": "Italian-American English",
	widespread: "Widespread"
};
var MARKERS = [
	{
		display: "all y'all",
		phrases: ["all y'all", "all yall"],
		dialects: ["southern"],
		gloss: "Every one of you. A real plural, not a mistake for you."
	},
	{
		display: "y'all",
		phrases: [
			"y'all",
			"yall",
			"ya'll"
		],
		dialects: ["southern"],
		gloss: "You, plural. Standard pronoun across the South and far beyond it."
	},
	{
		display: "fixin' to",
		phrases: [
			"fixin' to",
			"fixin to",
			"fixing to"
		],
		dialects: ["southern"],
		gloss: "About to. Immediate future. Valid as it stands."
	},
	{
		display: "finna",
		phrases: ["finna"],
		dialects: ["aave", "southern"],
		gloss: "About to. Same plan as fixin' to, said in this form. Do not swap the word."
	},
	{
		display: "might could",
		phrases: [
			"might could",
			"might should",
			"might would"
		],
		dialects: ["southern", "appalachian"],
		gloss: "Double modal. Tentative possibility. The stack is the grammar."
	},
	{
		display: "reckon",
		phrases: ["reckon"],
		dialects: ["southern", "appalachian"],
		gloss: "Suppose, or think. A verdict hedged just enough."
	},
	{
		display: "over yonder",
		phrases: ["over yonder", "yonder"],
		dialects: ["southern", "appalachian"],
		gloss: "Over there. A place you can point at."
	},
	{
		display: "cattywampus",
		phrases: [
			"cattywampus",
			"cattywompus",
			"catawampus"
		],
		dialects: ["southern"],
		gloss: "Askew. Diagonal. Not where it ought to sit."
	},
	{
		display: "bless your heart",
		phrases: [
			"bless your heart",
			"bless his heart",
			"bless her heart"
		],
		dialects: ["southern"],
		gloss: "Sincere sympathy, or a soft blade. Tone decides. Do not flatten it."
	},
	{
		display: "right quick",
		phrases: ["right quick"],
		dialects: ["southern"],
		gloss: "Promptly. The right is an intensifier, not a direction."
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
		gloss: "You, plural. Appalachian. Kin to yinz, not a slur of you ones."
	},
	{
		display: "holler",
		phrases: ["the holler", "up the holler"],
		dialects: ["appalachian"],
		gloss: "A hollow. The narrow valley, and the community in it."
	},
	{
		display: "holler at",
		phrases: ["holler at"],
		dialects: ["aave"],
		gloss: "Contact someone. Talk to them. Not a shout unless the line says so."
	},
	{
		display: "airish",
		phrases: ["airish"],
		dialects: ["appalachian"],
		gloss: "Chilly. A bite in the air."
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
		dialects: ["appalachian", "southern"],
		gloss: "A good amount. More than a little."
	},
	{
		display: "deadass",
		phrases: ["deadass"],
		dialects: ["aave", "northeastern"],
		gloss: "Seriously. No joke. New York and far wider now."
	},
	{
		display: "no cap",
		phrases: ["no cap"],
		dialects: ["aave"],
		gloss: "Not lying. The line is straight."
	},
	{
		display: "on god",
		phrases: ["on god"],
		dialects: ["aave"],
		gloss: "Sworn. Emphasis, not a sermon."
	},
	{
		display: "tryna",
		phrases: ["tryna", "tryina"],
		dialects: ["aave", "widespread"],
		gloss: "Trying to. The reduction is the form."
	},
	{
		display: "ion",
		phrases: ["ion"],
		dialects: ["aave"],
		gloss: "I don't. Written the way it hits the ear."
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
		dialects: ["aave"],
		gloss: "Habitual be. A regular state, not a missing is. She be working means she works, on the regular."
	},
	{
		display: "shawty",
		phrases: ["shawty"],
		dialects: ["aave", "southern"],
		gloss: "A person, often young, often addressed with warmth. Not shorty corrected."
	},
	{
		display: "jawn",
		phrases: ["jawn"],
		dialects: ["aave", "northeastern"],
		gloss: "Philadelphia. A thing, a place, a person. The noun that holds the slot."
	},
	{
		display: "órale",
		phrases: ["orale"],
		dialects: ["mexican-american"],
		gloss: "Alright. Let's go. Agreement with some muscle."
	},
	{
		display: "watcha",
		phrases: ["watcha"],
		dialects: ["mexican-american"],
		gloss: "Watch out, or look. A warning and a pointer."
	},
	{
		display: "mija",
		phrases: ["mija", "mijo"],
		dialects: ["mexican-american"],
		gloss: "My daughter, my son. Affection. Used well past childhood."
	},
	{
		display: "vato",
		phrases: ["vato"],
		dialects: ["mexican-american"],
		gloss: "Guy. Dude. In-group address."
	},
	{
		display: "simón",
		phrases: ["simon"],
		dialects: ["mexican-american"],
		gloss: "Yeah. A firm yes. (Also a name — read the line.)"
	},
	{
		display: "barely",
		phrases: ["barely"],
		dialects: ["mexican-american"],
		gloss: "Often just now, not only hardly. I barely got here can mean I just arrived."
	},
	{
		display: "ope",
		phrases: ["ope"],
		dialects: ["midwestern"],
		gloss: "Small apology or a bump in the aisle. The whole word."
	},
	{
		display: "you betcha",
		phrases: ["you betcha", "you betcha"],
		dialects: ["midwestern", "upper-midwest"],
		gloss: "Yes. Count on it."
	},
	{
		display: "uff da",
		phrases: [
			"uff da",
			"uffda",
			"uff-da"
		],
		dialects: ["upper-midwest"],
		gloss: "German and Scandinavian Midwest. Exhaustion, surprise, or oh no."
	},
	{
		display: "doncha know",
		phrases: ["doncha know", "dontcha know"],
		dialects: ["midwestern", "upper-midwest"],
		gloss: "A tag. You know. The sentence leans on you."
	},
	{
		display: "scootch",
		phrases: ["scootch", "scooch"],
		dialects: ["midwestern"],
		gloss: "Slide over a little. Make a gap."
	},
	{
		display: "a pop",
		phrases: ["a pop", "the pop"],
		dialects: ["midwestern"],
		gloss: "A soft drink. Pop, not soda, in a lot of the middle of the country."
	},
	{
		display: "bubbler",
		phrases: ["bubbler"],
		dialects: ["midwestern", "northeastern"],
		gloss: "A drinking fountain. Wisconsin, and Rhode Island."
	},
	{
		display: "wicked",
		phrases: ["wicked"],
		dialects: ["northeastern"],
		gloss: "Very. New England intensifier. Wicked cold is very cold."
	},
	{
		display: "yous",
		phrases: [
			"yous",
			"youse",
			"youse guys"
		],
		dialects: ["northeastern"],
		gloss: "You, plural. New York, New Jersey, Philadelphia, and nearby."
	},
	{
		display: "yinz",
		phrases: ["yinz", "yinzers"],
		dialects: ["northeastern"],
		gloss: "You, plural. Pittsburgh."
	},
	{
		display: "bang a uey",
		phrases: [
			"bang a uey",
			"bang a u-ey",
			"bang a u ey"
		],
		dialects: ["northeastern"],
		gloss: "Make a U-turn. Boston, mostly."
	},
	{
		display: "jimmies",
		phrases: ["jimmies"],
		dialects: ["northeastern"],
		gloss: "Sprinkles. On ice cream. New England."
	},
	{
		display: "schlep",
		phrases: ["schlep"],
		dialects: ["northeastern"],
		gloss: "Haul something, or drag yourself. Yiddish in the American mouth."
	},
	{
		display: "bodega",
		phrases: ["bodega"],
		dialects: ["northeastern"],
		gloss: "The corner store. New York."
	},
	{
		display: "stoop",
		phrases: ["stoop", "the stoop"],
		dialects: ["northeastern"],
		gloss: "The front steps. Where the block sits."
	},
	{
		display: "hella",
		phrases: ["hella", "hecka"],
		dialects: ["california"],
		gloss: "Very, or a lot. Northern California, and then everywhere."
	},
	{
		display: "the 101",
		phrases: [
			"the 101",
			"the 5",
			"the 405",
			"the 10"
		],
		dialects: ["california"],
		gloss: "Freeways take the. The 101 is the road's name, article included."
	},
	{
		display: "gnarly",
		phrases: ["gnarly"],
		dialects: ["california"],
		gloss: "Intense. Rough, or impressive, depending on the wave."
	},
	{
		display: "gabagool",
		phrases: ["gabagool"],
		dialects: ["italian-american"],
		gloss: "Capicola. The New York–New Jersey Italian pronunciation is the word."
	},
	{
		display: "marone",
		phrases: ["marone", "madonn"],
		dialects: ["italian-american"],
		gloss: "Madonna. An exclamation. Surprise, dismay, emphasis."
	},
	{
		display: "capeesh",
		phrases: [
			"capeesh",
			"capisce",
			"capische"
		],
		dialects: ["italian-american"],
		gloss: "Understand? A check that you got it."
	},
	{
		display: "gonna",
		phrases: [
			"gonna",
			"wanna",
			"gotta"
		],
		dialects: ["widespread"],
		gloss: "Going to, want to, got to. Ordinary American reduction."
	},
	{
		display: "ain't",
		phrases: ["ain't"],
		dialects: [
			"widespread",
			"southern",
			"aave",
			"appalachian"
		],
		gloss: "Negation. Am not, isn't, aren't, hasn't. Widespread and structured."
	}
];
var REGIONS = [
	{
		id: "southern",
		name: "Southern",
		where: "From Virginia through Texas, and the Black Belt, and the Gulf.",
		note: "Plural you, imminent future, and a habit of stacking modals. None of that needs translation before it counts as English.",
		lines: [
			{
				text: "Y'all fixin' to head out, or what?",
				why: "y'all is the plural. fixin' to puts the leaving in the next minute."
			},
			{
				text: "I might could swing by after supper.",
				why: "might could is a double modal. Supper is the evening meal."
			},
			{
				text: "That frame's sitting cattywampus.",
				why: "cattywampus means askew. Leave the word."
			}
		]
	},
	{
		id: "appalachian",
		name: "Appalachian",
		where: "The mountains from north Georgia up through West Virginia and eastern Kentucky.",
		note: "A lot of this is older English that stayed put. you'uns, holler, airish.",
		lines: [
			{
				text: "You'uns come up the holler if it gets airish.",
				why: "you'uns = you plural. A holler is a hollow. Airish is chilly."
			},
			{
				text: "That shelf looks sigogglin.",
				why: "sigogglin: out of square."
			},
			{
				text: "We had a right smart of rain.",
				why: "a right smart of: a good amount."
			}
		]
	},
	{
		id: "aave",
		name: "African American English",
		where: "Nationwide. A full variety with its own aspect, negation, and future.",
		note: "Habitual be is not a dropped is. finna is not broken fixing to. The line is already grammatical.",
		lines: [
			{
				text: "She be working nights, deadass.",
				why: "be marks habit. deadass locks the claim."
			},
			{
				text: "I'm finna head out, no cap.",
				why: "finna = immediate future. no cap = this is straight."
			},
			{
				text: "Ion know, just holler at me.",
				why: "ion = I don't. holler at = contact."
			}
		]
	},
	{
		id: "mexican-american",
		name: "Mexican-American English",
		where: "Southwest, California, Texas, and cities well north of the border.",
		note: "English with Spanish rhythm and a few words that changed jobs. barely often means just now.",
		lines: [
			{
				text: "I barely got here, órale.",
				why: "barely can mean just now. órale is agreement with force."
			},
			{
				text: "Watcha, mija, the pan is hot.",
				why: "watcha warns. mija is affection."
			},
			{
				text: "Simón, tell that vato we're good.",
				why: "simón = yes. vato = guy."
			}
		]
	},
	{
		id: "midwestern",
		name: "Midwestern",
		where: "Ohio through the Plains. Friendly, and specific about soda.",
		note: "ope, you betcha, pop, scootch. Small words that do real work.",
		lines: [
			{
				text: "Ope, sorry — you betcha I'll scootch over.",
				why: "ope apologizes for the bump. scootch is a small move."
			},
			{
				text: "Want a pop?",
				why: "Pop is the soft drink."
			},
			{
				text: "Cold one, doncha know.",
				why: "A tag. The weather, confirmed."
			}
		]
	},
	{
		id: "northeastern",
		name: "Northeastern",
		where: "New England, New York, New Jersey, Philadelphia.",
		note: "Wicked, yous, yinz, the stoop, the bodega. Packed cities, packed pronouns.",
		lines: [
			{
				text: "Wicked cold out. Bang a uey at the light.",
				why: "wicked = very. bang a uey = U-turn."
			},
			{
				text: "Yous grab jimmies for the ice cream.",
				why: "yous = you plural. jimmies = sprinkles."
			},
			{
				text: "Leave it on the stoop, I'll schlep it up.",
				why: "stoop = front steps. schlep = haul."
			}
		]
	},
	{
		id: "california",
		name: "California",
		where: "The coast, the valleys, the freeways with the article left on.",
		note: "hella, and the 101. The the is part of the name.",
		lines: [{
			text: "It's hella foggy on the 101.",
			why: "hella = very. the 101 keeps the article."
		}, {
			text: "That set was gnarly.",
			why: "gnarly = intense."
		}]
	},
	{
		id: "upper-midwest",
		name: "Upper Midwest",
		where: "Minnesota, the Dakotas, Wisconsin. German and Scandinavian still in the grain.",
		note: "uff da. And come with, with no object after it.",
		lines: [{
			text: "Uff da, that was a drive.",
			why: "uff da carries the tiredness."
		}, {
			text: "You coming with?",
			why: "come with, no object. The with stays. Valid."
		}]
	},
	{
		id: "italian-american",
		name: "Italian-American English",
		where: "New York, New Jersey, parts of New England and the industrial cities.",
		note: "Food words kept the pronunciation the boats brought.",
		lines: [{
			text: "Grab the gabagool, capeesh?",
			why: "gabagool is capicola. capeesh checks that you heard."
		}, {
			text: "Marone, the traffic.",
			why: "marone — Madonna — is the exclamation."
		}]
	}
];
var SAMPLES = [
	"Y'all fixin' to head out, or what?",
	"She be working nights, deadass.",
	"I barely got here, órale.",
	"Ope — you betcha I'll scootch over.",
	"Wicked cold. Bang a uey at the light.",
	"It's hella foggy on the 101.",
	"You'uns come up the holler if it gets airish.",
	"Y'all got the time?",
	"What's finna mean",
	"Set a timer for 2 minutes",
	"Remember this: stop by the bodega"
];
var FILLER = /^(?:uh|um|hmm|mm|er|ah|huh|hm)(?:\s+(?:uh|um|hmm|mm|er|ah|huh|hm))*$/;
var NUMBER_WORDS = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	ten: 10,
	fifteen: 15,
	twenty: 20,
	thirty: 30,
	forty: 40,
	fifty: 50,
	sixty: 60
};
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
	if (/\bcome with$/.test(folded) || /\bcoming with$/.test(folded)) signals.push({
		display: "come with",
		dialects: ["upper-midwest"],
		gloss: "Motion verb plus with, and no object. You coming with? is complete."
	});
	return signals;
}
function dialectRank(signals) {
	const score = /* @__PURE__ */ new Map();
	for (const signal of signals) for (const id of signal.dialects) {
		const weight = id === "widespread" ? .25 : 1;
		score.set(id, (score.get(id) ?? 0) + weight);
	}
	return [...score.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([id]) => id);
}
function durationLabel(ms) {
	const total = Math.round(ms / 1e3);
	if (total < 60) return `${total} second${total === 1 ? "" : "s"}`;
	const minutes = Math.round(total / 60);
	if (total < 3600) return `${minutes} minute${minutes === 1 ? "" : "s"}`;
	const hours = Math.round(total / 3600);
	return `${hours} hour${hours === 1 ? "" : "s"}`;
}
function parseDuration(folded) {
	const unit = "(seconds?|secs?|minutes?|mins?|hours?|hrs?)";
	const digit = folded.match(new RegExp(`(?:set (?:a |the )?timer(?: for)?|timer|give me|wake me in|in)\\s+(\\d+)\\s*${unit}`));
	const word = folded.match(new RegExp(`(?:set (?:a |the )?timer(?: for)?|timer|give me|wake me in|in)\\s+(${Object.keys(NUMBER_WORDS).join("|")})\\s*${unit}`));
	const hit = digit ?? word;
	if (!hit) return null;
	const amount = digit ? Number(hit[1]) : NUMBER_WORDS[hit[1]];
	if (!Number.isFinite(amount) || amount <= 0) return null;
	const unitWord = hit[2];
	const ms = /hour|hr/.test(unitWord) ? amount * 36e5 : /min/.test(unitWord) ? amount * 6e4 : amount * 1e3;
	if (ms > 864e5) return null;
	return {
		ms,
		label: durationLabel(ms)
	};
}
function commandFor(raw, folded) {
	if (!folded || FILLER.test(folded)) return { type: "repeat" };
	if (/\b(wipe the tape|clear the (?:tape|board|log|ledger)|dump the tape)\b/.test(folded)) return { type: "wipe" };
	if (/\b(read (?:that|it) back|say (?:that|it) again|run it back)\b/.test(folded)) return { type: "readback" };
	if (/\b(what time is it|what's the time|whats the time|got the time|what time you got|what time y'all got|y'all got the time|you got the time)\b/.test(folded)) return { type: "time" };
	const duration = parseDuration(folded);
	if (duration) return {
		type: "timer",
		ms: duration.ms,
		label: duration.label
	};
	const gloss = folded.match(/\bwhat(?:'s| is| does|s)\s+(.+?)\s+mean\b/) ?? folded.match(/\bwhat do(?:es)?\s+(.+?)\s+mean\b/);
	if (gloss?.[1]) return {
		type: "gloss",
		query: gloss[1].trim()
	};
	const noted = soften(raw).match(/\b(?:remember|jot|write down|put down|note)\b(?:\s+(?:this|that))?\s*:?\s+(.+)$/i);
	if (noted?.[1]?.trim()) return {
		type: "note",
		text: noted[1].trim()
	};
	return { type: "hold" };
}
function intentFor(command, signals) {
	switch (command.type) {
		case "repeat": return {
			intentLabel: "Repeat.",
			intentDetail: "Nothing intelligible in that take."
		};
		case "wipe": return {
			intentLabel: "Tape clear.",
			intentDetail: "Ledger and notes wiped on this device."
		};
		case "readback": return {
			intentLabel: "Read the line.",
			intentDetail: "Device voice says the same words. It will not sound like the speaker."
		};
		case "time": return {
			intentLabel: "Time.",
			intentDetail: "Local clock. No network."
		};
		case "timer": return {
			intentLabel: "Timer.",
			intentDetail: `${command.label}. Stays on this page.`
		};
		case "gloss": return {
			intentLabel: "Gloss.",
			intentDetail: `Look up “${command.query}”. The word stays.`
		};
		case "note": return {
			intentLabel: "Noted.",
			intentDetail: "Saved on this device only."
		};
		case "hold": return {
			intentLabel: "Held.",
			intentDetail: signals.length > 0 ? "No command in it. Signals are possibilities, not a rewrite." : "No command in it. No regional markers. Still American English."
		};
		default: return {
			intentLabel: "Held.",
			intentDetail: "No command in it."
		};
	}
}
function interpret(rawInput) {
	const raw = soften(rawInput);
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
	if (/\bcome with\b/.test(folded) || folded === "come with") {
		const gloss = "Motion verb plus with, and no object. You coming with? is complete.";
		if (!best || best.len < 8) return gloss;
	}
	return best?.gloss ?? null;
}
function dialectLabel(id) {
	return DIALECT_NAME[id];
}
var STORE_KEY = "choose-america.v1";
function clock(date) {
	return date.toLocaleTimeString(void 0, {
		hour: "numeric",
		minute: "2-digit"
	});
}
function speak(line) {
	if (typeof window === "undefined" || !window.speechSynthesis) return;
	window.speechSynthesis.cancel();
	const utter = new SpeechSynthesisUtterance(line);
	utter.lang = "en-US";
	window.speechSynthesis.speak(utter);
}
function beep() {
	const ctx = new AudioContext();
	const osc = ctx.createOscillator();
	const gain = ctx.createGain();
	osc.frequency.value = 740;
	osc.connect(gain);
	gain.connect(ctx.destination);
	gain.gain.setValueAtTime(.04, ctx.currentTime);
	gain.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + .22);
	osc.start();
	osc.stop(ctx.currentTime + .22);
	osc.onended = () => void ctx.close();
}
function recognizer() {
	if (typeof window === "undefined") return null;
	const w = window;
	return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}
function Console() {
	const [draft, setDraft] = (0, import_react.useState)("");
	const [interim, setInterim] = (0, import_react.useState)("");
	const [take, setTake] = (0, import_react.useState)(null);
	const [executed, setExecuted] = (0, import_react.useState)(null);
	const [ledger, setLedger] = (0, import_react.useState)([]);
	const [notes, setNotes] = (0, import_react.useState)([]);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [listening, setListening] = (0, import_react.useState)(false);
	const [speechOn, setSpeechOn] = (0, import_react.useState)(false);
	const [speechOk, setSpeechOk] = (0, import_react.useState)(false);
	const [micError, setMicError] = (0, import_react.useState)(null);
	const [bins, setBins] = (0, import_react.useState)(() => Array(12).fill(0));
	const [timerEnds, setTimerEnds] = (0, import_react.useState)(null);
	const [timerLabel, setTimerLabel] = (0, import_react.useState)("");
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	const [reduceMotion, setReduceMotion] = (0, import_react.useState)(false);
	const ledgerRef = (0, import_react.useRef)([]);
	const applyRef = (0, import_react.useRef)(() => {});
	const streamRef = (0, import_react.useRef)(null);
	const audioRef = (0, import_react.useRef)(null);
	const rafRef = (0, import_react.useRef)(0);
	const recRef = (0, import_react.useRef)(null);
	const beeped = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		ledgerRef.current = ledger;
	}, [ledger]);
	(0, import_react.useEffect)(() => {
		setSpeechOk(recognizer() !== null);
		try {
			const saved = localStorage.getItem(STORE_KEY);
			if (saved) {
				const data = JSON.parse(saved);
				if (Array.isArray(data.ledger)) setLedger(data.ledger.slice(0, 24));
				if (Array.isArray(data.notes)) setNotes(data.notes.filter((n) => typeof n === "string").slice(0, 40));
			}
		} catch {}
		setHydrated(true);
		const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduceMotion(motion.matches);
		const onMotion = () => setReduceMotion(motion.matches);
		motion.addEventListener("change", onMotion);
		return () => motion.removeEventListener("change", onMotion);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		localStorage.setItem(STORE_KEY, JSON.stringify({
			ledger,
			notes
		}));
	}, [
		hydrated,
		ledger,
		notes
	]);
	(0, import_react.useEffect)(() => {
		if (!timerEnds) return;
		const id = window.setInterval(() => setNow(Date.now()), 250);
		return () => window.clearInterval(id);
	}, [timerEnds]);
	(0, import_react.useEffect)(() => {
		if (!timerEnds) return;
		if (now < timerEnds) {
			beeped.current = false;
			return;
		}
		if (!beeped.current) {
			beeped.current = true;
			beep();
			setExecuted("Timer's up.");
			setTimerEnds(null);
		}
	}, [now, timerEnds]);
	function pushLedger(result) {
		if (!result.raw) return;
		const item = {
			id: `${Date.now()}`,
			at: clock(/* @__PURE__ */ new Date()),
			raw: result.raw,
			dialects: result.dialects.filter((id) => id !== "widespread").slice(0, 3),
			intent: result.intentLabel
		};
		setLedger((prev) => [item, ...prev].slice(0, 24));
	}
	function applyLine(rawInput) {
		const result = interpret(rawInput);
		setTake(result);
		setDraft(result.raw);
		const cmd = result.command;
		if (cmd.type === "repeat") {
			setExecuted("Repeat.");
			return;
		}
		if (cmd.type === "wipe") {
			setLedger([]);
			setNotes([]);
			setExecuted("Tape clear.");
			return;
		}
		if (cmd.type === "readback") {
			const prior = ledgerRef.current.find((item) => item.raw && item.intent !== "Read the line.");
			if (!prior) {
				setExecuted("Repeat.");
				return;
			}
			speak(prior.raw);
			setExecuted(prior.raw);
			return;
		}
		if (cmd.type === "time") {
			setExecuted(clock(/* @__PURE__ */ new Date()));
			pushLedger(result);
			return;
		}
		if (cmd.type === "timer") {
			beeped.current = false;
			setTimerLabel(cmd.label);
			setTimerEnds(Date.now() + cmd.ms);
			setExecuted(`${cmd.label}.`);
			pushLedger(result);
			return;
		}
		if (cmd.type === "gloss") {
			setExecuted(lookupGloss(cmd.query) ?? "Not in the book.");
			pushLedger(result);
			return;
		}
		if (cmd.type === "note") {
			setNotes((prev) => [cmd.text, ...prev].slice(0, 40));
			setExecuted("Noted.");
			pushLedger(result);
			return;
		}
		setExecuted("Held.");
		pushLedger(result);
	}
	applyRef.current = applyLine;
	function stopListen() {
		cancelAnimationFrame(rafRef.current);
		streamRef.current?.getTracks().forEach((track) => track.stop());
		streamRef.current = null;
		audioRef.current?.close();
		audioRef.current = null;
		try {
			recRef.current?.stop();
		} catch {}
		recRef.current = null;
		setListening(false);
		setInterim("");
		setBins(Array(12).fill(0));
	}
	function startRec() {
		const Ctor = recognizer();
		if (!Ctor) {
			setMicError("No browser recognizer.");
			return;
		}
		const rec = new Ctor();
		rec.lang = "en-US";
		rec.interimResults = true;
		rec.continuous = false;
		rec.onresult = (ev) => {
			let interimText = "";
			let finalText = "";
			for (let i = ev.resultIndex; i < ev.results.length; i += 1) {
				const piece = ev.results[i][0].transcript;
				if (ev.results[i].isFinal) finalText += piece;
				else interimText += piece;
			}
			setInterim(interimText.trim());
			const line = finalText.trim();
			if (line) {
				setInterim("");
				applyRef.current(line);
			}
		};
		rec.onerror = (ev) => {
			if (ev.error === "aborted") return;
			if (ev.error === "not-allowed") setMicError("Mic blocked.");
			else setExecuted("Repeat.");
		};
		rec.onend = () => {
			recRef.current = null;
		};
		recRef.current = rec;
		rec.start();
	}
	async function startListen() {
		setMicError(null);
		if (!navigator.mediaDevices?.getUserMedia) {
			setMicError("No mic.");
			return;
		}
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: {
				echoCancellation: true,
				noiseSuppression: true
			} });
			streamRef.current = stream;
			const ctx = new AudioContext();
			audioRef.current = ctx;
			const source = ctx.createMediaStreamSource(stream);
			const analyser = ctx.createAnalyser();
			analyser.fftSize = 64;
			source.connect(analyser);
			const data = new Uint8Array(analyser.frequencyBinCount);
			let last = 0;
			const tick = (t) => {
				rafRef.current = requestAnimationFrame(tick);
				if (t - last < 80) return;
				last = t;
				analyser.getByteFrequencyData(data);
				const next = Array.from(data.slice(0, 12), (n) => n / 255);
				setBins(next);
			};
			rafRef.current = requestAnimationFrame(tick);
			setListening(true);
			if (speechOn) startRec();
		} catch {
			setMicError("Mic blocked.");
			stopListen();
		}
	}
	(0, import_react.useEffect)(() => () => stopListen(), []);
	const remain = timerEnds ? Math.max(0, timerEnds - now) : 0;
	const remainLabel = remain > 0 ? `${Math.floor(remain / 6e4)}:${String(Math.ceil(remain % 6e4 / 1e3)).padStart(2, "0")}` : "";
	const lead = take?.dialects.find((id) => id !== "widespread");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-screen w-full max-w-5xl px-4 py-6 sm:px-8 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-muted uppercase",
						children: "Voice layer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-sans text-4xl font-semibold tracking-tight text-fg sm:text-5xl",
						children: "Choose America"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-pretty text-muted",
						children: "American English, as spoken. The line is not corrected. Intent sits beside it."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex items-center gap-2 border border-line bg-surface px-3 py-2 font-mono text-xs tracking-widest text-fg uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
						className: "size-3.5 text-oxide",
						"aria-hidden": "true"
					}), "Closed loop"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "min-w-0 border border-line bg-surface p-4 sm:p-5",
					"aria-label": "Take",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-mono text-xs tracking-widest text-muted uppercase",
								children: "Take"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-oxide uppercase",
								children: listening ? "Listening" : "Idle"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => listening ? stopListen() : void startListen(),
								"aria-pressed": listening,
								className: "flex size-20 shrink-0 items-center justify-center rounded-full bg-oxide text-oxide-ink transition-transform duration-150 hover:scale-[1.03] active:scale-95",
								children: [listening ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, {
									className: "size-6 fill-current",
									"aria-hidden": "true"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {
									className: "size-7",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: listening ? "Stop" : "Listen"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-14 items-end gap-1",
									"aria-hidden": "true",
									children: (reduceMotion ? [bins.reduce((sum, n) => sum + n, 0) / Math.max(1, bins.length)] : bins).map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1 bg-oxide",
										style: { height: `${Math.max(4, Math.round(n * 56))}px` }
									}, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-mono text-xs text-muted",
									children: micError ?? "Level only. Audio does not leave this tab."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-6",
							onSubmit: (event) => {
								event.preventDefault();
								applyLine(draft);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "line",
								className: "font-mono text-xs tracking-widest text-muted uppercase",
								children: "Line"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-col gap-2 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "line",
									value: interim || draft,
									onChange: (event) => {
										setInterim("");
										setDraft(event.target.value);
									},
									placeholder: "As spoken. Slang stays.",
									autoComplete: "off",
									className: "min-h-12 w-full min-w-0 border border-line bg-bg px-3 font-mono text-base text-fg placeholder:text-muted"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "min-h-12 shrink-0 border border-fg bg-fg px-5 font-mono text-sm tracking-widest text-bg uppercase",
									children: "Run"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 border border-line bg-bg p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs tracking-widest text-muted uppercase",
									children: "Browser recognizer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-pretty text-muted",
									children: speechOn ? "On. This browser may send audio to its own speech service. This app still does not rewrite the words." : "Off. The mic here only draws a level. Type the line, or turn the recognizer on."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									role: "switch",
									"aria-checked": speechOn,
									disabled: !speechOk,
									onClick: () => setSpeechOn((on) => !on),
									className: `mt-0.5 flex h-8 w-14 shrink-0 items-center border px-1 ${speechOn ? "border-oxide bg-oxide" : "border-line bg-inset"} disabled:opacity-40`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-5 bg-surface transition-transform ${speechOn ? "translate-x-6" : "translate-x-0"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Browser speech engine"
									})]
								})]
							}), !speechOk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-xs text-muted",
								children: "No recognizer in this browser. Type the line."
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest text-muted uppercase",
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
					"aria-label": "Tape",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-mono text-xs tracking-widest text-muted uppercase",
								children: "Tape"
							}), lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs tracking-wide text-oxide uppercase",
								children: dialectLabel(lead)
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-muted uppercase",
								children: "No line"
							})]
						}),
						remain > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 flex items-center justify-between gap-3 border border-oxide bg-bg px-3 py-2 font-mono text-sm text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, {
									className: "size-4 text-oxide",
									"aria-hidden": "true"
								}), timerLabel]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: remainLabel
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-mono text-xs tracking-widest text-muted uppercase",
							children: "Raw"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 min-h-16 border-l-2 border-oxide bg-bg px-3 py-3 font-mono text-lg leading-snug text-pretty text-fg",
							children: interim ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: interim
							}) : take?.raw || "No line yet."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-mono text-xs tracking-widest text-muted uppercase",
							children: "Signals"
						}),
						take && take.signals.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 divide-y divide-line border-y border-line",
							children: take.signals.map((signal) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-sm text-fg",
									children: signal.display
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-pretty text-muted",
									children: [
										signal.dialects.map(dialectLabel).join(" · "),
										" — ",
										signal.gloss
									]
								})]
							}, signal.display))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: take ? "No regional markers. The line still stands." : "Markers show up here. They do not replace the line."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-mono text-xs tracking-widest text-muted uppercase",
							children: "Intent"
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
									children: take?.intentDetail ?? "Run a line. Commands execute here. The wording is left alone."
								}),
								executed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 border-t border-line pt-3 font-mono text-sm text-fg",
									children: executed
								}) : null,
								take?.raw ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => speak(take.raw),
									className: "mt-3 inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-widest text-oxide uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
										className: "size-4",
										"aria-hidden": "true"
									}), "Read raw"]
								}) : null
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 border border-line bg-surface p-4 sm:p-5",
				"aria-label": "Book",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
							className: "size-4 text-oxide",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-mono text-xs tracking-widest text-muted uppercase",
							children: "Field book"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-pretty text-muted",
						children: "A pocket map of American English. Tap a line to run it. Nothing here is a correction."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
										className: "truncate font-mono text-xs text-muted",
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
												className: "block font-mono text-sm text-fg",
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
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 border border-line bg-surface p-4 sm:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-mono text-xs tracking-widest text-muted uppercase",
							children: "Ledger"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setLedger([]);
								setNotes([]);
								setExecuted("Tape clear.");
							},
							className: "min-h-11 font-mono text-xs tracking-widest text-muted uppercase",
							children: "Wipe"
						})]
					}), ledger.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Nothing held yet."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-3 divide-y divide-line border-t border-line",
						children: ledger.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-xs text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums",
										children: item.at
									}),
									item.dialects.length > 0 ? ` · ${item.dialects.map(dialectLabel).join(", ")}` : "",
									` · ${item.intent}`
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-sm text-pretty text-fg",
								children: item.raw
							})]
						}, item.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 border border-line bg-surface p-4 sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-mono text-xs tracking-widest text-muted uppercase",
							children: "Notes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "“Remember this: …” keeps the words on this device."
						}),
						notes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "No notes."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: notes.map((note, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-l-2 border-oxide bg-bg px-3 py-2 font-mono text-sm text-fg",
								children: note
							}, `${note}-${index}`))
						})
					]
				})]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Console, {});
}
//#endregion
export { Home as component };
