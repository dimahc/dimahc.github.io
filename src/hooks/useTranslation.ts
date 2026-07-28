"use client";

import { useParams } from "next/navigation";
import { formatDate, formatNumber, t, tArray, tNamespace } from "@/lib/i18n";
import { useCallback } from "react";

export function useTranslation() {
  const params = useParams();
  const locale = (params?.locale as 'en' | 'fr') || 'fr';

  const translate = useCallback(
    (key: string, params?: Record<string, string | number>) => {
      return t(locale, key, params);
    },
    [locale]
  );

  const translateArray = useCallback(
    (key: string) => {
      return tArray(locale, key);
    },
    [locale]
  );

  const translateNamespace = useCallback(
    <T = any>(namespace: string): T => {
      return tNamespace<T>(locale, namespace);
    },
    [locale]
  );

  const formatDateLocale = useCallback(
    (date: Date, options?: Intl.DateTimeFormatOptions) => {
      return formatDate(date, locale, options);
    },
    [locale]
  );

  const formatNumberLocale = useCallback(
    (num: number, options?: Intl.NumberFormatOptions) => {
      return formatNumber(num, locale, options);
    },
    [locale]
  );

  return {
    t: translate,
    tArray: translateArray,
    tNamespace: translateNamespace,
    formatDate: formatDateLocale,
    formatNumber: formatNumberLocale,
    language: locale,
  };
}
