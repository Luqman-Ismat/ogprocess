"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import { UI_MESSAGES } from "@/i18n/ui-messages";
import type { Locale } from "@/i18n/types";
import { useHubSession } from "@/lib/use-hub-session";

type SubmittedFile = {
  name: string;
  size: number;
  submittedAt: string;
};

type HubDashCopy = {
  signed: string;
  welcome: string;
  intro: string;
  announcementsHeading: string;
  announcements: { date: string; title: string; body: string }[];
  hrTitle: string;
  hrIntro: string;
  hrDemo: string;
  hrLinks: { title: string; desc: string }[];
  resumeTitle: string;
  resumeIntro: string;
  drop: string;
  dropNote: string;
  submitHr: string;
  addMore: string;
  remove: string;
  uploadNeed: string;
  uploadOk: string;
  sim: string;
  logged: string;
  trainingTitle: string;
  trainingIntro: string;
  course: string;
  due: string;
  status: string;
  trH2s: string;
  trCyber: string;
  trHot: string;
  trDue1: string;
  trDue2: string;
  trDue3: string;
  trStatCurrent: string;
  trStatSoon: string;
  trStatNot: string;
  hrContactTitle: string;
  hrContactP: string;
  officeRef: string;
  publicForm: string;
  loading: string;
};

function getHubDash(locale: Locale): HubDashCopy {
  const root = UI_MESSAGES[locale] as { hub: { dash: HubDashCopy } };
  return root.hub.dash;
}

