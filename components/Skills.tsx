import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 border-t border-stone-100">
      <h2 className="text-2xl font-semibold text-stone-800 mb-8">Skills</h2>
      <div className="flex flex-col gap-8">
        {skills.map(({ group, items }) => (
          <div key={group}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">
              {group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-accent-subtle text-accent-on-subtle border border-transparent hover:border-accent px-3 py-1 text-sm transition-colors duration-150"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
