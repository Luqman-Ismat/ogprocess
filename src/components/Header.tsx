"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Logo } from "@/components/Logo";
import { useI18n } from "@/i18n/LanguageContext";

function navItems(t: (k: string) => string) {
  return [
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/hub", label: t("nav.hub") },
  ];
}

export function Header() {
  const { t } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const nav = navItems(t);
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(900);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onResize = () => setVh(window.innerHeight);
    onResize();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const overlayOnHero = pathname === "/" && scrollY < vh * 0.72;

  const linkMuted = "text-[rgba(247,245,242,0.6)] hover:text-[#F7F5F2]";
  const linkActive = "text-[#F7F5F2]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        overlayOnHero ? "" : "site-chrome-panel"
      }`}
      style={
        overlayOnHero
          ? {
              background: "transparent",
              borderBottom: "1px solid transparent",
            }
          : {
              borderBottom: "1px solid var(--photo-divider)",
            }
      }
    >
      <div className="mx-auto flex h-14 w-full max-w-none items-center justify-between px-5 sm:h-16 sm:px-6 lg:px-8 xl:px-10">
        <Link
          href="/"
          className="group flex items-center rounded outline-offset-4"
          aria-label="Oil & Gas Processing, LLC — Home"
          onClick={() => setOpen(false)}
        >
          <Logo variant="header" interactive inverted />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          <LanguageToggle />
          {nav.map(({ href, label }) => {
            const active =
              pathname === href ||
              (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`nav-link-slide text-sm font-medium transition-colors ${
                  active ? linkActive : linkMuted
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-pill btn-pill--outline">
            {t("nav.getInTouch")}
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center text-[rgba(247,245,242,0.75)] transition-colors hover:text-[#F7F5F2] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t backdrop-blur-xl"
          style={{
            borderColor: "var(--photo-divider)",
            background: "rgba(5, 4, 3, 0.92)",
          }}
        >
          <nav className="flex flex-col px-5 py-3" aria-label="Mobile">
            <div className="border-b border-[var(--photo-divider)] py-3.5">
              <LanguageToggle />
            </div>
            {nav.map(({ href, label }) => {
              const active =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-[var(--photo-divider)] py-3.5 text-sm font-medium ${
                    active ? linkActive : "text-[rgba(247,245,242,0.65)]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-pill btn-pill--outline mt-4 w-fit"
            >
              {t("nav.getInTouch")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
