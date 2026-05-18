"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Era } from "@/types";

const STORAGE_KEY = "preferred-era";
const DEFAULT_ERA: Era = "today";
const ERAS: Era[] = ["1990", "1997", "2008", "2016", "today"];

interface ThemeContextValue {
  era: Era;
  setEra: (era: Era) => void;
  eras: Era[];
}

const ThemeContext = createContext<ThemeContextValue>({
  era: DEFAULT_ERA,
  setEra: () => {},
  eras: ERAS,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [era, setEraState] = useState<Era>(DEFAULT_ERA);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Era | null;
    if (stored && ERAS.includes(stored)) {
      setEraState(stored);
      document.documentElement.setAttribute("data-era", stored);
    } else {
      document.documentElement.setAttribute("data-era", DEFAULT_ERA);
    }
  }, []);

  function setEra(next: Era) {
    setEraState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.setAttribute("data-era", next);
  }

  return (
    <ThemeContext.Provider value={{ era, setEra, eras: ERAS }}>
      {children}
    </ThemeContext.Provider>
  );
}
