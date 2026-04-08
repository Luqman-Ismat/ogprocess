"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DISCIPLINES,
  ENERGY_TRANSITION,
  INDUSTRY_COVERAGE,
  SERVICE_PILLARS,
  pillarImage,
} from "@/i18n/services-data";
import { useI18n } from "@/i18n/LanguageContext";

export function ServicesPageView() {
  const { locale, t } = useI18n();
  const sections = SERVICE_PILLARS[locale];
  const energyTransition = ENERGY_TRANSITION[locale];
  const industryCoverage = INDUSTRY_COVERAGE[locale];
  const disciplines = DISCIPLINES[locale];

  return (
    <div className="mx-auto w-full max-w-none px-5 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
      <p className="font-mono-label text-photo-dim">{t("servicesPage.label")}</p>
      <h1 className="font-display mt-5 max-w-2xl text-4xl sm:text-5xl lg:text-6xl text-photo">
        {t("servicesPage.title")}
      </h1>
      <p className="mt-5 max-w-xl text-base text-photo-muted">{t("servicesPage.intro")}</p>

      <div className="mt-16 space-y-20">
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid var(--color-border)" }}>
              <div className="relative h-56 w-full overflow-hidden sm:h-64">
                <Image
                  src={pillarImage(section.id)}
                  alt={section.imageAlt}
                  fill
                  unoptimized
                  className="object-cover"
                  style={{ opacity: 0.85 }}
                  sizes="(max-width: 1152px) 100vw, 1152px"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(18,15,12,0.75) 0%, rgba(18,15,12,0.25) 60%, transparent 100%)",
                  }}
                  aria-hidden
                />
                <div className="absolute bottom-0 left-0 p-8">
                  <h2 className="font-display text-3xl" style={{ color: "#F7F5F2" }}>
                    {section.title}
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed" style={{ color: "rgba(247,245,242,0.65)" }}>
                    {section.intro}
                  </p>
                </div>
              </div>
            </div>

            <ul className="mt-3 grid items-stretch gap-3 sm:grid-cols-2">
              {section.items.map((item) => (
                <li key={item.name} className="flex">
                  <div className="glass glass-hover flex min-h-full w-full flex-col rounded-xl px-6 py-5">
                    <h3 className="font-medium text-[var(--color-text)]">{item.name}</h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section id="energy-transition" className="mt-24">
        <div
          className="surface-band rounded-2xl px-6 py-10 sm:px-10 sm:py-12"
          style={{ border: "1px solid var(--photo-divider)" }}
        >
          <p className="font-mono-label text-[var(--color-dim)]">{t("servicesPage.energyLabel")}</p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-light leading-tight text-[var(--color-text)] sm:text-4xl">
            {t("servicesPage.energyTitle")}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            {t("servicesPage.energyIntro")}
          </p>
          <ul className="mt-10 grid items-stretch gap-3 sm:grid-cols-2">
            {energyTransition.map((item) => (
              <li key={item.name} className="flex">
                <div className="glass glass-hover flex min-h-full w-full flex-col rounded-xl px-6 py-5">
                  <h3 className="font-medium text-[var(--color-text)]">{item.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="industry" className="mt-24">
        <p className="font-mono-label text-photo-dim">{t("servicesPage.industryLabel")}</p>
        <h2 className="font-display mt-4 text-3xl font-light sm:text-4xl text-photo">
          {t("servicesPage.industryTitle")}
        </h2>
        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-3">
          {industryCoverage.map((col) => (
            <div key={col.sector} className="glass glass-hover flex h-full min-h-[16rem] flex-col rounded-2xl p-8">
              <h3 className="font-display text-2xl font-light text-[var(--color-text)]">{col.sector}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{col.desc}</p>
              <ul className="mt-6 flex flex-1 flex-col">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="py-2.5 text-sm text-[var(--color-muted)]"
                    style={{ borderTop: "1px solid var(--color-border)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <p className="font-mono-label text-photo-dim">{t("servicesPage.disciplinesLabel")}</p>
        <ul className="mt-6 grid gap-y-2 gap-x-8 sm:grid-cols-2 text-sm text-photo-muted">
          {disciplines.map((d) => (
            <li key={d} className="py-2" style={{ borderTop: "1px solid var(--photo-divider)" }}>
              {d}
            </li>
          ))}
        </ul>
      </section>

      <div
        className="surface-band mt-20 rounded-2xl px-10 py-12"
        style={{ border: "1px solid var(--photo-divider)" }}
      >
        <p className="font-display text-xl font-light italic text-[var(--color-muted)] sm:text-2xl">
          {t("servicesPage.ctaLead")}
        </p>
        <Link href="/contact" className="btn-pill btn-pill--accent mt-6 inline-flex">
          {t("servicesPage.ctaBtn")}
        </Link>
      </div>
    </div>
  );
}
