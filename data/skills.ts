export type SkillGroup = {
  group: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    group: "Techniques",
    items: [
      "XPS",
      "SEM",
      "AFM",
      "XRD",
      "Ellipsometry",
      "Raman spectroscopy",
    ],
  },
  {
    group: "Software & Computation",
    items: ["Python", "MATLAB", "Origin", "CasaXPS", "ImageJ"],
  },
  {
    group: "Transferable",
    items: [
      "Project management",
      "Science communication",
      "Teaching & supervision",
      "Technical writing",
    ],
  },
];
