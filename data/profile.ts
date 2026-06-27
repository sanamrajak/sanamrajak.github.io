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
  linkedin: "https://www.linkedin.com/in/sanam-rajak/",
  orcid: "https://orcid.org/0009-0004-1822-1239",
  scholar: "https://scholar.google.com/citations?user=QmxmUboAAAAJ",
  // Email encoded as btoa(rot7(address)). See ObfuscatedLink.tsx for the encoding snippet.
  email: "emh1aHRAbGVodHdzbC5qdnQ=", // placeholder: sanam@example.com
} as const;
