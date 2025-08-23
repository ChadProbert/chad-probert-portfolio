import { Download, Zap, Mail  } from "lucide-react";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="">
     
      <div className="relative isolate pt-14">
        <div className="mx-auto py-16 sm:py-24 lg:py-32">
          <div className="text-left">
            <h1 className="text-5xl font-semibold sm:text-8xl">Chad Probert</h1>
            <p className="mt-8 mb-10 text-2xl font-normal text-pretty sm:text-5xl">
              Web Developer
            </p>

            <div className="hidden mt-10 sm:mb-20 sm:flex sm:justify-start">
              <div className="availability relative rounded-full px-3 py-2 text-sm/6 bg-transparent">
                <Zap
                  size={16}
                  className="inline text-green-400  animate-pulse m-1"
                />{" "}
                <span className="pr-2">Available for new projects.</span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-x-6">
              <a
                href="/downloads/chad-probert-software-developer.pdf"
                className="call-to-action rounded-2xl px-5 py-3.5 text-md font-medium transition-colors duration-300"
                download
              >
                <div className="flex items-center gap-2">
                  <Download height={20} width={20} strokeWidth={2} /> Download CV
                </div>
              </a>
              <a href="#contact" className="font-normal rounded-2xl px-5 py-3.5 text-md border-1 border-neutral-300 transition-colors duration-300 ">
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
}
