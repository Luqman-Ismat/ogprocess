"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import { supabase } from "@/lib/supabase";

const fieldClass =
  "mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[rgba(8,7,6,0.65)] px-4 py-3 text-[var(--color-text)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--color-dim)] focus:border-[rgba(255,255,255,0.22)] focus:ring-2 focus:ring-[rgba(90,122,90,0.35)]";

export function HubLoginPage() {
  const { t } = useI18n();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.replace("/hub/dashboard");
    });
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) {
      setError("Enter a valid work email.");
      return;
    }
    if (password.length < 1) {
      setError("Password is required.");
      return;
    }
    setLoading(true);
    const { error: authError } = await supabase.auth.signInWithPassword({
      email: trimmed,
      password,
    });
    setLoading(false);
    if (authError) {
      setError(authError.message);
      return;
    }
    router.push("/hub/dashboard");
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md">
      <p className="font-mono-label text-[var(--photo-label)]">{t("hub.topLabel")}</p>
      <h1 className="font-display mt-3 text-3xl font-light text-[var(--photo-text)] sm:text-4xl">
        {t("hub.login.title")}
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-[var(--photo-muted)]">
        Sign in with your OGP work credentials to access the employee portal.
      </p>

      <form
        onSubmit={handleSubmit}
        className="glass mt-10 rounded-2xl p-6 sm:p-8"
        autoComplete="on"
        noValidate
      >
        <label
          className="block text-sm font-medium text-[var(--color-text)]"
          htmlFor="hub-email"
        >
          Work email
          <input
            id="hub-email"
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className={fieldClass}
            placeholder="you@ogprocess.com"
          />
        </label>
        <label
          className="mt-5 block text-sm font-medium text-[var(--color-text)]"
          htmlFor="hub-password"
        >
          Password
          <input
            id="hub-password"
            type="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className={fieldClass}
            placeholder="••••••••"
          />
        </label>

        {error && (
          <p className="mt-4 text-sm text-[#c9a8a8]" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-pill btn-pill--accent mt-8 w-full sm:w-auto disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <p className="mt-8 text-center text-xs text-[var(--photo-dim)]">
        <Link href="/" className="nav-link-slide text-[var(--photo-muted)]">
          ← Back to public site
        </Link>
      </p>
    </div>
  );
}
