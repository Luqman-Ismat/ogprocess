"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import { readHubSession, writeHubSession } from "@/lib/hub-demo-session";

const fieldClass =
  "mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[rgba(8,7,6,0.65)] px-4 py-3 text-[var(--color-text)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--color-dim)] focus:border-[rgba(255,255,255,0.22)] focus:ring-2 focus:ring-[rgba(90,122,90,0.35)]";

export function HubLoginPage() {
  const { t } = useI18n();
  const h = (key: string) => t(`hub.login.${key}`);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (readHubSession()) router.replace("/hub/dashboard");
  }, [router]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) {
      setError(h("errEmail"));
      return;
    }
    if (password.length < 1) {
      setError(h("errPass"));
      return;
    }
    writeHubSession({
      email: trimmed,
      displayName: displayName.trim() || trimmed.split("@")[0] || "Team member",
    });
    router.push("/hub/dashboard");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md">
      <p className="font-mono-label text-[var(--photo-label)]">{h("demo")}</p>
      <h1 className="font-display mt-3 text-3xl font-light text-[var(--photo-text)] sm:text-4xl">
        {h("title")}
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-[var(--photo-muted)]">{h("intro")}</p>

      <form
        onSubmit={handleSubmit}
        className="glass mt-10 rounded-2xl p-6 sm:p-8"
        method="post"
        action="/hub"
        autoComplete="on"
        noValidate
      >
        <label
          className="block text-sm font-medium text-[var(--color-text)]"
          htmlFor="hub-demo-email"
        >
          {h("email")}
          <input
            id="hub-demo-email"
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className={fieldClass}
            placeholder={h("emailPh")}
          />
        </label>
        <label
          className="mt-5 block text-sm font-medium text-[var(--color-text)]"
          htmlFor="hub-demo-password"
        >
          {h("password")}
          <input
            id="hub-demo-password"
            type="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className={fieldClass}
            placeholder={h("passPh")}
          />
        </label>
        <label
          className="mt-5 block text-sm font-medium text-[var(--color-text)]"
          htmlFor="hub-demo-name"
        >
          {h("name")}{" "}
          <span className="font-normal text-[var(--color-dim)]">{h("nameOpt")}</span>
          <input
            id="hub-demo-name"
            type="text"
            name="displayName"
            autoComplete="name"
            value={displayName}
            onChange={(ev) => setDisplayName(ev.target.value)}
            className={fieldClass}
            placeholder={h("namePh")}
          />
        </label>

        {error && (
          <p className="mt-4 text-sm text-[#c9a8a8]" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="btn-pill btn-pill--accent mt-8 w-full sm:w-auto">
          {h("submit")}
        </button>
      </form>

      <p className="mt-8 text-center text-xs text-[var(--photo-dim)]">
        <Link href="/" className="nav-link-slide text-[var(--photo-muted)]">
          {h("back")}
        </Link>
      </p>
    </div>
  );
}
