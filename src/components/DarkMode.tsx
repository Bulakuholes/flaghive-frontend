"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeButton() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  useEffect(() => {
    if (localStorage.theme === "dark" && darkMode == null) {
      setDarkMode(true);
    }
    document.body.classList.toggle("dark", darkMode ?? false);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  return (
    <button className="cursor-pointer" style={{
        transition: "all 0.3s",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "2rem",
        height: "2rem",
        borderRadius: "50%",
        border: "none",
        background: "transparent",
        outline: "none",
        color: "inherit",
        position: "relative",
        fontSize: "1.5rem",
        cursor: "pointer",
        userSelect: "none",
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
    }} onClick={() => setDarkMode(!darkMode)}>
      <Sun style={{
        // display: darkMode ? "none" : "block",
        display: "block",
        position: "absolute",
        transform: darkMode ? "translateY(0%)" : "translateY(150%)",
        transition: "all 0.3s",
      }} />
      <Moon style={{
        // display: darkMode ? "block" : "none",
        display: "block",
        position: "absolute",
        transition: "all 0.3s",
        transform: darkMode ? "translateY(-150%)" : "translateY(0%)",
      }} />
    </button>
  );
}

export function HeadTheme() {
  "use client";
  return (
    <script>{`
        if (typeof window !== "undefined") {
      document.body.classList.toggle(
        "dark",
        localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
`}</script>
  );
}
