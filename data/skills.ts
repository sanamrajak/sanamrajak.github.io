export type SkillGroup = {
  group: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    group: "Laboratory Techniques",
    items: [
      "Polymer & organic synthesis",
      "Surface coatings (spin, dip, spray, doctor blading, PVD)",
      "Microscopy (OM, AFM, SEM, FIB-SEM, TEM)",
      "Spectroscopy (XPS, SXI-XPS, UPS, NMR, FTIR, UV-VIS, GC-MS, ARUPS)",
      "Contact angle · Ellipsometry · WLI · DSC",
      "Photolithography & CHic-chemistry crosslinking",
      "Nanotribological friction measurements",
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
];
