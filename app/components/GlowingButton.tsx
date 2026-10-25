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
    | "emerald"
    | "gold"
    | "dark"
    | "champagne"
    | "outline"
    | "white"
    | "navy"
    | "ruby";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "emerald",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-3 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Refined metallic rose-gold & deep warm espresso noir for Dra. Patrícia Freyer
  const variantClasses = {
    emerald: // Primary action: Deep warm espresso noir with warm champagne gold accents
      "border border-[#be8a50]/70 bg-gradient-to-r from-[#110d0a] via-[#1f1712] to-[#110d0a] text-[#fdfbf8] font-bold shadow-md shadow-black/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#dfae76]",
    navy:
      "border border-[#be8a50]/70 bg-gradient-to-r from-[#110d0a] via-[#1f1712] to-[#110d0a] text-[#fdfbf8] font-bold shadow-md shadow-black/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#dfae76]",
    ruby:
      "border border-[#be8a50]/70 bg-gradient-to-r from-[#110d0a] via-[#1f1712] to-[#110d0a] text-[#fdfbf8] font-bold shadow-md shadow-black/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#dfae76]",
    champagne:
      "border border-[#dfae76] bg-gradient-to-r from-[#9e6d37] via-[#be8a50] to-[#7a4f21] text-white font-bold shadow-md shadow-[#be8a50]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    gold:
      "border border-[#dfae76] bg-gradient-to-r from-[#7a4f21] via-[#be8a50] to-[#d29e62] text-white font-bold shadow-md shadow-[#be8a50]/30 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    dark:
      "border border-[#be8a50]/40 bg-[#110d0a] text-[#fdfbf8] font-bold shadow-sm hover:-translate-y-0.5 hover:bg-[#1f1712] hover:border-[#dfae76] hover:text-white",
    outline:
      "border border-[#be8a50]/80 bg-white text-[#140f0c] hover:-translate-y-0.5 hover:border-[#be8a50] hover:bg-[#fcf4eb]",
    white:
      "border border-[#e6dcce] bg-white text-[#140f0c] shadow-sm hover:-translate-y-0.5 hover:border-[#be8a50] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#be8a50] select-none text-center cursor-pointer " +
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
