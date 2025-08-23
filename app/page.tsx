import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { RotatingCube } from "@/components/RotatingCube";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <main>
        <Navbar />
        <section className="mx-auto max-w-8xl px-0 pt-14 lg:px-8 mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <Hero />
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative flex items-center justify-center">
                <Image
                  src="/Gradient.svg"
                  alt="Gradient"
                  width={600}
                  height={600}
                  className="z-0"
                />
                <div className="absolute z-10">
                  <RotatingCube />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Rest of page */}
        <About />
      </main>
      <Footer />
    </div>
  );
}
