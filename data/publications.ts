export type Publication = {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
};

export const publications: Publication[] = [
  {
    title: "Modulation doping and charge density wave transition in layered PbSe–VSe₂ ferecrystal heterostructures",
    authors: [
      "F. Göhler",
      "S. Ramasubramanian",
      "S. K. Rajak",
      "N. Rösch",
      "A. Schütze",
      "S. Wolff",
      "D. L. M. Cordova",
      "D. C. Johnson",
      "T. Seyller",
    ],
    journal: "Nanoscale",
    year: 2022,
    doi: "10.1039/d2nr01071b",
  },
  {
    title: "The ECOSENSE forest: A distributed sensor and data management system for real-time monitoring of ecosystem processes and stresses",
    authors: [
      "J. Tesch",
      "K. Kühnhammer",
      "D. Wagner",
      "A. Christen",
      "C. F. Dormann",
      "J. Frey",
      "et al.",
    ],
    journal: "Preprint",
    year: 2025,
    doi: "10.5194/egusphere-2025-4979",
  },
  {
    title: "Ecosense — Smart Sensors Alone in the Forest",
    authors: [
      "U. Wallrabe",
      "S. Baghbani",
      "L. Comella",
      "Y. Frey",
      "J. Kapp",
      "J. Klöppel",
      "O. Prucker",
      "et al.",
    ],
    journal: "23rd International Conference on Solid-State Sensors, Actuators and Microsystems (Transducers)",
    year: 2025,
    doi: "10.1109/transducers61432.2025.11111503",
  },
];
