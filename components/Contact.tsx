import { profile } from "@/data/profile";
import ObfuscatedLink from "@/components/ObfuscatedLink";

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 border-t border-stone-100">
      <h2 className="text-2xl font-semibold text-stone-800 mb-8">Contact</h2>
      <ul className="flex flex-col gap-3 text-sm">
        <li>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={profile.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            ORCID
          </a>
        </li>
        <li>
          <a
            href={profile.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Google Scholar
          </a>
        </li>
        <li>
          <ObfuscatedLink
            charCodes={profile.email as unknown as number[]}
            className="text-accent hover:underline"
          />
        </li>
      </ul>
    </section>
  );
}
