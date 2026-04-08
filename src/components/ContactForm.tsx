"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";

const fieldBase: CSSProperties = {
  background: "rgba(0, 0, 0, 0.28)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "8px",
  padding: "0.75rem 1rem",
  width: "100%",
  fontSize: "0.875rem",
  color: "var(--photo-text)",
  outline: "none",
  transition: "border-color 0.2s ease, background 0.2s ease",
};

export function ContactForm() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const f = (key: string) => t(`contactPage.form.${key}`);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `OGP inquiry: ${String(data.get("topic") || "General")}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Company: ${data.get("company") || "—"}`,
        `Email: ${data.get("email")}`,
        `Project type: ${data.get("topic")}`,
        `Stage: ${data.get("stage")}`,
        `Geography / region: ${data.get("geography") || "—"}`,
        "",
        String(data.get("message") || ""),
      ].join("\n"),
    );
    window.location.href = `mailto:info@ogprocess.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="glass rounded-2xl p-8 sm:p-10">
      <h2 className="font-medium text-[var(--photo-text)]">{f("title")}</h2>
      <p className="mt-1.5 text-sm text-[var(--photo-muted)]">{f("sub")}</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="name" className="font-mono-label text-[var(--photo-dim)]">
            {f("name")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={f("namePh")}
            style={{ ...fieldBase, marginTop: "0.5rem" }}
            className="placeholder:text-[rgba(247,245,242,0.28)]"
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
              e.currentTarget.style.background = "rgba(0,0,0,0.38)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.background = "rgba(0,0,0,0.28)";
            }}
          />
        </div>
        <div>
          <label htmlFor="company" className="font-mono-label text-[var(--photo-dim)]">
            {f("company")}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={f("companyPh")}
            style={{ ...fieldBase, marginTop: "0.5rem" }}
            className="placeholder:text-[rgba(247,245,242,0.28)]"
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
              e.currentTarget.style.background = "rgba(0,0,0,0.38)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.background = "rgba(0,0,0,0.28)";
            }}
          />
        </div>
        <div>
          <label htmlFor="email" className="font-mono-label text-[var(--photo-dim)]">
            {t("contactPage.email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={f("emailPh")}
            style={{ ...fieldBase, marginTop: "0.5rem" }}
            className="placeholder:text-[rgba(247,245,242,0.28)]"
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
              e.currentTarget.style.background = "rgba(0,0,0,0.38)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.background = "rgba(0,0,0,0.28)";
            }}
          />
        </div>

        <div>
          <label htmlFor="topic" className="font-mono-label text-[var(--photo-dim)]">
            {f("projectType")}
          </label>
          <select
            id="topic"
            name="topic"
            style={{ ...fieldBase, marginTop: "0.5rem", cursor: "pointer" }}
            className="text-[var(--photo-text)]"
          >
            <option value="General inquiry">{f("optGeneral")}</option>
            <option value="Upstream / midstream / downstream">{f("optSector")}</option>
            <option value="Energy transition / renewables">{f("optTransition")}</option>
            <option value="EPC / execution support">{f("optEpc")}</option>
            <option value="Process study / optimization">{f("optStudy")}</option>
            <option value="Safety / compliance support">{f("optSafety")}</option>
            <option value="Other">{f("optOther")}</option>
          </select>
        </div>

        <div>
          <label htmlFor="stage" className="font-mono-label text-[var(--photo-dim)]">
            {f("stage")}
          </label>
          <select
            id="stage"
            name="stage"
            style={{ ...fieldBase, marginTop: "0.5rem", cursor: "pointer" }}
            className="text-[var(--photo-text)]"
          >
            <option value="Not sure / early concept">{f("stUnsure")}</option>
            <option value="Feasibility / pre-FEED">{f("stFeas")}</option>
            <option value="FEED / detailed design">{f("stFeed")}</option>
            <option value="Procurement / construction">{f("stProc")}</option>
            <option value="Commissioning / operating">{f("stComm")}</option>
          </select>
        </div>

        <div>
          <label htmlFor="geography" className="font-mono-label text-[var(--photo-dim)]">
            {f("geography")}
          </label>
          <input
            id="geography"
            name="geography"
            type="text"
            autoComplete="off"
            placeholder={f("geographyPh")}
            style={{ ...fieldBase, marginTop: "0.5rem" }}
            className="placeholder:text-[rgba(247,245,242,0.28)]"
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
              e.currentTarget.style.background = "rgba(0,0,0,0.38)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.background = "rgba(0,0,0,0.28)";
            }}
          />
        </div>

        <div>
          <label htmlFor="message" className="font-mono-label text-[var(--photo-dim)]">
            {f("message")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder={f("messagePh")}
            style={{ ...fieldBase, marginTop: "0.5rem", resize: "none" }}
            className="placeholder:text-[rgba(247,245,242,0.28)]"
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
              e.currentTarget.style.background = "rgba(0,0,0,0.38)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.background = "rgba(0,0,0,0.28)";
            }}
          />
        </div>

        <button type="submit" className="btn-pill btn-pill--accent">
          {f("send")}
        </button>

        {sent && (
          <p className="text-sm text-[var(--photo-muted)]" role="status">
            {f("sent")}{" "}
            <a href="mailto:info@ogprocess.com" className="nav-link-slide text-[var(--photo-text)]">
              info@ogprocess.com
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
}
