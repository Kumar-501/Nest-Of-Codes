// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem("noc-theme");
      if (stored === "light" || stored === "dark") return stored;
    } catch {}
    return "dark";
  });

  useEffect(() => {
    // ✅ CRITICAL: Must target <html> (document.documentElement)
    // CSS selectors like [data-theme="light"] match the html element
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);

    // Fallback: also set on body
    document.body.setAttribute("data-theme", theme);

    try {
      localStorage.setItem("noc-theme", theme);
    } catch {}

    // Debug — open DevTools console to verify this fires
    console.log("[NOC Theme] →", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}