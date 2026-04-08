"use client";

import { useI18n } from "@/i18n/LanguageContext";

const MARK_SRC = "/brand/ogp-mark.png";
const MARK_W = 213;
const MARK_H = 252;

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
  interactive?: boolean;
  inverted?: boolean;
  size?: "md" | "lg";
  wordmark?: "abbrev" | "full";
  priority?: boolean;
};

export function Logo({
  variant = "header",
  className = "",
  interactive = false,
  inverted = false,
  size = "md",
  wordmark = "abbrev",
  priority = false,
}: LogoProps) {
  const { t } = useI18n();
  const isFooter = variant === "footer";
  const markClass =
    size === "lg"
      ? `max-h-[7.5rem] w-auto sm:max-h-36 lg:max-h-40 min-h-0 ${interactive ? "opacity-95 transition-opacity duration-200 group-hover:opacity-100" : ""}`
      : isFooter
        ? `h-7 w-auto max-w-[5.5rem] ${interactive ? "opacity-90 transition-opacity duration-200 group-hover:opacity-100" : ""}`
        : `h-10 w-auto max-w-[6.5rem] sm:h-11 sm:max-w-[7.5rem] ${interactive ? "opacity-95 transition-opacity duration-200 group-hover:opacity-100" : ""}`;
  const hoverClass = interactive ? " transition-opacity group-hover:opacity-100" : "";
  const titleClass = isFooter
    ? `font-display text-sm font-light text-[var(--color-text)]${hoverClass}`
    : `font-display text-base font-light ${inverted ? "text-[#F7F5F2]" : "text-[var(--color-text)]"}${hoverClass}`;

  const mark = (
    // eslint-disable-next-line @next/next/no-img-element -- reliable static asset; avoids Image optimizer edge cases
    <img
      src={MARK_SRC}
      alt={wordmark === "full" && size === "lg" ? t("logo.markAlt") : ""}
      width={MARK_W}
      height={MARK_H}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={`block shrink-0 object-contain object-left ${markClass}`}
    />
  );

  const gapClass = size === "lg" ? "gap-4 sm:gap-5" : "gap-2.5 sm:gap-3";
  const alignClass =
    wordmark === "full" && size === "lg"
      ? "flex-col items-start"
      : "items-center";

  if (wordmark === "full" && size === "lg") {
    return (
      <span className={`inline-flex ${alignClass} ${className}`}>
        {mark}
      </span>
    );
  }

  return (
    <span className={`inline-flex ${alignClass} ${gapClass} ${className}`}>
      {mark}
      <span className={`leading-none ${titleClass}`}>{t("logo.abbrev")}</span>
    </span>
  );
}
