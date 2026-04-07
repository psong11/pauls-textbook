import { CategoryContent } from "@/lib/types";

export const physicsContent: CategoryContent = {
  categorySlug: "physics",
  sections: [
    {
      title: "Mechanics",
      topics: [
        {
          slug: "kinematics-and-forces",
          name: "Kinematics & Newton's Laws",
        },
        {
          slug: "energy-and-momentum",
          name: "Energy, Work & Momentum",
        },
        {
          slug: "fluids",
          name: "Fluid Mechanics",
        },
      ],
    },
    {
      title: "Waves & Thermodynamics",
      topics: [
        {
          slug: "waves-and-sound",
          name: "Waves, Sound & Optics",
        },
        {
          slug: "thermodynamics",
          name: "Thermodynamics & Heat",
        },
      ],
    },
    {
      title: "Electricity & Magnetism",
      topics: [
        {
          slug: "electrostatics",
          name: "Electrostatics & Electric Fields",
        },
        {
          slug: "circuits",
          name: "Circuits & DC Analysis",
        },
        {
          slug: "magnetism-and-induction",
          name: "Magnetism & Electromagnetic Induction",
        },
      ],
    },
  ],
};
