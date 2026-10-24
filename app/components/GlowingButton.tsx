"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "navy"
    | "ruby"
    | "gold"
    | "dark"
    | "champagne"
    | "outline"
    | "white";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "navy",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-3 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Refined metallic polished deep steel navy, petrol, champagne gold and prestige styling for Aires & Bueno
  const variantClasses = {
    navy:
      "border border-[#2d587b]/70 bg-gradient-to-r from-[#10202e] via-[#1a354c] to-[#10202e] text-white font-bold shadow-md shadow-[#10202e]/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg",
    ruby: // Backward compatible alias mapping to navy
      "border border-[#2d587b]/70 bg-gradient-to-r from-[#10202e] via-[#1a354c] to-[#10202e] text-white font-bold shadow-md shadow-[#10202e]/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg",
    gold:
      "border border-[#cfa75e]/80 bg-gradient-to-r from-[#a37930] via-[#cfa75e] to-[#a37930] text-white font-bold shadow-md shadow-[#b88e44]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    dark:
      "border border-[#3b77a7]/40 bg-[#0e1720] text-[#f8fafc] font-bold shadow-sm hover:-translate-y-0.5 hover:bg-[#162b3d] hover:text-white",
    champagne:
      "border border-[#cfa75e]/50 bg-[#f8fafc] text-[#0e1720] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-[#f1f5f9]",
    outline:
      "border border-[#1a354c]/60 bg-white text-[#162b3d] hover:-translate-y-0.5 hover:border-[#1a354c] hover:bg-[#f0f5fa] hover:text-[#0e1720]",
    white:
      "border border-[#d4e0eb] bg-white text-[#0e1720] shadow-sm hover:-translate-y-0.5 hover:border-[#1a354c] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#1a354c] select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
