export type DialectId =
  | "southern"
  | "appalachian"
  | "aave"
  | "mexican-american"
  | "midwestern"
  | "northeastern"
  | "california"
  | "upper-midwest"
  | "italian-american"
  | "widespread";

export type Marker = {
  display: string;
  phrases: string[];
  dialects: DialectId[];
  gloss: string;
};

export const DIALECT_NAME: Record<DialectId, string> = {
  southern: "Southern",
  appalachian: "Appalachian",
  aave: "African American English",
  "mexican-american": "Mexican-American English",
  midwestern: "Midwestern",
  northeastern: "Northeastern",
  california: "California",
  "upper-midwest": "Upper Midwest",
  "italian-american": "Italian-American English",
  widespread: "Widespread",
};

export const MARKERS: Marker[] = [
  {
    display: "all y'all",
    phrases: ["all y'all", "all yall"],
    dialects: ["southern"],
    gloss: "Every one of you. A real plural, not a mistake for you.",
  },
  {
    display: "y'all",
    phrases: ["y'all", "yall", "ya'll"],
    dialects: ["southern"],
    gloss: "You, plural. Standard pronoun across the South and far beyond it.",
  },
  {
    display: "fixin' to",
    phrases: ["fixin' to", "fixin to", "fixing to"],
    dialects: ["southern"],
    gloss: "About to. Immediate future. Valid as it stands.",
  },
  {
    display: "finna",
    phrases: ["finna"],
    dialects: ["aave", "southern"],
    gloss: "About to. Same plan as fixin' to, said in this form. Do not swap the word.",
  },
  {
    display: "might could",
    phrases: ["might could", "might should", "might would"],
    dialects: ["southern", "appalachian"],
    gloss: "Double modal. Tentative possibility. The stack is the grammar.",
  },
  {
    display: "reckon",
    phrases: ["reckon"],
    dialects: ["southern", "appalachian"],
    gloss: "Suppose, or think. A verdict hedged just enough.",
  },
  {
    display: "over yonder",
    phrases: ["over yonder", "yonder"],
    dialects: ["southern", "appalachian"],
    gloss: "Over there. A place you can point at.",
  },
  {
    display: "cattywampus",
    phrases: ["cattywampus", "cattywompus", "catawampus"],
    dialects: ["southern"],
    gloss: "Askew. Diagonal. Not where it ought to sit.",
  },
  {
    display: "bless your heart",
    phrases: ["bless your heart", "bless his heart", "bless her heart"],
    dialects: ["southern"],
    gloss: "Sincere sympathy, or a soft blade. Tone decides. Do not flatten it.",
  },
  {
    display: "right quick",
    phrases: ["right quick"],
    dialects: ["southern"],
    gloss: "Promptly. The right is an intensifier, not a direction.",
  },
  {
    display: "you'uns",
    phrases: ["you'uns", "you uns", "youuns", "y'uns"],
    dialects: ["appalachian"],
    gloss: "You, plural. Appalachian. Kin to yinz, not a slur of you ones.",
  },
  {
    display: "holler",
    phrases: ["the holler", "up the holler"],
    dialects: ["appalachian"],
    gloss: "A hollow. The narrow valley, and the community in it.",
  },
  {
    display: "holler at",
    phrases: ["holler at"],
    dialects: ["aave"],
    gloss: "Contact someone. Talk to them. Not a shout unless the line says so.",
  },
  {
    display: "airish",
    phrases: ["airish"],
    dialects: ["appalachian"],
    gloss: "Chilly. A bite in the air.",
  },
  {
    display: "sigogglin",
    phrases: ["sigogglin", "sigoggling", "sigoglin"],
    dialects: ["appalachian"],
    gloss: "Crooked. Out of square.",
  },
  {
    display: "a right smart",
    phrases: ["a right smart", "right smart"],
    dialects: ["appalachian", "southern"],
    gloss: "A good amount. More than a little.",
  },
  {
    display: "deadass",
    phrases: ["deadass"],
    dialects: ["aave", "northeastern"],
    gloss: "Seriously. No joke. New York and far wider now.",
  },
  {
    display: "no cap",
    phrases: ["no cap"],
    dialects: ["aave"],
    gloss: "Not lying. The line is straight.",
  },
  {
    display: "on god",
    phrases: ["on god"],
    dialects: ["aave"],
    gloss: "Sworn. Emphasis, not a sermon.",
  },
  {
    display: "tryna",
    phrases: ["tryna", "tryina"],
    dialects: ["aave", "widespread"],
    gloss: "Trying to. The reduction is the form.",
  },
  {
    display: "ion",
    phrases: ["ion"],
    dialects: ["aave"],
    gloss: "I don't. Written the way it hits the ear.",
  },
  {
    display: "she be",
    phrases: ["she be", "he be", "they be", "we be", "i be"],
    dialects: ["aave"],
    gloss: "Habitual be. A regular state, not a missing is. She be working means she works, on the regular.",
  },
  {
    display: "shawty",
    phrases: ["shawty"],
    dialects: ["aave", "southern"],
    gloss: "A person, often young, often addressed with warmth. Not shorty corrected.",
  },
  {
    display: "jawn",
    phrases: ["jawn"],
    dialects: ["aave", "northeastern"],
    gloss: "Philadelphia. A thing, a place, a person. The noun that holds the slot.",
  },
  {
    display: "órale",
    phrases: ["orale"],
    dialects: ["mexican-american"],
    gloss: "Alright. Let's go. Agreement with some muscle.",
  },
  {
    display: "watcha",
    phrases: ["watcha"],
    dialects: ["mexican-american"],
    gloss: "Watch out, or look. A warning and a pointer.",
  },
  {
    display: "mija",
    phrases: ["mija", "mijo"],
    dialects: ["mexican-american"],
    gloss: "My daughter, my son. Affection. Used well past childhood.",
  },
  {
    display: "vato",
    phrases: ["vato"],
    dialects: ["mexican-american"],
    gloss: "Guy. Dude. In-group address.",
  },
  {
    display: "simón",
    phrases: ["simon"],
    dialects: ["mexican-american"],
    gloss: "Yeah. A firm yes. (Also a name — read the line.)",
  },
  {
    display: "barely",
    phrases: ["barely"],
    dialects: ["mexican-american"],
    gloss: "Often just now, not only hardly. I barely got here can mean I just arrived.",
  },
  {
    display: "ope",
    phrases: ["ope"],
    dialects: ["midwestern"],
    gloss: "Small apology or a bump in the aisle. The whole word.",
  },
  {
    display: "you betcha",
    phrases: ["you betcha", "you betcha"],
    dialects: ["midwestern", "upper-midwest"],
    gloss: "Yes. Count on it.",
  },
  {
    display: "uff da",
    phrases: ["uff da", "uffda", "uff-da"],
    dialects: ["upper-midwest"],
    gloss: "German and Scandinavian Midwest. Exhaustion, surprise, or oh no.",
  },
  {
    display: "doncha know",
    phrases: ["doncha know", "dontcha know"],
    dialects: ["midwestern", "upper-midwest"],
    gloss: "A tag. You know. The sentence leans on you.",
  },
  {
    display: "scootch",
    phrases: ["scootch", "scooch"],
    dialects: ["midwestern"],
    gloss: "Slide over a little. Make a gap.",
  },
  {
    display: "a pop",
    phrases: ["a pop", "the pop"],
    dialects: ["midwestern"],
    gloss: "A soft drink. Pop, not soda, in a lot of the middle of the country.",
  },
  {
    display: "bubbler",
    phrases: ["bubbler"],
    dialects: ["midwestern", "northeastern"],
    gloss: "A drinking fountain. Wisconsin, and Rhode Island.",
  },
  {
    display: "wicked",
    phrases: ["wicked"],
    dialects: ["northeastern"],
    gloss: "Very. New England intensifier. Wicked cold is very cold.",
  },
  {
    display: "yous",
    phrases: ["yous", "youse", "youse guys"],
    dialects: ["northeastern"],
    gloss: "You, plural. New York, New Jersey, Philadelphia, and nearby.",
  },
  {
    display: "yinz",
    phrases: ["yinz", "yinzers"],
    dialects: ["northeastern"],
    gloss: "You, plural. Pittsburgh.",
  },
  {
    display: "bang a uey",
    phrases: ["bang a uey", "bang a u-ey", "bang a u ey"],
    dialects: ["northeastern"],
    gloss: "Make a U-turn. Boston, mostly.",
  },
  {
    display: "jimmies",
    phrases: ["jimmies"],
    dialects: ["northeastern"],
    gloss: "Sprinkles. On ice cream. New England.",
  },
  {
    display: "schlep",
    phrases: ["schlep"],
    dialects: ["northeastern"],
    gloss: "Haul something, or drag yourself. Yiddish in the American mouth.",
  },
  {
    display: "bodega",
    phrases: ["bodega"],
    dialects: ["northeastern"],
    gloss: "The corner store. New York.",
  },
  {
    display: "stoop",
    phrases: ["stoop", "the stoop"],
    dialects: ["northeastern"],
    gloss: "The front steps. Where the block sits.",
  },
  {
    display: "hella",
    phrases: ["hella", "hecka"],
    dialects: ["california"],
    gloss: "Very, or a lot. Northern California, and then everywhere.",
  },
  {
    display: "the 101",
    phrases: ["the 101", "the 5", "the 405", "the 10"],
    dialects: ["california"],
    gloss: "Freeways take the. The 101 is the road's name, article included.",
  },
  {
    display: "gnarly",
    phrases: ["gnarly"],
    dialects: ["california"],
    gloss: "Intense. Rough, or impressive, depending on the wave.",
  },
  {
    display: "gabagool",
    phrases: ["gabagool"],
    dialects: ["italian-american"],
    gloss: "Capicola. The New York–New Jersey Italian pronunciation is the word.",
  },
  {
    display: "marone",
    phrases: ["marone", "madonn"],
    dialects: ["italian-american"],
    gloss: "Madonna. An exclamation. Surprise, dismay, emphasis.",
  },
  {
    display: "capeesh",
    phrases: ["capeesh", "capisce", "capische"],
    dialects: ["italian-american"],
    gloss: "Understand? A check that you got it.",
  },
  {
    display: "gonna",
    phrases: ["gonna", "wanna", "gotta"],
    dialects: ["widespread"],
    gloss: "Going to, want to, got to. Ordinary American reduction.",
  },
  {
    display: "ain't",
    phrases: ["ain't"],
    dialects: ["widespread", "southern", "aave", "appalachian"],
    gloss: "Negation. Am not, isn't, aren't, hasn't. Widespread and structured.",
  },
];

