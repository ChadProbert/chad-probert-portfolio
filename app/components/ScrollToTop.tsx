"use client";

import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className={`group fixed bottom-0 right-0 z-[9999] h-20 w-20 bg-orange-400 [clip-path:polygon(100%_0,100%_100%,0_100%)] shadow-lg transition-all duration-300 focus:outline-none focus-visible:outline-none hover:brightness-110 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-4 pointer-events-none"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="pointer-events-none absolute bottom-16 right-2 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        Back to top
      </span>
      <span className="absolute bottom-2 right-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M8 6L12 2L16 6" />
          <path d="M12 2V22" />
        </svg>
      </span>
    </button>
  );
};
