"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { getTimelineCopy } from "@/i18n/home-timeline-copy";
import { useI18n } from "@/i18n/LanguageContext";

function TimelineSection({
  children,
}: {
  index?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[var(--photo-divider)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-none px-5 sm:px-6 lg:px-8 xl:px-10">
        {children}
      </div>
    </section>
  );
}

export function HomeTimeline() {
  const { locale } = useI18n();
  const tl = getTimelineCopy(locale);

  return (
    <div className="home-timeline">
      <TimelineSection index="01" title={tl.strategy}>
        <Reveal>
          <h3 className="font-display max-w-none text-[1.65rem] font-light leading-tight text-photo sm:text-3xl lg:text-4xl">
            {tl.strategyH}
          </h3>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-photo-muted sm:text-lg">
            {tl.strategyP}
          </p>
        </Reveal>
      </TimelineSection>

      <TimelineSection index="02" title={tl.engineering}>
        <Reveal>
          <p className="font-mono-label text-photo-dim">{tl.indLabel}</p>
          <h3 className="font-display mt-3 text-2xl font-light text-photo sm:text-3xl">
            {tl.indTitle}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-photo-muted sm:text-base">
            {tl.indSub}
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delayMs={60}>
            <div className="glass glass-hover flex h-full min-h-[18rem] flex-col rounded-2xl p-8">
              <h4 className="font-display text-2xl font-light text-[var(--color-text)]">
                Upstream
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {tl.upstreamDesc}
              </p>
              <ul className="mt-7 flex flex-1 flex-col">
                {tl.upstream.map((item) => (
                  <li
                    key={item}
                    className="py-3 text-sm text-[var(--color-muted)]"
                    style={{ borderTop: "1px solid var(--color-border)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="glass glass-hover flex h-full min-h-[18rem] flex-col rounded-2xl p-8">
              <h4 className="font-display text-2xl font-light text-[var(--color-text)]">
                Midstream
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {tl.midstreamDesc}
              </p>
              <ul className="mt-7 flex flex-1 flex-col">
                {tl.midstream.map((item) => (
                  <li
                    key={item}
                    className="py-3 text-sm text-[var(--color-muted)]"
                    style={{ borderTop: "1px solid var(--color-border)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delayMs={180}>
            <div className="glass glass-hover flex h-full min-h-[18rem] flex-col rounded-2xl p-8 sm:col-span-2 lg:col-span-1">
              <h4 className="font-display text-2xl font-light text-[var(--color-text)]">
                Downstream
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {tl.downstreamDesc}
              </p>
              <ul className="mt-7 flex flex-1 flex-col">
                {tl.downstream.map((item) => (
                  <li
                    key={item}
                    className="py-3 text-sm text-[var(--color-muted)]"
                    style={{ borderTop: "1px solid var(--color-border)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="surface-band mt-10 rounded-2xl px-6 py-8 sm:px-8 sm:py-10">
          <Reveal delayMs={80}>
            <p className="font-mono-label text-[var(--color-dim)]">{tl.etLabel}</p>
            <h3 className="font-display mt-3 max-w-2xl text-2xl font-light leading-tight text-[var(--color-text)] sm:text-3xl">
              {tl.etTitle}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              {tl.etSub}
            </p>
          </Reveal>
          <ul className="mt-8 grid items-stretch gap-3 sm:grid-cols-2">
            {tl.etTiles.map((item, idx) => (
              <li key={item.name} className="flex">
                <Reveal delayMs={idx * 50} className="w-full">
                  <div className="glass glass-hover flex h-full min-h-[5.5rem] flex-col rounded-xl px-6 py-5">
                    <h4 className="font-medium text-[var(--color-text)]">{item.name}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                      {item.detail}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </TimelineSection>

      <TimelineSection index="03" title={tl.procurement}>
        <Reveal>
          <h3 className="font-display text-2xl font-light text-photo sm:text-3xl">
            {tl.capTitle}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-photo-muted">
            {tl.capSub}
          </p>
          <div className="mt-4">
            <Link
              href="/services"
              className="nav-link-slide inline-flex text-sm font-medium text-photo"
            >
              {tl.exploreServices}
            </Link>
          </div>
        </Reveal>
        <ul className="mt-10 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tl.caps.map((tile, idx) => (
            <li key={tile.title} className="flex min-h-[10rem]">
              <Reveal delayMs={idx * 70} className="w-full">
                <Link
                  href={tile.href}
                  className="glass glass-hover flex h-full w-full min-h-[10rem] flex-col justify-between rounded-2xl p-6 transition-colors"
                >
                  <h4 className="font-display text-xl font-light leading-snug text-[var(--color-text)]">
                    {tile.title}
                  </h4>
                  <p className="font-mono-label mt-4 text-[var(--color-dim)]">{tile.hint}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </TimelineSection>

      <TimelineSection index="04" title={tl.execution}>
        <Reveal>
          <p className="font-mono-label text-photo-dim">{tl.whyLabel}</p>
          <h3 className="font-display mt-3 text-2xl font-light text-photo sm:text-3xl">
            {tl.diffTitle}
          </h3>
        </Reveal>
        <ul className="mt-8 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tl.diffs.map((d, idx) => (
            <li key={d.title} className="flex min-h-[14rem]">
              <Reveal delayMs={idx * 70} className="w-full">
                <div className="glass flex h-full min-h-[14rem] flex-col rounded-2xl p-6">
                  <h4 className="font-display text-xl font-light leading-snug text-[var(--color-text)]">
                    {d.title}
                  </h4>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                    {d.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="surface-band mt-12 rounded-2xl px-6 py-8 sm:px-8 sm:py-10">
          <Reveal>
            <p className="font-mono-label text-[var(--color-dim)]">{tl.clientsLabel}</p>
            <h3 className="font-display mt-3 text-2xl font-light text-[var(--color-text)] sm:text-3xl">
              {tl.whoTitle}
            </h3>
          </Reveal>
          <ul className="mt-8 grid items-stretch gap-4 lg:grid-cols-3">
            {tl.audiences.map((a, idx) => (
              <li key={a.title} className="flex min-h-[12rem]">
                <Reveal delayMs={idx * 80} className="w-full">
                  <div className="glass glass-hover flex h-full min-h-[12rem] flex-col rounded-2xl p-8">
                    <h4 className="font-display text-2xl font-light text-[var(--color-text)]">
                      {a.title}
                    </h4>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                      {a.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </TimelineSection>

      <TimelineSection index="05" title={tl.commissioning}>
        <Reveal>
          <p className="font-mono-label text-photo-dim">{tl.globalLabel}</p>
          <h3 className="font-display mt-3 text-2xl font-light text-photo sm:text-3xl">
            {tl.globalTitle}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-photo-muted">
            {tl.globalP}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {tl.regions.map((region) => (
              <span
                key={region}
                className="glass rounded-full px-4 py-1.5 font-mono-label text-sm text-photo-muted"
              >
                {region}
              </span>
            ))}
          </div>
        </Reveal>

        <div
          className="surface-band mt-12 rounded-2xl px-6 py-10 sm:px-10 sm:py-12"
          style={{ border: "1px solid var(--photo-divider)" }}
        >
          <Reveal delayMs={60}>
            <h3 className="font-display max-w-none text-2xl font-light leading-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
              {tl.ctaTitle}
            </h3>
            <p className="mt-5 max-w-xl text-base text-[var(--color-muted)]">{tl.ctaSub}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <Link href="/contact" className="btn-pill btn-pill--accent w-fit">
                {tl.ctaDiscuss}
              </Link>
              <Link href="/services" className="btn-pill w-fit">
                {tl.ctaView}
              </Link>
            </div>
          </Reveal>
        </div>
      </TimelineSection>
    </div>
  );
}
