import { PhoneOutgoing } from "lucide-react";
import "./Hero.css";

export const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative isolate"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="hero-surface relative overflow-hidden rounded-3xl px-6 pt-28 pb-12 text-center backdrop-blur-sm sm:px-12 sm:pt-36 sm:pb-16 lg:px-16 lg:pt-[180px] lg:pb-18">
          <header className="flex flex-col items-center gap-8">
            <div className="mt-3 space-y-4 sm:mt-5">
              <h1
                id="home-heading"
                className="text-balance text-8xl font-medium tracking-tight sm:text-8xl lg:text-8xl"
              >
                Chad Probert
              </h1>
              <p className="mt-6 text-balance text-2xl font-light tracking-wide text-muted-foreground sm:text-3xl">
                Web Developer / Software Developer
              </p>
            </div>

            <div className="mt-8 hero-actions flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="call-to-action inline-flex items-center gap-2 rounded-2xl border bg-[var(--background)]/90 px-6 py-3 text-base font-medium text-foreground transition-colors duration-300"
              >
                <PhoneOutgoing className="mr-1 h-5 w-5" strokeWidth={2} />
                Get in Touch
              </a>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};
