"use client";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import "./Projects.css";
import Image from "next/image";

export const Projects = () => {
    useEffect(() => {
        const cards = document.querySelectorAll<HTMLElement>(".project-reveal");
        if (!cards.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { root: null, rootMargin: "0px", threshold: 0.2 }
        );

        cards.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    type Project = {
        title: string;
        description: string;
        demoUrl?: string;
        repoUrl?: string;
        previewSide: "left" | "right";
        previewImage: string;
    };

    const ProjectCard = ({
        title,
        description,
        demoUrl,
        repoUrl,
        previewSide,
        previewImage,
    }: Project) => {
        return (
            <div className="project-reveal reveal-on-scroll flex flex-col lg:flex-row items-stretch gap-20 p-8 lg:p-12 rounded-2xl border border-neutral-300">
                {/* Preview block */}
                <div className={`w-full max-w-md ${previewSide === "left" ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="group w-full h-44 sm:h-52 md:h-56 lg:h-48 xl:h-56 rounded-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 relative overflow-hidden transform transition-transform duration-300 ease-out hover:scale-[1.10]">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="grid grid-cols-3 gap-2 opacity-80">
                                {demoUrl ? (
                                    <Link href="https://chadprobert.github.io/celerity/" target="_blank" rel="noopener noreferrer">
                                        <Image
                                            src={previewImage}
                                            alt="Project Preview"
                                            className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                                            fill
                                    />
                                </Link>
                                ) : (
                                    <Link href="/project-images/Dev_Trends.png">
                                    <Image
                                        src={previewImage}
                                        alt="Project Preview"
                                        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                                        fill
                                    />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content block */}
                <div className={`flex flex-col gap-3 ${previewSide === "left" ? "lg:order-2" : "lg:order-1"}`}>
                    <span className="text-sm font-medium mb-0">
                        Featured Project
                    </span>
                    <h3 className="text-xl sm:text-3xl font-semibold tracking-wide mb-3">{title}</h3>
                    <p className="text-sm sm:text-[15px] w-[75%] mb-2">
                        {description}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                        {demoUrl && (
                            <Link
                                href={demoUrl}
                                className="demo-button inline-flex items-center font-medium rounded-xl border px-3 py-1.5 text-sm transition-colors duration-400"
                            >
                                <ArrowUpRight className="mr-1 h-5 w-5" /> Demo
                            </Link>
                        )}
                        {repoUrl && (
                            <Link
                                href={repoUrl}
                                className="inline-flex items-center rounded-xl border px-3 py-1.5 text-sm var(--button-color)"
                            >
                                <Github className="mr-2 h-4 w-4" /> Repository
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div id="projects" className="mb-50">
            <h2 className="text-3xl font-bold sm:text-5xl var(--foreground) mb-20 text-center tracking-wide">Projects</h2>

            <div>
                <div className="mx-auto flex max-w-6xl flex-col gap-20">
                    <ProjectCard
                        title="Celerity – New Tab Page"
                        description="Celerity is a customisable new tab page featuring lightning-fast search capabilities, developer-inspired themes, and productivity tools."
                        demoUrl="#"
                        repoUrl="#"
                        previewSide="right"
                        previewImage="/project-images/Celerity.png"        
                    />

                    <ProjectCard
                        title="Dev Trends"
                        description="A user-centric web application that interacts with the Dev.to API to fetch and display the latest and most popular development trend articles."
                        repoUrl="#"
                        previewSide="left"
                        previewImage="/project-images/Dev_Trends.png"
                    />
                </div>
            </div>
        </div>
    );
};