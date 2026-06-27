import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="[&>section]:py-10">
        <Hero />
        <About />
        <Skills />
        <Research />
        <Publications />
        <Contact />
        <footer className="max-w-3xl mx-auto px-6 py-8 border-t border-stone-100 text-xs text-stone-400">
          © {new Date().getFullYear()} Sanam Rajak
        </footer>
      </main>
    </>
  );
}
