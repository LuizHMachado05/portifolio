import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const STORAGE_KEY = "portfolio-lang";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return "pt";
    return (localStorage.getItem(STORAGE_KEY) || "pt");
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (l) => setLangState(l === "en" ? "en" : "pt");
  const t = translations[lang] || translations.pt;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
