import React, { useContext, useEffect, useState } from "react";

type DarkModeValue = null | boolean;
type DarkModeContextValue = {
  isDarkMode: null | boolean;
  toggleTheme: () => void;
};

const DarkModeContext = React.createContext<DarkModeContextValue>({
  isDarkMode: null,
  toggleTheme: () => {},
});

export const DarkModeProvider: React.FC = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState<DarkModeValue>(null);

  const toggleTheme = () => {
    if (!isDarkMode) {
      setDarkMode(true);
      localStorage.setItem("dark-mode", "true");
      return;
    }

    setDarkMode(false);
    localStorage.setItem("dark-mode", "false");
  };

  const value = { isDarkMode, toggleTheme };

  useEffect(() => {
    const darkMode = localStorage.getItem("dark-mode");

    if (!darkMode) {
      localStorage.setItem("dark-mode", "false");
      setDarkMode(false);

      return;
    }

    const parsedValue = JSON.parse(darkMode);

    if (parsedValue === true) {
      setDarkMode(true);
    }
  }, []);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);

  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }

  return context;
};
