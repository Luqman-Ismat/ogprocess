"use client";

import { ContactForm } from "@/components/ContactForm";
import { useI18n } from "@/i18n/LanguageContext";

export function ContactPageView() {
  const { t } = useI18n();
  return (
    <div className="mx-auto w-full max-w-none px-5 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="font-mono-label text-photo-dim">{t("contactPage.label")}</p>
          <h1 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl text-photo">
            {t("contactPage.title")}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-photo-muted">{t("contactPage.intro")}</p>

          <div className="mt-12 space-y-8 text-sm">
            <div>
              <p className="font-mono-label text-photo-dim">{t("contactPage.address")}</p>
              <p className="mt-3 leading-relaxed text-photo-muted">
                14015 Park Dr Ste 109<br />
                Tomball, TX 77377<br />
                {t("contactPage.country")}
              </p>
            </div>
            <div>
              <p className="font-mono-label text-photo-dim">{t("contactPage.phone")}</p>
              <a href="tel:+18327364832" className="nav-link-slide mt-3 inline-block text-photo">
                +1 832 736 4832
              </a>
            </div>
            <div>
              <p className="font-mono-label text-photo-dim">{t("contactPage.email")}</p>
              <a href="mailto:info@ogprocess.com" className="nav-link-slide mt-3 inline-block text-photo">
                info@ogprocess.com
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
