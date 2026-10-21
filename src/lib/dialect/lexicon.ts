export type DialectId = "gulf" | "appalachian" | "atlantic" | "urban";

export type Marker = {
  display: string;
  phrases: string[];
  dialects: DialectId[];
  gloss: string;
};

export const DIALECT_NAME: Record<DialectId, string> = {
  gulf: "Gulf Coast",
  appalachian: "Appalachian",
  atlantic: "Atlantic Coastal",
  urban: "Urban",
};

export const MARKERS: Marker[] = [
  {
    display: "where y'at",
    phrases: ["where y'at", "where yat"],
    dialects: ["gulf"],
    gloss: "How are you. A greeting, not a request for a street.",
  },
  {
    display: "yeah you right",
    phrases: ["yeah you right"],
    dialects: ["gulf"],
    gloss: "Agreement. You have it.",
  },
  {
    display: "lagniappe",
    phrases: ["lagniappe"],
    dialects: ["gulf"],
    gloss: "A little extra. Thrown in.",
  },
  {
    display: "make groceries",
    phrases: ["make groceries", "making groceries", "make a grocery"],
    dialects: ["gulf"],
    gloss: "Buy food. The errand, not cooking it.",
  },
  {
    display: "neutral ground",
    phrases: ["neutral ground"],
    dialects: ["gulf"],
    gloss: "The median. Where the streetcar runs.",
  },
  {
    display: "cher",
    phrases: ["cher", "sha"],
    dialects: ["gulf"],
    gloss: "Dear. Address, warm.",
  },
  {
    display: "all y'all",
    phrases: ["all y'all", "all yall"],
    dialects: ["gulf"],
    gloss: "Every one of you. A real plural.",
  },
  {
    display: "y'all",
    phrases: ["y'all", "yall", "ya'll"],
    dialects: ["gulf", "atlantic"],
    gloss: "You, plural. The word stands.",
  },
  {
    display: "fixin' to",
    phrases: ["fixin' to", "fixin to", "fixing to"],
    dialects: ["gulf", "appalachian"],
    gloss: "About to. Immediate future.",
  },
  {
    display: "might could",
    phrases: ["might could", "might should", "might would"],
    dialects: ["gulf", "appalachian", "atlantic"],
    gloss: "Double modal. Tentative possibility. The stack is the grammar.",
  },
  {
    display: "you'uns",
    phrases: ["you'uns", "you uns", "youuns", "y'uns"],
    dialects: ["appalachian"],
    gloss: "You, plural.",
  },
  {
    display: "holler",
    phrases: ["the holler", "up the holler"],
    dialects: ["appalachian"],
    gloss: "A hollow. The valley, and the people in it.",
  },
  {
    display: "airish",
    phrases: ["airish"],
    dialects: ["appalachian"],
    gloss: "Chilly.",
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
    dialects: ["appalachian"],
    gloss: "A good amount.",
  },
  {
    display: "yonder",
    phrases: ["over yonder", "yonder"],
    dialects: ["appalachian", "gulf"],
    gloss: "Over there. A place you can point at.",
  },
  {
    display: "reckon",
    phrases: ["reckon"],
    dialects: ["appalachian", "gulf"],
    gloss: "Suppose. Think.",
  },
  {
    display: "high tider",
    phrases: ["high tider", "hoi toide", "hoi toider"],
    dialects: ["atlantic"],
    gloss: "Outer Banks speech, and the people who keep it.",
  },
  {
    display: "dingbatter",
    phrases: ["dingbatter", "dingbatters"],
    dialects: ["atlantic"],
    gloss: "Someone from off. An outsider on the Banks.",
  },
  {
    display: "pizer",
    phrases: ["pizer", "the pizer"],
    dialects: ["atlantic"],
    gloss: "The porch.",
  },
  {
    display: "mash",
    phrases: ["mash the"],
    dialects: ["atlantic"],
    gloss: "Press. Mash the light means hit the switch.",
  },
  {
    display: "benne",
    phrases: ["benne"],
    dialects: ["atlantic"],
    gloss: "Sesame. Lowcountry.",
  },
  {
    display: "wicked",
    phrases: ["wicked"],
    dialects: ["atlantic"],
    gloss: "Very. Coastal New England.",
  },
  {
    display: "bubbler",
    phrases: ["bubbler"],
    dialects: ["atlantic"],
    gloss: "A drinking fountain. Rhode Island.",
  },
  {
    display: "bang a uey",
    phrases: ["bang a uey", "bang a u-ey"],
    dialects: ["atlantic"],
    gloss: "Make a U-turn.",
  },
  {
    display: "jimmies",
    phrases: ["jimmies"],
    dialects: ["atlantic"],
    gloss: "Sprinkles. On ice cream.",
  },
  {
    display: "deadass",
    phrases: ["deadass"],
    dialects: ["urban"],
    gloss: "Seriously. No joke.",
  },
  {
    display: "finna",
    phrases: ["finna"],
    dialects: ["urban"],
    gloss: "About to. This form. Do not swap the word.",
  },
  {
    display: "no cap",
    phrases: ["no cap"],
    dialects: ["urban"],
    gloss: "Not lying.",
  },
  {
    display: "ion",
    phrases: ["ion"],
    dialects: ["urban"],
    gloss: "I don't.",
  },
  {
    display: "she be",
    phrases: ["she be", "he be", "they be", "we be", "i be"],
    dialects: ["urban"],
    gloss: "Habitual. A regular state, not a missing is.",
  },
  {
    display: "bodega",
    phrases: ["bodega"],
    dialects: ["urban"],
    gloss: "The corner store.",
  },
  {
    display: "stoop",
    phrases: ["the stoop", "stoop"],
    dialects: ["urban"],
    gloss: "The front steps.",
  },
  {
    display: "jawn",
    phrases: ["jawn"],
    dialects: ["urban"],
    gloss: "A thing, a place, a person. Philadelphia.",
  },
  {
    display: "yous",
    phrases: ["yous", "youse", "youse guys"],
    dialects: ["urban"],
    gloss: "You, plural.",
  },
  {
    display: "schlep",
    phrases: ["schlep"],
    dialects: ["urban"],
    gloss: "Haul it.",
  },
  {
    display: "holler at",
    phrases: ["holler at"],
    dialects: ["urban"],
    gloss: "Contact someone. Not a shout unless the line says so.",
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
    id: "gulf",
    name: "Gulf Coast",
    where: "Louisiana, Mississippi, Alabama, the Florida Gulf, the Texas coast.",
    note: "The line stays. y'all, fixin' to, and the New Orleans errands are already English.",
    lines: [
      {
        text: "Where y'at? Y'all fixin' to make groceries?",
        why: "where y'at greets. make groceries is the food run.",
      },
      {
        text: "Yeah you right. That's some lagniappe, cher.",
        why: "yeah you right agrees. lagniappe is the extra. cher is dear.",
      },
    ],
  },
  {
    id: "appalachian",
    name: "Appalachian",
    where: "The mountains from north Georgia through eastern Kentucky and West Virginia.",
    note: "you'uns, holler, airish. Older English that stayed put.",
    lines: [
      {
        text: "You'uns come up the holler if it gets airish.",
        why: "you'uns is plural you. A holler is a hollow. Airish is chilly.",
      },
      {
        text: "That shelf looks sigogglin.",
        why: "sigogglin: out of square.",
      },
    ],
  },
  {
    id: "atlantic",
    name: "Atlantic Coastal",
    where: "The Banks, the Tidewater, the Lowcountry, and the New England shore.",
    note: "High tider, the pizer, mash the light, wicked.",
    lines: [
      {
        text: "Mash the light. It's wicked cold on the pizer.",
        why: "mash means press. A pizer is a porch. wicked means very.",
      },
      {
        text: "Dingbatters are thick. High tider weather.",
        why: "A dingbatter is from off. High tider is the Banks speech.",
      },
    ],
  },
  {
    id: "urban",
    name: "Urban",
    where: "The cities. The stoop, the bodega, the block.",
    note: "Habitual be is not a dropped is. finna is not a mistake.",
    lines: [
      {
        text: "She be working nights, deadass.",
        why: "be marks habit. deadass locks it.",
      },
      {
        text: "Leave it on the stoop. I'm finna hit the bodega.",
        why: "stoop is the steps. finna is about to. bodega is the corner store.",
      },
    ],
  },
];

export const SAMPLES: string[] = REGIONS.flatMap((region) => region.lines.map((line) => line.text));
