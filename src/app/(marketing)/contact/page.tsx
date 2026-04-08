import type { Metadata } from "next";
import { ContactPageView } from "@/components/ContactPageView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Oil & Gas Processing, LLC — Tomball, Texas. Phone, email, and inquiry form.",
};

export default function ContactPage() {
  return <ContactPageView />;
}
