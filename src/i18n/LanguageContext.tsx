"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { getNested, getString } from "@/i18n/get-nested";
import type { Locale } from "@/i18n/types";
import { UI_MESSAGES } from "@/i18n/ui-messages";

const STORAGE_KEY = "ogp-locale";

const listeners = new Set<() => void>();

function emitLocaleChange() {
  for (const fn of listeners) fn();
}

function subscribeLocale(callback: () => void) {
  listeners.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY || e.key === null) callback();
  };
  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }
  return () => {
    listeners.delete(callback);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
  };
}

function readLocaleFromStorage(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === "es" || s === "en") return s;
  } catch {
    /* ignore */
  }
  return "en";
}

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  ta: (path: string) => string[];
  raw: (path: string) => unknown;
};

const LanguageContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    readLocaleFromStorage,
    () => "en" as Locale,
  );

  useEffect(() => {
    document.documentElement.lang = locale === "es" ? "es" : "en";
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = next === "es" ? "es" : "en";
    emitLocaleChange();
  }, []);

  const tree = UI_MESSAGES[locale];

  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      setLocale,
      t: (path: string) => getString(tree, path, path),
      ta: (path: string) => {
        const v = getNested(tree, path);
        return Array.isArray(v) && v.every((x) => typeof x === "string")
          ? (v as string[])
          : [];
      },
      raw: (path: string) => getNested(tree, path),
    };
  }, [locale, setLocale, tree]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return ctx;
}

export function useOptionalI18n(): I18nContextValue | null {
  return useContext(LanguageContext);
}
