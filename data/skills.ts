export type SkillGroup = {
  group: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    group: "Laboratory Techniques",
    items: [
      "Organic & polymer synthesis, purification (TLC, CC)",
      "Surface coatings (spin, dip, spray, doctor blading, PVD)",
      "Surface & polymer characterization (contact angle, ellipsometry, WLI, LEED, DSC)",
      "Photolithography & polymer crosslinking (CHic-chemistry)", 
      "Microscopy (OM, AFM, SEM, FIB-SEM, TEM)",
      "Spectroscopy (XPS, SXI-XPS, UPS, NMR, FTIR, UV-VIS, GC-MS, ARUPS)",
      "Nanotribological friction measurements",
      "Photolithography & CHic-chemistry crosslinking",
      "Solar cell fabrication & characterization (I-V, EQE, IQE)",
    ],
  },
  {
    group: "Software & IT",
    items: [
      "IGOR Pro",
      "ImageJ / Fiji",
      "Gwyddion",
      "ChemDraw",
      "LayoutEditor",
      "LaTeX",
      "Inkscape",
      "MS Office",
    ],
  },
  {
    group: "Transferable",
    items: [
      "Scientific writing & reporting",
      "Data analysis & presentation",
      "Student supervision & teaching",
      "Collaborative & independent research",
      "Critical thinking & problem-solving",
    ],
  },
  {
    group: "Languages",
    items: [
      "English (fluent)",
      "German (B1)",
      "Hindi (fluent)",
      "Nepali (native)",
    ],
  },
];
