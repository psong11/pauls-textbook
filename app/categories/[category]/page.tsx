import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { getCategoryContent } from "@/content";
import TableOfContents from "@/components/TableOfContents";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const content = getCategoryContent(slug);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="border-b border-zinc-800 px-6 py-4">
        <Link
          href="/"
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          &larr; All Categories
        </Link>
      </nav>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-16">
        <div className="mb-12">
          <span className="text-4xl mb-4 block">{category.icon}</span>
          <h1 className="text-4xl font-bold text-white">{category.name}</h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
            {category.description}
          </p>
          <span className="mt-3 inline-block text-xs font-medium uppercase tracking-widest text-zinc-500">
            {category.group}
          </span>
        </div>

        {content ? (
          <TableOfContents content={content} />
        ) : (
          <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/30 p-16 text-center">
            <p className="text-zinc-500">
              Content for {category.name} is coming soon.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
