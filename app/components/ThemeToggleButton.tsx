import React, { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} aria-label="Toggle dark mode" className="border-1 border-neutral-200 p-2 rounded-lg hover:cursor-pointer">
      <span className="block transition-transform duration-300 text-xl">
        {theme === "dark" ? <Moon color="white" size={16} /> : <Sun color="black" size={16} />}
      </span>
    </button>
  );
};

export default ThemeToggleButton;
