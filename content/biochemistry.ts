import { CategoryContent } from "@/lib/types";

export const biochemistryContent: CategoryContent = {
  categorySlug: "biochemistry",
  sections: [
    {
      title: "Molecules of Life",
      topics: [
        {
          slug: "protein-structure",
          name: "Protein Structure & Folding",
        },
        {
          slug: "enzyme-kinetics",
          name: "Enzyme Kinetics & Catalysis",
        },
      ],
    },
    {
      title: "Metabolism",
      topics: [
        {
          slug: "glycolysis-and-tca",
          name: "Glycolysis & the TCA Cycle",
        },
        {
          slug: "oxidative-phosphorylation",
          name: "Oxidative Phosphorylation & the ETC",
        },
        {
          slug: "lipid-metabolism",
          name: "Lipid Metabolism",
        },
        {
          slug: "metabolic-integration",
          name: "Metabolic Integration & Regulation",
        },
      ],
    },
    {
      title: "Information Flow",
      topics: [
        {
          slug: "dna-replication-and-repair",
          name: "DNA Replication & Repair",
        },
        {
          slug: "gene-expression",
          name: "Transcription, Translation & Gene Regulation",
        },
        {
          slug: "signal-transduction",
          name: "Signal Transduction",
        },
      ],
    },
  ],
};
