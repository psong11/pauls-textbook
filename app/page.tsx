import Link from "next/link";
import { categories, CATEGORY_GROUPS, getCategoriesByGroup } from "@/lib/categories";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero — placeholder for Fork 1 decision */}
      <header className="flex flex-col items-center justify-center py-32 px-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
          Science Portfolio
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
          Interactive visualizations exploring the sciences, mathematics,
          technology, and the world — built by Paul Song.
        </p>
      </header>

      {/* Category Grid — grouped by theme */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 pb-32">
        {CATEGORY_GROUPS.map((group) => {
          const groupCategories = getCategoriesByGroup(group);
          if (groupCategories.length === 0) return null;

          return (
            <section key={group} className="mb-16">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">
                {group}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {groupCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/categories/${category.slug}`}
                    className="group relative flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-600 hover:bg-zinc-900"
                  >
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-white">
                      {category.name}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {category.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">
        Paul Song &middot; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
