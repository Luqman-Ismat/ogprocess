"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useI18n } from "@/i18n/LanguageContext";

export function HomeHero() {
  const { t } = useI18n();
  return (
    <section className="relative z-10 flex min-h-[100dvh] flex-col justify-end">
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="scroll-cue flex flex-col items-center gap-2">
          <span
            className="font-mono-label"
            style={{ color: "rgba(247,245,242,0.45)" }}
          >
            {t("home.hero.scroll")}
          </span>
          <span
            className="block h-8 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(247,245,242,0.5), transparent)",
            }}
            aria-hidden
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-none px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 xl:px-10">
        <div className="max-w-none">
          <div className="hero-cascade hero-cascade-1">
            <Logo
              variant="header"
              inverted
              size="lg"
              wordmark="full"
              priority
            />
          </div>
          <h1
            className="hero-cascade hero-cascade-2 font-display mt-8 text-[2.35rem] font-light leading-[0.98] sm:text-5xl lg:text-[3.75rem] lg:leading-[0.98]"
            style={{ color: "#F7F5F2" }}
          >
            {t("home.hero.headline")}
          </h1>
          <p
            className="hero-cascade hero-cascade-3 mt-6 max-w-lg text-base leading-relaxed sm:text-lg"
            style={{ color: "rgba(247,245,242,0.58)" }}
          >
            {t("home.hero.sub")}
          </p>
          <div className="hero-cascade hero-cascade-4 mt-10 flex flex-wrap items-center gap-8">
            <Link href="/contact" className="btn-pill btn-pill--accent">
              {t("home.hero.discuss")}
            </Link>
            <Link
              href="/services"
              className="nav-link-slide text-sm font-medium"
              style={{ color: "#F7F5F2" }}
            >
              {t("home.hero.capabilities")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
