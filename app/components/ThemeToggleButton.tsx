import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import "./ThemeToggleButton.css";

export const ThemeToggleButton = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      key={theme}
      className="theme-toggle-button theme-toggle-ease rounded-lg bg-transparent p-2.5 text-foreground/75 hover:text-foreground hover:cursor-pointer focus:outline-none transition-colors duration-400"
    >
      <Sun className="sun-icon" size={18} strokeWidth={2.5} />
      <Moon className="moon-icon" size={18} strokeWidth={2.5} />
    </button>
  );
};
