import { Download, Mail, Zap } from "lucide-react";
import "./Hero.css";

export const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative isolate"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="hero-surface relative overflow-hidden rounded-3xl bg-[var(--background)]/80 px-6 py-16 text-center  shadow-black/10 backdrop-blur-sm sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <div className="hero-glow" aria-hidden="true" />
          <header className="flex flex-col items-center gap-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--background)]/90 px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="inline-flex items-center gap-1">
                Available for new projects
                <Zap className="h-4 w-4 text-emerald-500" aria-hidden="true" />
              </span>
            </span>

            <div className="space-y-4">
              <h1
                id="home-heading"
                className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
              >
                Chad Probert
              </h1>
              <p className="text-balance text-xl text-muted-foreground sm:text-2xl">
                Web Developer
              </p>
            </div>

            <div className="hero-actions flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="/downloads/Chad_Probert_Web_Developer.pdf"
                className="call-to-action inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-base font-medium transition-all duration-300"
                download
              >
                <Download className="h-5 w-5" strokeWidth={2} />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-6 py-3 text-base font-medium transition-colors duration-300 hover:bg-foreground/5"
              >
                <Mail className="h-5 w-5" strokeWidth={2} />
                Contact me
              </a>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};
