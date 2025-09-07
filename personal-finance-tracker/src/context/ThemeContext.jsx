import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedMode = localStorage.getItem("dark-mode");
    return savedMode === "true"; // default: false if nothing saved
  });
//https://www.youtube.com/watch?v=drWn3MP9bmU
  // Effect: update localStorage + body class whenever theme changes
  useEffect(() => {
    localStorage.setItem("dark-mode", theme);
    document.body.className = theme ? "dark-mode" : "";
  }, [theme]);

  // Toggle between true/false
  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
