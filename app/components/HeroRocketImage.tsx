"use client";

import Image from "next/image";
export const HeroRocketImage = () => {
  return (
    <div className="relative">
      <Image
        src="/rocket.svg"
        alt="Rocket icon - Chad Probert"
        width={360}
        height={360}
        className="z-0 fade-in-5 dark:hidden"
        priority
      />
      <Image
        src="/rocket-dark.png"
        alt="Rocket icon - Chad Probert"
        width={360}
        height={360}
        className="z-0 hidden fade-in-5 dark:block"
        priority
      />
    </div>
  );
};
