import { profile } from "@/data/profile";

export default function Research() {
  return (
    <section id="research" className="max-w-3xl mx-auto px-6 border-t border-stone-100">
      <h2 className="text-2xl font-semibold text-stone-800 mb-8">Research Focus</h2>
      <ul className="flex flex-wrap gap-2">
        {profile.researchFocus.map((keyword) => (
          <li
            key={keyword}
            className="rounded-full bg-accent-subtle text-accent-on-subtle border border-transparent hover:border-accent px-3 py-1 text-sm transition-colors duration-150"
          >
            {keyword}
          </li>
        ))}
      </ul>
    </section>
  );
}
