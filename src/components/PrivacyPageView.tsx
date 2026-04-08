"use client";

import { useI18n } from "@/i18n/LanguageContext";

const POLICY_PDF =
  "https://ogprocess.com/uploads/1/2/4/3/124325986/ogp_privacy_policy.pdf";

export function PrivacyPageView() {
  const { t } = useI18n();
  return (
    <div className="mx-auto w-full max-w-none px-5 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
      <p className="font-mono-label text-photo-dim">{t("privacyPage.label")}</p>
      <h1 className="font-display mt-4 text-4xl tracking-tight sm:text-5xl text-photo">
        {t("privacyPage.title")}
      </h1>
      <div className="mt-10 space-y-6 leading-relaxed text-photo-muted">
        <p className="text-photo">{t("privacyPage.p1")}</p>
        <p>
          <a
            href={POLICY_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-photo underline-offset-2 hover:underline"
          >
            {t("privacyPage.download")}
          </a>
        </p>
      </div>
    </div>
  );
}
