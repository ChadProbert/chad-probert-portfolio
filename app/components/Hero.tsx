import { Download, Zap, Mail } from "lucide-react";
import "./Hero.css";

export const Hero = () => {
  return (
    <section id="home" aria-labelledby="home-heading">
      <div className="relative isolate pt-8 sm:pt-0 lg:pt-16">
        <div className="mx-auto py-8 sm:py-24 lg:py-16">
          <header className="text-center md:text-left lg:text-left">
            <h1
              id="home-heading"
              className="text-5xl font-semibold sm:text-8xl tracking-wide"
            >
             Chad Probert
            </h1>
            <p className="mt-6 mb-10 text-2xl font-normal text-pretty sm:text-5xl">
              Web Developer
            </p>

            <div className="mb-10 flex justify-center md:justify-center lg:justify-start">
              <div className="availability relative rounded-full px-2 py-1.5 text-sm/6 dark:bg-green-950/30 text-green-300 inline-flex items-center gap-2 border border-green-300">
                <p className="flex items-center text-base text-green-300 px-3">
                  Available for new projects <Zap className="ml-1 h-4 w-5" />
                  </p>
              </div>
            </div>

            <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 sm:justify-start">
              <a
                href="/downloads/Chad_Probert_Web_Developer.pdf"
                className="call-to-action rounded-2xl px-5 py-3.5 text-md font-medium transition-all duration-400"
                download
              >
                <div className="flex items-center gap-2">
                  <Download height={20} width={20} strokeWidth={2} /> Download
                  CV
                </div>
              </a>
              <a
                href="#contact"
                className="font-normal rounded-2xl px-5 py-3.5 text-md border-1 hover:bg-foreground/5 transition-colors duration-400 "
              >
                <div className="flex items-center gap-2">
                  <Mail height={18} width={20} strokeWidth={2} /> Contact me
                </div>
              </a>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};
