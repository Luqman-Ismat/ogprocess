import type { Metadata } from "next";
import { HubTopBar } from "@/components/hub/HubTopBar";

export const metadata: Metadata = {
  title: "Employee hub",
  description:
    "Demo employee portal for Oil & Gas Processing — HR resources, documents, and internal tools (frontend preview).",
};

export default function HubRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HubTopBar />
      <main className="relative z-10 flex-1 pb-20 pt-8 sm:pt-10">
        <div className="mx-auto w-full max-w-none px-5 sm:px-6 lg:px-8 xl:px-10">
          {children}
        </div>
      </main>
    </>
  );
}
