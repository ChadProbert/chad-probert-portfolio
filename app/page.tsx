import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="container mx-auto">
      <main>
        <Navbar />
        <section className="mx-auto px-0 pt-14 lg:px-8 mb-20 lg:mb-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <Hero />
            </div>
            <div className="order-1 hidden lg:block lg:order-2">
              <div className="relative flex items-center justify-end">
                <div className="absolute z-10">
                  <Image
                    src="/rocket.svg"
                    alt="Rocket icon - Chad Probert"
                    width={360}
                    height={360}
                    className="z-0 fade-in-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
