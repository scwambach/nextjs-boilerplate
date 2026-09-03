"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import "./styles.css";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme");
  return savedTheme === "dark" ? "dark" : "light";
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const nextTheme = theme === "light" ? "dark" : "light";
  const label = `Switch to ${nextTheme} mode`;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(nextTheme)}
      aria-label={label}
      title={label}
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      <span>{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );
}
