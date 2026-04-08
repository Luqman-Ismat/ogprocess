import type { Metadata } from "next";
import { PrivacyPageView } from "@/components/PrivacyPageView";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy — Oil & Gas Processing, LLC.",
};

export default function PrivacyPage() {
  return <PrivacyPageView />;
}
