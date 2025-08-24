"use client";
import Image from "next/image";
import "./About.css";
import { useEffect, useRef } from "react";

export const About = () => {
  // Scroll-triggered reveal
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Once visible, we can stop observing to avoid retriggering
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mb-50">
      <h2
        id="about"
        className="text-3xl font-bold sm:text-5xl var(--foreground) mb-20 text-center tracking-wide"
      >
        About Me
      </h2>
      <div ref={revealRef} className="flex items-center justify-center gap-6 reveal-on-scroll">
        <div className="about-container flex flex-col items-center justify-center p-15 max-w-3xl rounded-3xl border-1 border-neutral-300">
          <div className="flex items-center justify-center gap-10">
            <Image
              src="/about-icon.svg"
              alt="About Icon"
              width={100}
              height={100}
            />
            <p className="text-left sm:text-lg sm:max-w-3xl">
              I am on a mission to channel my curiosity for technological
              advancement into creating and maintaining websites, web
              applications, and software that people can truly immerse
              themselves in and enjoy using.
            </p>
          </div>
        </div>

        <div className="experience-container flex flex-col items-center justify-center p-11 w-[25%] rounded-3xl border-1 border-neutral-300">
          <div className="experience-content flex flex-col items-center gap-3">
            <div className="flex items-center justify-center">
              <Image
                src="/experience-icon.svg"
                alt="Experience Icon"
                width={90}
                height={90}
              />
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center sm:text-2xl font-normal">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
