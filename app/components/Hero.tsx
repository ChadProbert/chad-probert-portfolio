 "use client";

import "./Hero.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative isolate"
    >
      <div key={theme} className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="hero-surface relative overflow-hidden rounded-3xl px-5 py-10 text-center sm:px-10 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-8">
          <header className="hero-content-ease flex flex-col items-center gap-8">
            <div className="mt-3 space-y-4 sm:mt-5">
              <h1
                id="home-heading"
                className="text-balance text-5xl font-medium tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              >
                Chad Probert
              </h1>
              <p className="mt-6 text-balance text-base font-light tracking-wide text-muted-foreground sm:text-lg md:text-xl lg:text-2xl">
                Web Developer / Software Developer
              </p>
            </div>

            <div className="mt-2 hero-actions flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                className="call-to-action hero-cta relative z-30 inline-flex items-center gap-2 rounded-md border border-orange-400 bg-orange-400 px-4 py-2 text-base font-medium text-white transition-all duration-400 hover:brightness-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />
                </svg>
                Let&apos;s Talk
              </a>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};
