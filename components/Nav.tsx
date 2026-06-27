"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-stone-100">
        <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="#hero"
            className="text-sm font-semibold text-stone-800 hover:text-accent transition-colors whitespace-nowrap"
          >
            Sanam Rajak
          </a>

          {/* Desktop links */}
          <ul className="hidden sm:flex gap-6">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-stone-500 hover:text-accent transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button — mobile only */}
          <button
            className="sm:hidden p-1 text-stone-500 hover:text-stone-800 transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect y="3" width="20" height="2" rx="1" />
              <rect y="9" width="20" height="2" rx="1" />
              <rect y="15" width="20" height="2" rx="1" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/20 transition-opacity duration-300"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 z-[60] h-full w-64 bg-white shadow-xl flex flex-col transition-transform duration-300"
        style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex items-center justify-end px-6 h-14 border-b border-stone-100">
          <button
            onClick={() => setOpen(false)}
            className="p-1 text-stone-500 hover:text-stone-800 transition-colors"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col py-2">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-6 py-3.5 text-stone-600 hover:text-accent hover:bg-accent-subtle transition-colors"
              >
                <span className="text-sm font-medium">{label}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 12l4-4-4-4" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
