import { publications } from "@/data/publications";
import { profile } from "@/data/profile";

export default function Publications() {
  return (
    <section id="publications" className="max-w-3xl mx-auto px-6 border-t border-stone-100">
      <h2 className="text-2xl font-semibold text-stone-800 mb-8">Selected Publications</h2>
      <ol className="flex flex-col gap-6">
        {[...publications].sort((a, b) => b.year - a.year).map((pub) => (
          <li key={pub.doi ?? pub.title} className="flex flex-col gap-1">
            {pub.doi ? (
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-stone-800 leading-snug hover:text-accent transition-colors"
              >
                {pub.title}
              </a>
            ) : (
              <p className="font-medium text-stone-800 leading-snug">{pub.title}</p>
            )}
            <p className="text-sm text-stone-500">
              {pub.authors.join(", ")}
            </p>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm text-stone-400">
                {pub.journal}, {pub.year}
              </span>
              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs border border-accent text-accent rounded px-2 py-0.5 hover:bg-accent-subtle transition-colors"
                >
                  DOI
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-10 flex gap-4 text-sm">
        <a
          href={profile.scholar}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Full list on Google Scholar →
        </a>
        <a
          href={profile.orcid}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          ORCID →
        </a>
      </div>
    </section>
  );
}
