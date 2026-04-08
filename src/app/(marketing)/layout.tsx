import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="relative z-10 flex-1 pt-14 sm:pt-16">{children}</main>
      <Footer />
    </>
  );
}
