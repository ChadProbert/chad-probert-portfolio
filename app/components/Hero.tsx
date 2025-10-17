import { Download, Zap, Mail } from "lucide-react";
import "./Hero.css";

export const Hero = () => {
  return (
    <div id="home">
      <div className="relative isolate pt-14">
        <div className="mx-auto py-8 sm:py-24 lg:py-32">
          <div className="text-center md:text-left lg:text-left">
            <h1 className="text-5xl font-semibold sm:text-8xl tracking-wide">
              Chad Probert
            </h1>
            <p className="mt-6 mb-8 text-2xl font-normal text-pretty sm:text-5xl">
              Web Developer
            </p>

            <div className="mt-8 mb-16 flex justify-center md:justify-center lg:justify-start">
              <div className="availability relative rounded-full px-2 py-1.5 text-sm/6 bg-transparent border-1 border-neutral-300">
                <Zap
                  size={16}
                  className="inline text-green-400  animate-pulse m-1"
                />{" "}
                <span className="pr-2">Available for new projects.</span>
              </div>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 sm:justify-start">
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
                className="font-normal rounded-2xl px-5 py-3.5 text-md border-1 border-neutral-300 hover:bg-foreground/5 transition-colors duration-400 "
              >
                <div className="flex items-center gap-2">
                  <Mail height={18} width={20} strokeWidth={2} /> Contact me
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
