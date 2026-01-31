import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Globe } from "@/components/components/ui/globe";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full page-bleed">
      <main>
        <Navbar />
        <section className="hero-bleed mx-auto px-0 pt-8 lg:px-8 mb-9 lg:mb-36">
          <Hero />
        </section>
        <section
          aria-hidden="true"
          className="relative z-20 mx-auto flex h-[260px] w-full max-w-5xl items-start justify-center overflow-visible px-4 sm:h-[320px] sm:px-6 lg:h-[420px] lg:px-8"
        >
          <Globe className="inset-auto left-1/2 -top-[110px] sm:-top-[140px] lg:-top-[170px] w-[560px] -translate-x-1/2 sm:w-[740px] lg:w-[940px]" />
        </section>
        <div className="relative z-30 -mt-20 sm:-mt-28 lg:-mt-32">
          <About />
        </div>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
