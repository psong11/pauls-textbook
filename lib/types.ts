export interface TopicEntry {
  slug: string;
  name: string;
  subtopics?: string[];
}

export interface Section {
  title: string;
  topics: TopicEntry[];
}

export interface CategoryContent {
  categorySlug: string;
  sections: Section[];
}
