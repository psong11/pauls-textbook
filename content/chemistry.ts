import { CategoryContent } from "@/lib/types";

export const chemistryContent: CategoryContent = {
  categorySlug: "chemistry",
  sections: [
    {
      title: "Atoms & Bonding",
      topics: [
        {
          slug: "atomic-structure",
          name: "Atomic Structure & Orbitals",
        },
        {
          slug: "periodic-table",
          name: "The Periodic Table",
        },
        {
          slug: "chemical-bonding",
          name: "Chemical Bonding & Molecular Geometry",
        },
      ],
    },
    {
      title: "Reactions & Energy",
      topics: [
        {
          slug: "thermodynamics",
          name: "Thermodynamics & Free Energy",
        },
        {
          slug: "kinetics",
          name: "Chemical Kinetics",
        },
        {
          slug: "equilibrium",
          name: "Chemical Equilibrium",
        },
      ],
    },
    {
      title: "Applied Chemistry",
      topics: [
        {
          slug: "acids-and-bases",
          name: "Acids, Bases & Buffers",
        },
        {
          slug: "electrochemistry",
          name: "Electrochemistry & Redox",
        },
      ],
    },
  ],
};
