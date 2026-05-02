import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { HomeTimeline } from "@/components/HomeTimeline";
import { Reveal } from "@/components/Reveal";

const upstream = [
  "Separation, desalting & stabilization",
  "Sweetening and dehydration",
  "Process studies and optimization",
  "Pumping, compression and storage",
];

const downstream = [
  "Gas processing",
  "Oil refining (licensed and open-art)",
  "Utilities and offsites",
  "LNG and renewables integration",
];

const capabilityTiles = [
  { title: "Separation & treating", href: "/services#upstream", hint: "Upstream" },
  { title: "Refining & conversion", href: "/services#downstream", hint: "Downstream" },
  { title: "Utilities & offsites", href: "/services#downstream", hint: "Balance of plant" },
  { title: "Studies & optimization", href: "/services#upstream", hint: "Technical basis" },
];

const scopeCards = [
  { title: "Gas treating & NGL", subtitle: "Recovery, treating, conditioning" },
  { title: "Crude separation", subtitle: "Desalting, stabilization, export" },
  { title: "Refining integration", subtitle: "Units, yields, licensor interfaces" },
  { title: "Steam & power balance", subtitle: "Utilities tied to process limits" },
  { title: "Debottleneck studies", subtitle: "Sensitivity and investment gates" },
];

function SectionLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="nav-link-slide text-sm font-medium text-[var(--color-text)]"
    >
      {label}
    </Link>
  );
}

