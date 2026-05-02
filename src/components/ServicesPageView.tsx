"use client";

import Image from "next/image";
import Link from "next/link";
import {
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

  return (
    <div className="mx-auto w-full max-w-none px-5 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
      <p className="font-mono-label text-photo-dim">{t("servicesPage.label")}</p>
      <h1 className="font-display mt-5 max-w-2xl text-4xl sm:text-5xl lg:text-6xl text-photo">
        {t("servicesPage.title")}
      </h1>
      <p className="mt-5 max-w-xl text-base text-photo-muted">{t("servicesPage.intro")}</p>

      <div className="mt-20 space-y-28">
        {sections.map((section, idx) => (
          <section key={section.id} id={section.id}>
            {/* Alternating image-left / image-right layout */}
            <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              {/* Text */}
              <div>
                <h2 className="font-display text-3xl font-light text-photo sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-photo-muted">
                  {section.intro}
                </p>
              </div>
              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl"
                style={{ border: "1px solid var(--color-border)" }}>
                <Image
                  src={pillarImage(section.id)}
                  alt={section.imageAlt}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{ background: "linear-gradient(135deg, rgba(9,21,37,0.35) 0%, transparent 60%)" }}
                  aria-hidden
                />
              </div>
            </div>

            {/* Service item cards */}
            <ul className="mt-8 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Energy Transition */}
      <section id="energy-transition" className="mt-28">
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
          <ul className="mt-10 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Industry Coverage */}
      <section id="industry" className="mt-28">
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

      {/* CTA */}
      <div
        className="surface-band mt-24 rounded-2xl px-10 py-12"
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
