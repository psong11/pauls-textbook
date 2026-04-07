"use client";

import Link from "next/link";
import type { CategoryContent } from "@/lib/types";

export default function TableOfContents({
  content,
}: {
  content: CategoryContent;
}) {
  const totalTopics = content.sections.reduce(
    (acc, s) => acc + s.topics.length,
    0
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-semibold text-zinc-300">
          Table of Contents
        </h2>
        <p className="text-xs text-zinc-600">{totalTopics} topics</p>
      </div>
      <div className="space-y-10">
        {content.sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
              {section.title}
            </h3>
            <div className="space-y-2">
              {section.topics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/categories/${content.categorySlug}/${topic.slug}`}
                  className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 px-5 py-4 transition-all hover:border-zinc-600 hover:bg-zinc-900"
                >
                  <span className="text-sm font-medium text-zinc-200">
                    {topic.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
