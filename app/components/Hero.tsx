import Navbar from "./Navbar";
import { Box, ArrowBigDownDash } from "lucide-react";
import Image from "next/image";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="">
      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
         
          <div className="flex justify-center mb-8">
            <Image src="/me.png" alt="A picture of myself" width={160} height={160} className="profile-picture rounded-full border-1 border-neutral-300 p-1" />
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl font-bold sm:text-8xl">
              Chad Probert
            </h1>
            <p className="mt-8 text-lg font-bold text-pretty sm:text-4xl">
              — Software Engineer
            </p>
            <div className="hidden sm:mt-8 sm:mb-30 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 ring-1 ">
              <Box
                size={16}
                className="inline text-green-400 m-1 animate-pulse"
              />{" "}
              Available for new projects.
            </div>
          </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/downloads/chad-probert-software-developer.pdf"
                className="call-to-action rounded-md  px-4 py-3 text-sm font-semibold shadow-xs border-1 border-neutral-300 transition-colors duration-300"
                download
              >
                <div className="flex items-center gap-2">
                  Download CV <ArrowBigDownDash size={16} />
                </div>
              </a>
              <a href="#contact" className="text-sm/6 font-semibold">
                Contact me{" "}
                <span aria-hidden="true" className="text-2xl">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
