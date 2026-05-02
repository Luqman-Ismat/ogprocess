/** Solid navy gradient — matches the OGP logo palette. */
export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #091525 0%, #0d2040 55%, #091a30 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 60%, rgba(26,61,107,0.25) 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(13,40,80,0.18) 0%, transparent 50%)",
        }}
      />
    </div>
  );
}