export default function Home() {
  return (
    <div>
      <HomeHero />

      {/* About strip */}
      <section
        className="surface-band relative py-20 sm:py-28"
        style={{ borderTop: "1px solid var(--photo-divider)" }}
      >
        <span
          className="section-index absolute right-4 top-12 -z-0 opacity-[0.35] sm:right-8 lg:right-12"
          aria-hidden
        >
          02
        </span>
        <Reveal
          delayMs={80}
          className="relative z-[1] mx-auto grid w-full max-w-none gap-12 px-5 sm:grid-cols-2 sm:items-end sm:px-6 lg:gap-20 lg:px-8 xl:px-10"
        >
          <div>
            <h2 className="font-display text-3xl font-light text-[var(--color-text)] sm:text-4xl lg:text-5xl">
              About Oil &amp; Gas Processing
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              We bring complex facilities to life through sound process
              definition and disciplined documentation. Trusted by teams who
              demand precision, accountability, and care through every project
              phase.
            </p>
          </div>
          <div className="sm:flex sm:justify-end sm:pb-1">
            <SectionLink href="/about" label="Who we are" />
          </div>
        </Reveal>
      </section>

      <HomeTimeline />

      {/* Capabilities */}
      <section
        className="py-20 sm:py-28"
        style={{ borderTop: "1px solid var(--photo-divider)" }}
      >
        <div className="mx-auto w-full max-w-none px-5 sm:px-6 lg:px-8 xl:px-10">
          <Reveal>
            <h2 className="font-display text-3xl font-light sm:text-4xl text-photo">
              Service areas
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-photo-muted">
              Our work is defined by technical depth, clear communication, and
              deliverables that survive review — from concept through
              construction support.
            </p>
            <div className="mt-4">
              <Link
                href="/services"
                className="nav-link-slide inline-flex text-sm font-medium text-photo"
              >
                Service overview →
              </Link>
            </div>
          </Reveal>

          <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilityTiles.map((tile, idx) => (
              <li key={tile.title}>
                <Reveal delayMs={idx * 70}>
                  <Link
                    href={tile.href}
                    className="glass glass-hover flex min-h-[9rem] flex-col justify-between rounded-2xl p-6 transition-colors"
                  >
                    <h3 className="font-display text-xl font-light text-[var(--color-text)]">
                      {tile.title}
                    </h3>
                    <p className="font-mono-label mt-4 text-[var(--color-dim)]">
                      {tile.hint}
                    </p>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Office */}
      <section
        className="surface-band py-20 sm:py-28"
        style={{ borderTop: "1px solid var(--photo-divider)" }}
      >
        <Reveal className="mx-auto w-full max-w-none px-5 sm:px-6 lg:px-8 xl:px-10">
          <h2 className="font-display text-3xl font-light text-[var(--color-text)] sm:text-4xl">
            Office
          </h2>
          <p className="mt-4 max-w-md text-base text-[var(--color-muted)]">
            A base for process support, studies, and project coordination.
          </p>
          <p className="font-mono-label mt-10 text-[var(--color-dim)]">
            Address
          </p>
          <address className="mt-2 not-italic text-base leading-relaxed text-[var(--color-text)]">
            14015 Park Dr Ste 109
            <br />
            Tomball, TX 77377
            <br />
            United States
          </address>
          <p className="mt-3 text-sm text-[var(--color-muted)]">
            <a href="mailto:info@ogprocess.com" className="nav-link-slide">info@ogprocess.com</a>
          </p>
          <div className="mt-10">
            <SectionLink href="/contact" label="Get in touch →" />
          </div>
        </Reveal>
      </section>

      {/* Core specialties */}
      <section style={{ borderTop: "1px solid var(--photo-divider)" }}>
        <div className="mx-auto w-full max-w-none px-5 py-20 sm:px-6 sm:py-24 lg:px-8 xl:px-10">
          <Reveal>
            <p className="font-mono-label text-photo-dim">
              Upstream &amp; downstream
            </p>
            <h2 className="font-display mt-4 text-3xl font-light sm:text-4xl text-photo">
              Core specialties
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <Reveal delayMs={60}>
              <div className="glass glass-hover rounded-2xl p-8">
                <h3 className="font-display text-2xl font-light text-[var(--color-text)]">
                  Upstream
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  Facilities close to the wellhead — where reliability sets the
                  tone for everything downstream.
                </p>
                <ul className="mt-7">
                  {upstream.map((item) => (
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
              <div className="glass glass-hover rounded-2xl p-8">
                <h3 className="font-display text-2xl font-light text-[var(--color-text)]">
                  Downstream
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  Conversion, treating, and balance-of-plant — where integration
                  across units and utilities matters most.
                </p>
                <ul className="mt-7">
                  {downstream.map((item) => (
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
        </div>
      </section>

      {/* Representative scope rail */}
      <section
        className="py-16 sm:py-24"
        style={{ borderTop: "1px solid var(--photo-divider)" }}
      >
        <div className="mx-auto w-full max-w-none px-5 sm:px-6 lg:px-8 xl:px-10">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-display text-3xl font-light sm:text-4xl text-photo">
                  Representative scope
                </h2>
                <p className="mt-3 max-w-lg text-sm text-photo-muted">
                  Each engagement reflects a distinct mix of process,
                  interfaces, and schedule — here is how work often clusters.
                </p>
              </div>
              <Link
                href="/services"
                className="nav-link-slide shrink-0 text-sm font-medium text-photo"
              >
                View projects →
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delayMs={100} className="block">
          <div className="scope-rail mt-12 flex gap-4 overflow-x-auto px-5 pb-2 sm:px-6 lg:px-8 xl:px-10">
            {scopeCards.map((card) => (
              <article
                key={card.title}
                className="glass scope-card shrink-0 snap-start rounded-2xl p-8"
              >
                <h3 className="font-display text-xl font-light text-[var(--color-text)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-muted)]">
                  {card.subtitle}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Closing */}
      <section
        className="surface-band py-20 sm:py-28"
        style={{ borderTop: "1px solid var(--photo-divider)" }}
      >
        <Reveal className="mx-auto w-full max-w-none px-5 sm:px-6 lg:px-8 xl:px-10">
          <h2 className="font-display max-w-none text-3xl font-light leading-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
            Where vision meets execution
          </h2>
          <p className="mt-6 max-w-xl text-base text-[var(--color-muted)]">
            Every great build begins with understanding scope, interfaces, and
            risk. We help you get the process narrative right before capital
            commits.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <Link href="/about" className="btn-pill w-fit">
              Our approach
            </Link>
            <Link href="/contact" className="btn-pill w-fit">
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