export type Region = {
  id: DialectId;
  name: string;
  where: string;
  note: string;
  lines: { text: string; why: string }[];
};

export const REGIONS: Region[] = [
  {
    id: "southern",
    name: "Southern",
    where: "From Virginia through Texas, and the Black Belt, and the Gulf.",
    note: "Plural you, imminent future, and a habit of stacking modals. None of that needs translation before it counts as English.",
    lines: [
      {
        text: "Y'all fixin' to head out, or what?",
        why: "y'all is the plural. fixin' to puts the leaving in the next minute.",
      },
      {
        text: "I might could swing by after supper.",
        why: "might could is a double modal. Supper is the evening meal.",
      },
      {
        text: "That frame's sitting cattywampus.",
        why: "cattywampus means askew. Leave the word.",
      },
    ],
  },
  {
    id: "appalachian",
    name: "Appalachian",
    where: "The mountains from north Georgia up through West Virginia and eastern Kentucky.",
    note: "A lot of this is older English that stayed put. you'uns, holler, airish.",
    lines: [
      {
        text: "You'uns come up the holler if it gets airish.",
        why: "you'uns = you plural. A holler is a hollow. Airish is chilly.",
      },
      {
        text: "That shelf looks sigogglin.",
        why: "sigogglin: out of square.",
      },
      {
        text: "We had a right smart of rain.",
        why: "a right smart of: a good amount.",
      },
    ],
  },
  {
    id: "aave",
    name: "African American English",
    where: "Nationwide. A full variety with its own aspect, negation, and future.",
    note: "Habitual be is not a dropped is. finna is not broken fixing to. The line is already grammatical.",
    lines: [
      {
        text: "She be working nights, deadass.",
        why: "be marks habit. deadass locks the claim.",
      },
      {
        text: "I'm finna head out, no cap.",
        why: "finna = immediate future. no cap = this is straight.",
      },
      {
        text: "Ion know, just holler at me.",
        why: "ion = I don't. holler at = contact.",
      },
    ],
  },
  {
    id: "mexican-american",
    name: "Mexican-American English",
    where: "Southwest, California, Texas, and cities well north of the border.",
    note: "English with Spanish rhythm and a few words that changed jobs. barely often means just now.",
    lines: [
      {
        text: "I barely got here, órale.",
        why: "barely can mean just now. órale is agreement with force.",
      },
      {
        text: "Watcha, mija, the pan is hot.",
        why: "watcha warns. mija is affection.",
      },
      {
        text: "Simón, tell that vato we're good.",
        why: "simón = yes. vato = guy.",
      },
    ],
  },
  {
    id: "midwestern",
    name: "Midwestern",
    where: "Ohio through the Plains. Friendly, and specific about soda.",
    note: "ope, you betcha, pop, scootch. Small words that do real work.",
    lines: [
      {
        text: "Ope, sorry — you betcha I'll scootch over.",
        why: "ope apologizes for the bump. scootch is a small move.",
      },
      {
        text: "Want a pop?",
        why: "Pop is the soft drink.",
      },
      {
        text: "Cold one, doncha know.",
        why: "A tag. The weather, confirmed.",
      },
    ],
  },
  {
    id: "northeastern",
    name: "Northeastern",
    where: "New England, New York, New Jersey, Philadelphia.",
    note: "Wicked, yous, yinz, the stoop, the bodega. Packed cities, packed pronouns.",
    lines: [
      {
        text: "Wicked cold out. Bang a uey at the light.",
        why: "wicked = very. bang a uey = U-turn.",
      },
      {
        text: "Yous grab jimmies for the ice cream.",
        why: "yous = you plural. jimmies = sprinkles.",
      },
      {
        text: "Leave it on the stoop, I'll schlep it up.",
        why: "stoop = front steps. schlep = haul.",
      },
    ],
  },
  {
    id: "california",
    name: "California",
    where: "The coast, the valleys, the freeways with the article left on.",
    note: "hella, and the 101. The the is part of the name.",
    lines: [
      {
        text: "It's hella foggy on the 101.",
        why: "hella = very. the 101 keeps the article.",
      },
      {
        text: "That set was gnarly.",
        why: "gnarly = intense.",
      },
    ],
  },
  {
    id: "upper-midwest",
    name: "Upper Midwest",
    where: "Minnesota, the Dakotas, Wisconsin. German and Scandinavian still in the grain.",
    note: "uff da. And come with, with no object after it.",
    lines: [
      {
        text: "Uff da, that was a drive.",
        why: "uff da carries the tiredness.",
      },
      {
        text: "You coming with?",
        why: "come with, no object. The with stays. Valid.",
      },
    ],
  },
  {
    id: "italian-american",
    name: "Italian-American English",
    where: "New York, New Jersey, parts of New England and the industrial cities.",
    note: "Food words kept the pronunciation the boats brought.",
    lines: [
      {
        text: "Grab the gabagool, capeesh?",
        why: "gabagool is capicola. capeesh checks that you heard.",
      },
      {
        text: "Marone, the traffic.",
        why: "marone — Madonna — is the exclamation.",
      },
    ],
  },
];

export const SAMPLES: string[] = [
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
  "Remember this: stop by the bodega",
];
