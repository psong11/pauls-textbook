import { CategoryContent } from "@/lib/types";
import { chemistryContent } from "./chemistry";
import { organicChemistryContent } from "./organic-chemistry";
import { physicsContent } from "./physics";
import { biochemistryContent } from "./biochemistry";

const contentMap: Record<string, CategoryContent> = {
  chemistry: chemistryContent,
  "organic-chemistry": organicChemistryContent,
  physics: physicsContent,
  biochemistry: biochemistryContent,
};

export function getCategoryContent(
  categorySlug: string
): CategoryContent | null {
  return contentMap[categorySlug] ?? null;
}

export function hasContent(categorySlug: string): boolean {
  return categorySlug in contentMap;
}
