export const profile = {
  name: "Sanam Rajak",
  fullName: "Sanam Kumari Rajak",
  tagline: "Materials Scientist · PhD Candidate",
  region: "Germany",
  openTo: "Open to industry and research roles in materials science",
  researchFocus: [
    "Self-cleaning surfaces",
    "Anti-fouling coatings",
    "Polymer thin films",
    "Surface functionalization",
    "Layered heterostructures",
    "Environmental sensing",
  ],
  linkedin: "https://www.linkedin.com/in/sanam-rajak/",
  orcid: "https://orcid.org/0009-0004-1822-1239",
  scholar: "https://scholar.google.com/citations?user=QmxmUboAAAAJ",
  // Email encoded as btoa(rot7(address)). See ObfuscatedLink.tsx for the encoding snippet.
  email: "" as string,
} as const;
