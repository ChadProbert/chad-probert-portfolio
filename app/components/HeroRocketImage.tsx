"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export const HeroRocketImage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Image
      src={theme === "dark" ? "/rocket-dark.png" : "/rocket.svg"}
      alt="Rocket icon - Chad Probert"
      width={360}
      height={360}
      className="z-0 fade-in-5"
    />
  );
};
