"use client";

const LOGO_SRC = "/brand/logo.png";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  priority?: boolean;
  className?: string;
};

export function Logo({ size = "md", priority = false, className = "" }: LogoProps) {
  const sizeClass =
    size === "lg"
      ? "h-36 w-auto sm:h-44 lg:h-52"
      : size === "sm"
        ? "h-7 w-auto"
        : "h-10 w-auto sm:h-11";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_SRC}
      alt="Oil & Gas Processing"
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={`block object-contain ${sizeClass} ${className}`}
      style={{ filter: "brightness(0) invert(1)", opacity: 0.88 }}
    />
  );
}
