import { writable } from "svelte/store";
import en from "./translations/en";
import nl from "./translations/nl";
import zh from "./translations/zh";

export type Language = "en" | "nl" | "zh";
export type TranslationSchema = typeof en;

export const translations: Record<Language, TranslationSchema> = {
  en,
  nl,
  zh,
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
