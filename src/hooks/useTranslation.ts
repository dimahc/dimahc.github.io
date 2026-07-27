"use client";

import { useLanguage } from "@/context";
import { formatDate, formatNumber, t, tArray, tNamespace } from "@/lib/i18n";
import { useCallback } from "react";

export function useTranslation() {
  const { language } = useLanguage();

  const translate = useCallback(
    (key: string, params?: Record<string, string | number>) => {
      return t(language, key, params);
    },
    [language]
  );

  const translateArray = useCallback(
    (key: string) => {
      return tArray(language, key);
    },
    [language]
  );

  const translateNamespace = useCallback(
    <T = any>(namespace: string): T => {
      return tNamespace<T>(language, namespace);
    },
    [language]
  );

  const formatDateLocale = useCallback(
    (date: Date, options?: Intl.DateTimeFormatOptions) => {
      return formatDate(date, language, options);
    },
    [language]
  );

  const formatNumberLocale = useCallback(
    (num: number, options?: Intl.NumberFormatOptions) => {
      return formatNumber(num, language, options);
    },
    [language]
  );

  return {
    t: translate,
    tArray: translateArray,
    tNamespace: translateNamespace,
    formatDate: formatDateLocale,
    formatNumber: formatNumberLocale,
    language,
  };
}
