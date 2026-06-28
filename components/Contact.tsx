import { Mail, GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";
import ObfuscatedLink from "@/components/ObfuscatedLink";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function OrcidIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <text
        x="12" y="12"
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="16"
        fontFamily="sans-serif"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        iD
      </text>
    </svg>
  );
}

const links = [
  {
    href: profile.linkedin,
    label: "LinkedIn",
    icon: <LinkedinIcon size={16} />,
  },
  {
    href: profile.orcid,
    label: "ORCID",
    icon: <OrcidIcon size={16} />,
  },
  {
    href: profile.scholar,
    label: "Google Scholar",
    icon: <GraduationCap size={16} />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 border-t border-stone-100">
      <h2 className="text-2xl font-semibold text-stone-800 mb-8">Contact</h2>
      <ul className="flex flex-col gap-3 text-sm">
        {links.map(({ href, label, icon }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              {icon}
              {label}
            </a>
          </li>
        ))}
        {profile.email && (
          <li>
            <ObfuscatedLink
              encoded={profile.email}
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              <Mail size={16} />
              <span>Email</span>
            </ObfuscatedLink>
          </li>
        )}
      </ul>
    </section>
  );
}
