"use client";

import { themes } from "@/lib/themes";
import { useEffect, useState } from "react";

export default function ChangeThemeButton({
  className,
}: {
  className: string;
}) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    Object.entries(themes[theme === "dark" ? "dark" : "light"]).forEach(
      ([cssKey, cssValue]) => {
        document.documentElement.style.setProperty(cssKey, cssValue);
      }
    );
    localStorage?.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() =>
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
      }
      className={className}
      title="Dark/Light theme"
    >
      {theme === "dark" ? "☀️" : "🌑"}
    </button>
  );
}
