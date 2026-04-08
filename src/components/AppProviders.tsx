"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";

export function AppProviders({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
