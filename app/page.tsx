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
        {/* <div className="blur-overlay"></div> */}
        <Navbar />
        {/* Hero left, cube right */}
        <section className="mx-auto max-w-8xl px-0 pt-14 lg:px-8 mb-80">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Hero content */}
            <div className="order-2 lg:order-1">
              <Hero />
            </div>
            {/* Right: Rotating cube canvas */}
            <div className="order-1 lg:order-2 h-[420px] sm:h-[520px] lg:h-[600px]">
              <Image
                src="/Gradient.svg"
                alt="Gradient"
                width={600}
                height={600}
                className="absolute top-62 right-80 z-0"
              />
              <RotatingCube />
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
