export const profile = {
  name: "Sanam Rajak",
  fullName: "Sanam Kumari Rajak",
  tagline: "PhD Researcher · Materials Scientist · Surface Scientist · Polymers and Coating Expert · Chemist",
  region: "Germany",
  openTo: "Open to research roles in materials research",
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
  email: "emh1aHR5aHFocjRAdmJhc3Z2ci5qdnQ=" as string,
} as const;
