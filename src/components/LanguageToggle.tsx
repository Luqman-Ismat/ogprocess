"use client";

import { useI18n } from "@/i18n/LanguageContext";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();
  return (
    <div
      className="flex items-center rounded-full border border-[var(--photo-divider)] p-0.5"
      role="group"
      aria-label="Language"
    >
      {(["en", "es"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`rounded-full px-2.5 py-1 font-mono-label text-[0.65rem] transition-colors ${
            locale === code
              ? "bg-[rgba(255,255,255,0.12)] text-[#F7F5F2]"
              : "text-[rgba(247,245,242,0.45)] hover:text-[rgba(247,245,242,0.75)]"
          }`}
          aria-pressed={locale === code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
