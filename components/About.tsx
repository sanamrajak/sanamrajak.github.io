import fs from "fs";
import path from "path";
import { parseMarkdown } from "@/lib/markdown";

export default async function About() {
  const src = fs.readFileSync(
    path.join(process.cwd(), "content/about.md"),
    "utf8"
  );
  const html = await parseMarkdown(src);

  return (
    <section id="about" className="max-w-3xl mx-auto px-6 border-t border-stone-100">
      <h2 className="text-2xl font-semibold text-stone-800 mb-6">About</h2>
      <div
        className="prose prose-stone max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}
