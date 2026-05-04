import { writable } from "svelte/store";
import en from "./translations/en";
import nl from "./translations/nl";
import zh from "./translations/zh";

export type Language = "en" | "nl" | "zh";
export type TranslationSchema = typeof en;

/** Same keys as `en`; localized strings differ by language. */
export const translations: Record<Language, TranslationSchema> = {
  en,
  nl: nl as unknown as TranslationSchema,
  zh: zh as unknown as TranslationSchema,
};

function createLanguageStore() {
  const { subscribe, set } = writable<Language>("en");

  return {
    subscribe,
    setLanguage: (lang: Language) => set(lang),
    getLanguages: () => (["en", "nl", "zh"] as const),
  };
}

export const currentLanguage = createLanguageStore();

export function t(path: string, lang: Language = "en"): string {
  const keys = path.split(".");
  let value: any = translations[lang];

  for (const key of keys) {
    value = value?.[key];
  }

  return value || path;
}

export function getTranslation(path: string, lang: Language): string {
  return t(path, lang);
}
