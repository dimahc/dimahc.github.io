import enTranslations from "@/locales/en.json";
import frTranslations from "@/locales/fr.json";
import type { Language } from "@/types";

type TranslationKey = string;
type TranslationParams = Record<string, string | number>;

const translations = {
  en: enTranslations,
  fr: frTranslations,
} as const;

/**
 * Get nested value from object using dot notation
 * Example: getValue({ a: { b: 'value' } }, 'a.b') returns 'value'
 */
function getValue(obj: any, path: string): string | undefined {
  return path.split(".").reduce((current, key) => current?.[key], obj);
}

/**
 * Replace placeholders in translation strings
 * Example: interpolate('Hello {{name}}', { name: 'John' }) returns 'Hello John'
 */
function interpolate(template: string, params?: TranslationParams): string {
  if (!params) return template;

  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return params[key]?.toString() || `{{${key}}}`;
  });
}

/**
 * Get translation for a given key and language
 * Supports dot notation for nested keys
 * Supports interpolation with parameters
 *
 * @example
 * t('en', 'hero.title') // Returns "Backend Software Engineer"
 * t('en', 'common.copyright', { year: 2024, name: 'John' }) // Returns "© 2024 John. All rights reserved."
 */
export function t(
  language: Language,
  key: TranslationKey,
  params?: TranslationParams
): string {
  const translation = getValue(translations[language], key);

  if (!translation) {
    console.warn(`Translation missing: ${language}.${key}`);
    return key;
  }

  return interpolate(translation, params);
}

/**
 * Get array of translations for a given key
 * Useful for lists like paragraphs, items, etc.
 */
export function tArray(language: Language, key: TranslationKey): string[] {
  const value = getValue(translations[language], key);

  if (!Array.isArray(value)) {
    console.warn(`Translation not an array: ${language}.${key}`);
    return [];
  }

  return value;
}

/**
 * Get all translations for a specific namespace
 * Useful for getting entire sections at once
 */
export function tNamespace<T = any>(language: Language, namespace: string): T {
  const value = getValue(translations[language], namespace);

  if (!value || typeof value !== "object") {
    console.warn(`Translation namespace not found: ${language}.${namespace}`);
    return {} as T;
  }

  return value as T;
}

/**
 * Check if a translation key exists
 */
export function hasTranslation(
  language: Language,
  key: TranslationKey
): boolean {
  return getValue(translations[language], key) !== undefined;
}

/**
 * Get the current locale string (e.g., 'en-US', 'fr-FR')
 */
export function getLocale(language: Language): string {
  const localeMap: Record<Language, string> = {
    en: "en-US",
    fr: "fr-FR",
  };
  return localeMap[language];
}

/**
 * Format date according to locale
 */
export function formatDate(
  date: Date,
  language: Language,
  options?: Intl.DateTimeFormatOptions
): string {
  return new Intl.DateTimeFormat(getLocale(language), options).format(date);
}

/**
 * Format number according to locale
 */
export function formatNumber(
  num: number,
  language: Language,
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(getLocale(language), options).format(num);
}
