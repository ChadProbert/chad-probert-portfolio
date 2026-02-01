import { HomeGate } from "@/components/HomeGate";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <HomeGate
      topContent={
        <>
          <Navbar />
          <section className="hero-bleed relative z-30 mx-auto px-0 pt-8 sm:pt-10 md:pt-12 lg:px-8 mb-9 sm:mb-16 md:mb-24 lg:mb-36">
            <div className="hero-content relative z-10 lg:pt-[240px]">
              <Hero />
            </div>
          </section>
        </>
      }
      bottomContent={
        <>
          <section className="relative z-20 -mt-[180px] sm:-mt-[220px] md:-mt-[260px] lg:-mt-[220px] bg-white dark:bg-[#2B2B2B]">
            <div className="relative z-10">
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </div>
          </section>
          <ScrollToTop />
        </>
      }
    />
  );
}
