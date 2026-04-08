"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/i18n/LanguageContext";

export function AboutPageView() {
  const { t } = useI18n();
  return (
    <div className="mx-auto w-full max-w-none px-5 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
      <div
        className="overflow-hidden rounded-2xl"
        style={{ border: "1px solid var(--photo-divider)" }}
      >
        <div className="relative h-56 w-full sm:h-64">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/8/87/Satorp_Refinery_night_view.jpg"
            alt={t("about.imageAlt")}
            fill
            unoptimized
            className="object-cover"
            style={{ opacity: 0.88 }}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </div>

      <p className="font-mono-label mt-12 text-photo-dim">{t("about.label")}</p>
      <h1 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl text-photo">
        {t("about.headline")}
      </h1>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-photo-muted">
        <p className="text-photo">{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        <div className="glass rounded-2xl p-8">
          <p className="font-mono-label text-photo-dim">{t("about.missionL")}</p>
          <p className="mt-4 font-display text-xl font-light text-photo">{t("about.mission")}</p>
        </div>
        <div className="glass rounded-2xl p-8">
          <p className="font-mono-label text-photo-dim">{t("about.visionL")}</p>
          <p className="mt-4 font-display text-xl font-light text-photo">{t("about.vision")}</p>
        </div>
      </div>

      <section className="mt-16" aria-labelledby="global-experience-heading">
        <h2 id="global-experience-heading" className="font-display text-2xl font-light text-photo sm:text-3xl">
          {t("about.globalTitle")}
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-photo-muted">
          <p>{t("about.globalP1")}</p>
          <p>{t("about.globalP2")}</p>
        </div>
      </section>

      <section className="glass mt-16 rounded-2xl p-8 sm:p-10" aria-labelledby="who-we-are-heading">
        <h2
          id="who-we-are-heading"
          className="font-display text-2xl font-light text-[var(--color-text)] sm:text-3xl"
        >
          {t("about.whoTitle")}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)]">{t("about.whoP")}</p>
      </section>

      <section className="mt-16" aria-labelledby="standards-heading">
        <h2 id="standards-heading" className="font-display text-2xl font-light text-photo sm:text-3xl">
          {t("about.standardsTitle")}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-photo-muted">{t("about.standardsP")}</p>
      </section>

      <Link href="/services" className="nav-link-slide mt-14 inline-flex text-sm font-medium text-photo">
        {t("about.explore")}
      </Link>
    </div>
  );
}
