export interface Category {
  slug: string;
  name: string;
  group: string;
  description: string;
  icon: string; // emoji placeholder — swap for custom icons later
}

export const CATEGORY_GROUPS = [
  "Core Sciences",
  "Life Sciences",
  "Quantitative",
  "Technical",
  "Interdisciplinary",
] as const;

export type CategoryGroup = (typeof CATEGORY_GROUPS)[number];

export const categories: Category[] = [
  // Core Sciences
  {
    slug: "chemistry",
    name: "Chemistry",
    group: "Core Sciences",
    description:
      "Atomic structure, bonding, reactions, thermodynamics, and the periodic table",
    icon: "⚗️",
  },
  {
    slug: "organic-chemistry",
    name: "Organic Chemistry",
    group: "Core Sciences",
    description:
      "Carbon-based molecules, reaction mechanisms, functional groups, and synthesis",
    icon: "🧪",
  },
  {
    slug: "physics",
    name: "Physics",
    group: "Core Sciences",
    description:
      "Mechanics, electromagnetism, thermodynamics, optics, and quantum phenomena",
    icon: "⚛️",
  },
  {
    slug: "biochemistry",
    name: "Biochemistry",
    group: "Core Sciences",
    description:
      "Enzyme kinetics, metabolic pathways, protein structure, and molecular biology",
    icon: "🧬",
  },

  // Life Sciences
  {
    slug: "biology",
    name: "Biology",
    group: "Life Sciences",
    description:
      "Cell biology, genetics, evolution, ecology, and organismal biology",
    icon: "🦠",
  },
  {
    slug: "anatomy",
    name: "Anatomy",
    group: "Life Sciences",
    description:
      "Human body systems, skeletal structure, musculature, and organ systems",
    icon: "🫀",
  },
  {
    slug: "physiology",
    name: "Physiology",
    group: "Life Sciences",
    description:
      "How biological systems function — cardiovascular, respiratory, renal, and neural",
    icon: "🫁",
  },
  {
    slug: "genetics-genomics",
    name: "Genetics & Genomics",
    group: "Life Sciences",
    description:
      "DNA replication, inheritance patterns, gene expression, and CRISPR",
    icon: "🧬",
  },
  {
    slug: "microbiology-immunology",
    name: "Microbiology & Immunology",
    group: "Life Sciences",
    description:
      "Pathogens, immune response cascades, vaccines, and host-pathogen interactions",
    icon: "🔬",
  },
  {
    slug: "neuroscience",
    name: "Neuroscience",
    group: "Life Sciences",
    description:
      "Neural signaling, brain architecture, synaptic transmission, and neuroplasticity",
    icon: "🧠",
  },
  {
    slug: "pharmacology",
    name: "Pharmacology",
    group: "Life Sciences",
    description:
      "Drug mechanisms, receptor binding, pharmacokinetics, and dose-response relationships",
    icon: "💊",
  },
  {
    slug: "ecology-environmental-science",
    name: "Ecology & Environmental Science",
    group: "Life Sciences",
    description:
      "Ecosystems, population dynamics, biodiversity, and environmental impact",
    icon: "🌍",
  },

  // Quantitative
  {
    slug: "mathematics",
    name: "Mathematics",
    group: "Quantitative",
    description:
      "Calculus, linear algebra, differential equations, and mathematical modeling",
    icon: "📐",
  },
  {
    slug: "statistics-biostatistics",
    name: "Statistics & Biostatistics",
    group: "Quantitative",
    description:
      "Probability, hypothesis testing, regression, survival analysis, and clinical trial design",
    icon: "📊",
  },

  // Technical
  {
    slug: "computer-science",
    name: "Computer Science",
    group: "Technical",
    description:
      "Algorithms, data structures, systems design, and computational thinking",
    icon: "💻",
  },
  {
    slug: "ai",
    name: "Artificial Intelligence",
    group: "Technical",
    description:
      "Machine learning, neural networks, NLP, computer vision, and AI in medicine",
    icon: "🤖",
  },
  {
    slug: "data-engineering",
    name: "Data Engineering",
    group: "Technical",
    description:
      "Pipeline architecture, ETL, data modeling, and distributed systems",
    icon: "🔧",
  },
  {
    slug: "biomedical-engineering",
    name: "Biomedical Engineering",
    group: "Technical",
    description:
      "Medical devices, imaging technology, prosthetics, and bioinformatics",
    icon: "🏥",
  },

  // Interdisciplinary
  {
    slug: "ethics-bioethics",
    name: "Ethics & Bioethics",
    group: "Interdisciplinary",
    description:
      "Medical ethics, organ allocation, triage frameworks, and research ethics",
    icon: "⚖️",
  },
  {
    slug: "history-of-science",
    name: "History of Science",
    group: "Interdisciplinary",
    description:
      "Major breakthroughs, paradigm shifts, evolution of scientific thought and medicine",
    icon: "📜",
  },
  {
    slug: "global-health",
    name: "Global Health & Public Health",
    group: "Interdisciplinary",
    description:
      "Disease burden, healthcare systems, epidemiology, and health equity",
    icon: "🌐",
  },
  {
    slug: "psychology-behavioral-science",
    name: "Psychology & Behavioral Science",
    group: "Interdisciplinary",
    description:
      "Cognition, behavior, social psychology, and psychological research methods",
    icon: "🧩",
  },
  {
    slug: "global-economics",
    name: "Global Economics",
    group: "Interdisciplinary",
    description:
      "Trade flows, development indicators, economic history, and health economics",
    icon: "📈",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoriesByGroup(group: CategoryGroup): Category[] {
  return categories.filter((c) => c.group === group);
}
