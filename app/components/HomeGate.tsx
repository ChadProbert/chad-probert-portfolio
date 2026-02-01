"use client";

import { type ReactNode, useCallback, useState } from "react";
import { Globe } from "@/components/components/ui/globe";

type HomeGateProps = {
  topContent: ReactNode;
  bottomContent: ReactNode;
};

export const HomeGate = ({ topContent, bottomContent }: HomeGateProps) => {
  const [isGlobeReady, setIsGlobeReady] = useState(false);
  const handleGlobeReady = useCallback(() => setIsGlobeReady(true), []);

  return (
    <div className="w-full page-bleed">
      <main>
        {isGlobeReady && topContent}
        <section
          aria-hidden="true"
          className={`relative z-20 mx-auto flex h-[260px] w-full max-w-5xl items-start justify-center overflow-visible px-4 transition-opacity duration-300 sm:h-[320px] sm:px-6 lg:h-[420px] lg:px-8 ${
            isGlobeReady ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Globe
            onReady={handleGlobeReady}
            className="pointer-events-none inset-auto left-1/2 -top-[130px] sm:-top-[170px] lg:-top-[240px] w-[720px] -translate-x-1/2 sm:w-[940px] lg:w-[1300px] opacity-90"
          />
        </section>
        {isGlobeReady && bottomContent}
      </main>
    </div>
  );
};
