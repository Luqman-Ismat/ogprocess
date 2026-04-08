import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/AppProviders";
import { SiteBackground } from "@/components/SiteBackground";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Oil & Gas Processing, LLC",
    template: "%s | Oil & Gas Processing",
  },
  description:
    "OGP delivers end-to-end process engineering for complex energy projects — upstream, midstream, and downstream. From feasibility through commissioning, our senior-led team supports operators, EPC contractors, and project developers worldwide.",
  metadataBase: new URL("https://ogprocess.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body
        className="relative flex min-h-full flex-col font-sans"
        data-photo-site=""
      >
        <SiteBackground />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
