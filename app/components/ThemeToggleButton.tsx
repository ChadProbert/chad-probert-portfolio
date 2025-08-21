import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} aria-label="Toggle dark mode" className="border-1 border-neutral-200 p-3 rounded-xl hover:cursor-pointer focus:outline-none">
      <span className="block transition-transform duration-300 text-xl font-medium">
        {theme === "dark" ? <Moon color="white" size={18} strokeWidth={2.5} /> : <Sun color="black" size={18} strokeWidth={2.5} />}
      </span>
    </button>
  );
};