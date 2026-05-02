"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Logo } from "@/components/Logo";
import { useI18n } from "@/i18n/LanguageContext";
import { supabase } from "@/lib/supabase";

export function HubTopBar() {
  const { t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const onDashboard = pathname.startsWith("/hub/dashboard");

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/hub");
    router.refresh();
  }

  return (
    <header
      className="site-chrome-panel sticky top-0 z-50 border-b"
      style={{ borderBottom: "1px solid var(--photo-divider)" }}
    >
      <div className="mx-auto flex h-14 w-full max-w-none items-center justify-between gap-4 px-5 sm:h-16 sm:px-6 lg:px-8 xl:px-10">
        <Link
          href={onDashboard ? "/hub/dashboard" : "/hub"}
          className="group flex min-w-0 items-center gap-3"
          aria-label={t("hub.hubHome")}
        >
          <Logo size="md" />
          <span className="font-mono-label hidden text-[var(--photo-label)] sm:inline">
            {t("hub.topLabel")}
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <LanguageToggle />
          <Link
            href="/"
            className="nav-link-slide text-sm text-[var(--photo-muted)] transition-colors hover:text-[var(--photo-text)]"
          >
            {t("hub.companySite")}
          </Link>
          {onDashboard && (
            <button
              type="button"
              onClick={signOut}
              className="btn-pill btn-pill--outline text-xs sm:text-sm"
            >
              {t("hub.signOut")}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
