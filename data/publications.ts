export type Publication = {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  note?: string;
};

export const publications: Publication[] = [
  {
    title: "Self-cleaning Sensor Surfaces for Long-term Environmental Monitoring",
    authors: ["S. K. Rajak", "[...]", "J. Rühe"],
    journal: "Advanced Engineering Materials",
    year: 2025,
    note: "Under review",
  },
  {
    title: "The ECOSENSE forest: A distributed sensor and data management system for real-time monitoring of ecosystem processes and stresses",
    authors: ["J. Tesch", "K. Kühnhammer", "D. Wagner", "[...]", "S. K. Rajak", "[...]", "J. Strack"],
    journal: "Preprint",
    year: 2025,
    doi: "10.5194/egusphere-2025-4979",
  },
  {
    title: "Ecosense — Smart Sensors Alone in the Forest",
    authors: ["U. Wallrabe", "S. Baghbani", "L. Comella", "[...]", "S. K. Rajak", "[...]", "C. Werner"],
    journal: "23rd International Conference on Solid-State Sensors, Actuators and Microsystems (Transducers)",
    year: 2025,
    doi: "10.1109/transducers61432.2025.11111503",
  },
  {
    title: "Modulation doping and charge density wave transition in layered PbSe–VSe₂ ferecrystal heterostructures",
    authors: ["F. Göhler", "S. Ramasubramanian", "S. K. Rajak", "[...]", "T. Seyller"],
    journal: "Nanoscale",
    year: 2022,
    doi: "10.1039/d2nr01071b",
  },
];
