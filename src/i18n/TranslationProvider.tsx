"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";

type Dict = Record<string, any>;

const LOCALES: Record<string, Dict> = {
  en,
  es,
  fr,
};

type I18nContextType = {
  lang: string;
  setLang: (l: string) => void;
  t: (path: string, vars?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getValue(dict: Dict, path: string): any {
  const parts = path.split(".");
  let cur: any = dict;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in cur) cur = cur[p];
    else return undefined;
  }
  return cur;
}

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<string>(() => {
    try {
      const stored = localStorage.getItem("tranquility_lang");
      return stored ?? "en";
    } catch (e) {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("tranquility_lang", lang);
    } catch (e) {}
  }, [lang]);

  const setLang = (l: string) => setLangState(l);

  const dict = LOCALES[lang] ?? LOCALES["en"];

  const t = (path: string, vars?: Record<string, string | number>) => {
    const raw = getValue(dict, path) ?? getValue(LOCALES["en"], path) ?? path;
    if (!vars) return String(raw);
    let s = String(raw);
    for (const k of Object.keys(vars)) {
      s = s.replace(new RegExp(`\\{${k}\\}`, "g"), String(vars[k]));
    }
    return s;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used within TranslationProvider");
  return ctx;
}

export default TranslationProvider;
