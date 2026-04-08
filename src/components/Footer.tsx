"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer
      className="site-chrome-panel relative z-10"
      style={{
        borderTop: "1px solid var(--photo-divider)",
      }}
    >
      <div className="mx-auto w-full max-w-none px-5 py-7 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 text-sm text-[var(--photo-muted)]">
            <span>Oil &amp; Gas Processing, LLC</span>
            <span className="text-[var(--photo-muted)]">14015 Park Dr Ste 109, Tomball, TX 77377</span>
            <a href="tel:+18327364832" className="nav-link-slide transition-colors hover:text-[var(--photo-text)]">
              +1 832 736 4832
            </a>
            <a href="mailto:info@ogprocess.com" className="nav-link-slide transition-colors hover:text-[var(--photo-text)]">
              info@ogprocess.com
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-[var(--photo-dim)]">
            <Link href="/hub" className="nav-link-slide transition-colors hover:text-[var(--photo-muted)]">
              {t("footer.employeeHub")}
            </Link>
            <Link href="/privacy" className="nav-link-slide transition-colors hover:text-[var(--photo-muted)]">
              {t("footer.privacy")}
            </Link>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
