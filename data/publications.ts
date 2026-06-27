export type Publication = {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
};

export const publications: Publication[] = [
  {
    title: "Placeholder Publication Title One",
    authors: ["Rajak, S.", "Coauthor, A.", "Coauthor, B."],
    journal: "Journal of Materials Science",
    year: 2024,
    doi: "10.0000/placeholder-1",
  },
  {
    title: "Placeholder Publication Title Two",
    authors: ["Rajak, S.", "Coauthor, C."],
    journal: "Advanced Materials",
    year: 2023,
    doi: "10.0000/placeholder-2",
  },
  {
    title: "Placeholder Publication Title Three",
    authors: ["Coauthor, D.", "Rajak, S.", "Coauthor, E."],
    journal: "ACS Applied Materials & Interfaces",
    year: 2022,
    doi: "10.0000/placeholder-3",
  },
];