export function HubDashboardClient() {
  const { locale } = useI18n();
  const dash = useMemo(() => getHubDash(locale), [locale]);
  const d = (key: keyof HubDashCopy) => dash[key] as string;

  const router = useRouter();
  const session = useHubSession();
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState<SubmittedFile[]>([]);
  const [uploadKey, setUploadKey] = useState<"need" | "ok" | null>(null);

  useEffect(() => {
    if (session === null) router.replace("/hub");
  }, [session, router]);

  const onFiles = useCallback((list: FileList | null) => {
    if (!list?.length) return;
    setFiles((prev) => [...prev, ...Array.from(list)]);
    setUploadKey(null);
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onFiles(e.dataTransfer.files);
    },
    [onFiles],
  );

  function removeAt(i: number) {
    setFiles((prev) => prev.filter((_, j) => j !== i));
  }

  function submitDocuments() {
    if (files.length === 0) {
      setUploadKey("need");
      return;
    }
    const now = new Date().toISOString();
    setSubmitted((prev) => [
      ...files.map((f) => ({
        name: f.name,
        size: f.size,
        submittedAt: now,
      })),
      ...prev,
    ]);
    setFiles([]);
    setUploadKey("ok");
  }

  if (!session) {
    return (
      <p className="text-[var(--photo-muted)]" aria-live="polite">
        {d("loading")}
      </p>
    );
  }

  const greeting = session.displayName || session.email;

  return (
    <div className="space-y-14 sm:space-y-16">
      <header>
        <p className="font-mono-label text-[var(--photo-label)]">{d("signed")}</p>
        <h1 className="font-display mt-2 text-3xl font-light text-[var(--photo-text)] sm:text-4xl">
          {d("welcome")} {greeting}
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-[var(--photo-muted)]">{d("intro")}</p>
      </header>

      <section>
        <h2 className="font-display text-xl font-light text-[var(--photo-text)] sm:text-2xl">
          {d("announcementsHeading")}
        </h2>
        <ul className="mt-6 space-y-4">
          {dash.announcements.map((a) => (
            <li key={a.title} className="glass rounded-2xl p-5 sm:p-6">
              <p className="font-mono-label text-[var(--color-dim)]">{a.date}</p>
              <h3 className="mt-2 font-display text-lg font-light text-[var(--color-text)]">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{a.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-light text-[var(--photo-text)] sm:text-2xl">
          {d("hrTitle")}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-[var(--photo-muted)]">{d("hrIntro")}</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {dash.hrLinks.map((item) => (
            <li key={item.title}>
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                className="glass glass-hover flex h-full min-h-[10rem] flex-col rounded-2xl p-6 transition-colors"
              >
                <span className="font-display text-lg font-light text-[var(--color-text)]">
                  {item.title}
                </span>
                <span className="mt-2 flex-1 text-sm text-[var(--color-muted)]">{item.desc}</span>
                <span className="font-mono-label mt-4 text-[var(--color-dim)]">{d("hrDemo")}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl font-light text-[var(--photo-text)] sm:text-2xl">
          {d("resumeTitle")}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-[var(--photo-muted)]">{d("resumeIntro")}</p>
        <div className="glass mt-8 rounded-2xl p-6 sm:p-8">
          <label
            htmlFor="hub-resume-files"
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-[var(--color-border)] bg-[rgba(6,5,4,0.35)] px-6 py-12 transition-colors hover:border-[rgba(255,255,255,0.2)]"
          >
            <span className="text-sm font-medium text-[var(--color-text)]">{d("drop")}</span>
            <span className="mt-2 text-xs text-[var(--color-dim)]">{d("dropNote")}</span>
            <input
              id="hub-resume-files"
              type="file"
              className="sr-only"
              multiple
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={(e) => onFiles(e.target.files)}
            />
          </label>

          {files.length > 0 && (
            <ul className="mt-6 space-y-2 border-t border-[var(--color-border)] pt-6">
              {files.map((f, i) => (
                <li
                  key={`${f.name}-${i}`}
                  className="flex items-center justify-between gap-3 text-sm text-[var(--color-muted)]"
                >
                  <span className="min-w-0 truncate">{f.name}</span>
                  <span className="shrink-0 tabular-nums text-[var(--color-dim)]">
                    {(f.size / 1024).toFixed(1)} KB
                  </span>
                  <button
                    type="button"
                    onClick={() => removeAt(i)}
                    className="shrink-0 text-xs text-[var(--photo-label)] underline-offset-2 hover:text-[var(--photo-text)] hover:underline"
                  >
                    {d("remove")}
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="button" onClick={submitDocuments} className="btn-pill btn-pill--accent">
              {d("submitHr")}
            </button>
            <label className="cursor-pointer text-sm text-[var(--photo-muted)] underline-offset-2 hover:text-[var(--photo-text)] hover:underline">
              {d("addMore")}
              <input
                type="file"
                className="sr-only"
                multiple
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={(e) => onFiles(e.target.files)}
              />
            </label>
          </div>

          {uploadKey && (
            <p className="mt-4 text-sm text-[var(--color-muted)]" role="status">
              {uploadKey === "need" ? d("uploadNeed") : d("uploadOk")}
            </p>
          )}

          {submitted.length > 0 && (
            <div className="mt-8 border-t border-[var(--color-border)] pt-6">
              <h3 className="font-mono-label text-[var(--color-dim)]">{d("sim")}</h3>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                {submitted.map((s, i) => (
                  <li key={`${s.name}-${s.submittedAt}-${i}`}>
                    {s.name}{" "}
                    <span className="text-[var(--color-dim)]">
                      {d("logged")} {new Date(s.submittedAt).toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-light text-[var(--photo-text)] sm:text-2xl">
          {d("trainingTitle")}
        </h2>
        <p className="mt-3 text-sm text-[var(--photo-muted)]">{d("trainingIntro")}</p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-[rgba(6,5,4,0.45)]">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)] font-mono-label text-[var(--color-dim)]">
                <th className="px-4 py-3 font-normal">{d("course")}</th>
                <th className="px-4 py-3 font-normal">{d("due")}</th>
                <th className="px-4 py-3 font-normal">{d("status")}</th>
              </tr>
            </thead>
            <tbody className="text-[var(--color-muted)]">
              <tr className="border-b border-[var(--color-border)]">
                <td className="px-4 py-3 text-[var(--color-text)]">{d("trH2s")}</td>
                <td className="px-4 py-3">{d("trDue1")}</td>
                <td className="px-4 py-3 text-[#a8c9a8]">{d("trStatCurrent")}</td>
              </tr>
              <tr className="border-b border-[var(--color-border)]">
                <td className="px-4 py-3 text-[var(--color-text)]">{d("trCyber")}</td>
                <td className="px-4 py-3">{d("trDue2")}</td>
                <td className="px-4 py-3 text-[#c9b88a]">{d("trStatSoon")}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-[var(--color-text)]">{d("trHot")}</td>
                <td className="px-4 py-3">{d("trDue3")}</td>
                <td className="px-4 py-3">{d("trStatNot")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="surface-band rounded-2xl px-6 py-8 sm:px-8">
        <h2 className="font-display text-xl font-light text-[var(--color-text)]">{d("hrContactTitle")}</h2>
        <p className="mt-3 text-sm text-[var(--color-muted)]">{d("hrContactP")}</p>
        <p className="mt-4 text-sm text-[var(--color-text)]">
          <a
            href="mailto:hr@ogprocess.com"
            className="nav-link-slide underline-offset-2 hover:underline"
          >
            hr@ogprocess.com
          </a>
          <span className="mx-2 text-[var(--color-dim)]">·</span>
          <span className="text-[var(--color-muted)]">{d("officeRef")}</span>
        </p>
        <Link href="/contact" className="btn-pill btn-pill--outline mt-6 inline-flex">
          {d("publicForm")}
        </Link>
      </section>
    </div>
  );
}
