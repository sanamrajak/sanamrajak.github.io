export const profile = {
  name: "Sanam Rajak",
  tagline: "Materials Scientist · PhD Candidate",
  region: "Germany",
  openTo: "Open to industry and research roles in materials science",
  researchFocus: [
    "Thin films",
    "Surface characterization",
    "Battery materials",
    "Electrochemistry",
    "Functional coatings",
  ],
  linkedin: "https://linkedin.com/in/placeholder",
  orcid: "https://orcid.org/0000-0000-0000-0000",
  scholar: "https://scholar.google.com/citations?user=placeholder",
  // Email stored as char codes to avoid scraper harvesting.
  // Replace with actual address: each number is a char code, e.g. "a" = 97.
  email: [
    115, 97, 110, 97, 109, 64, 101, 120, 97, 109, 112, 108, 101, 46, 99, 111,
    109,
  ],
} as const;
