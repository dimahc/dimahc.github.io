"use client";

import { DEFAULT_LANGUAGE } from "@/lib/constants";
import type { Language } from "@/types";
import { useCallback, useState } from "react";

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === "en" ? "fr" : "en"));
  }, []);

  return { language, setLanguage, toggleLanguage };
}
