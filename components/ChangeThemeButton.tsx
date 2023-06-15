"use client"

import { useLocalStorage } from "@/custom-hooks/use-localstorage"
import { themes } from "@/lib/themes"
import { useEffect } from "react"

export default function ChangeThemeButton() {
  const [theme, setTheme] = useLocalStorage("theme")

  useEffect(() => {
    Object.entries(themes[theme === "light" ? "light" : "dark"]).forEach(
      ([cssKey, cssValue]) => {
        document.documentElement.style.setProperty(cssKey, cssValue)
      }
    )
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="change-theme"
      title="Dark/Light theme"
    >
      {theme === "dark" ? "☀️" : "🌑"}
    </button>
  )
}
