import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import "./ThemeToggleButton.css";

export const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="theme-toggle-button border-1 border-neutral-200 p-3 rounded-xl hover:cursor-pointer focus:outline-none"
    >
      <Sun className="sun-icon" size={18} strokeWidth={2.5} />
      <Moon className="moon-icon" size={18} strokeWidth={2.5} />
    </button>
  );
};