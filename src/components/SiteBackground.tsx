import Image from "next/image";

const HERO_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/1/1d/Mina-Al-Ahmadi_oil_refinery_night.jpg";

/** Fixed refinery + gradient — same treatment as the former hero backdrop, site-wide. */
export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        className="object-cover"
        style={{ opacity: 0.78 }}
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(18,15,12,0.98) 0%, rgba(18,15,12,0.5) 42%, rgba(18,15,12,0.15) 100%)",
        }}
      />
    </div>
  );
}
