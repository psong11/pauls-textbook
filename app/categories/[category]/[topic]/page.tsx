import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryBySlug } from "@/lib/categories";

export default async function TopicPage({
  params,
}: {
  params: Promise<{ category: string; topic: string }>;
}) {
  const { category: categorySlug, topic } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="border-b border-zinc-800 px-6 py-4 flex gap-2 text-sm text-zinc-400">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href={`/categories/${category.slug}`}
          className="hover:text-white transition-colors"
        >
          {category.name}
        </Link>
        <span>/</span>
        <span className="text-zinc-200">{topic}</span>
      </nav>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-16">
        {/* Individual visualization — Fork 4 decides format (pure viz, MDX, hybrid) */}
        <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/30 p-16 text-center">
          <p className="text-zinc-500">
            Visualization: <span className="text-zinc-300">{topic}</span>
          </p>
          <p className="mt-2 text-sm text-zinc-600">
            Content format TBD — interactive only, written + viz, or hybrid.
          </p>
        </div>
      </main>
    </div>
  );
}
