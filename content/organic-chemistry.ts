import { CategoryContent } from "@/lib/types";

export const organicChemistryContent: CategoryContent = {
  categorySlug: "organic-chemistry",
  sections: [
    {
      title: "Foundations",
      topics: [
        {
          slug: "bonding-and-structure",
          name: "Bonding, Hybridization & Molecular Shape",
        },
        {
          slug: "stereochemistry",
          name: "Stereochemistry & Chirality",
        },
      ],
    },
    {
      title: "Reactions",
      topics: [
        {
          slug: "substitution-and-elimination",
          name: "Substitution & Elimination (SN1/SN2/E1/E2)",
        },
        {
          slug: "alkene-reactions",
          name: "Alkene & Alkyne Reactions",
        },
        {
          slug: "carbonyl-chemistry",
          name: "Carbonyl Chemistry",
        },
        {
          slug: "aromatic-chemistry",
          name: "Aromatic Chemistry & EAS",
        },
      ],
    },
    {
      title: "Applications",
      topics: [
        {
          slug: "reaction-mechanisms",
          name: "Reaction Mechanisms & Retrosynthesis",
        },
        {
          slug: "spectroscopy",
          name: "Spectroscopy (NMR, IR, MS)",
        },
      ],
    },
  ],
};
