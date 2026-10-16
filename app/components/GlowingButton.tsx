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
    | "gold"
    | "rosegold"
    | "champagne"
    | "bronze"
    | "dark"
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
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-3 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Metallic gold, warm champagne and obsidian gradients for Mariana Esteves Advocacia Previdenciária
  const variantClasses = {
    gold:
      "border border-amber-200/50 bg-gradient-to-r from-[#c59b27] via-[#f2d078] to-[#c59b27] text-[#140e07] font-bold shadow-md shadow-[#0b0a09]/40 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    rosegold:
      "border border-amber-200/50 bg-gradient-to-r from-[#c59b27] via-[#f2d078] to-[#c59b27] text-[#140e07] font-bold shadow-md shadow-[#0b0a09]/40 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    champagne:
      "border border-[#faeac2]/60 bg-gradient-to-r from-[#fff9e6] via-[#fbf3d5] to-[#fff9e6] text-[#140e07] font-bold shadow-sm hover:-translate-y-0.5 hover:shadow-gold hover:brightness-105",
    bronze:
      "border border-[#8c6224]/40 bg-gradient-to-r from-[#6d4914] via-[#8c6224] to-[#6d4914] text-white font-bold shadow-md shadow-[#0b0a09]/40 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    dark:
      "border border-[#d4af37]/35 bg-[#12100d] text-[#faeac2] shadow-sm shadow-[#0b0a09]/50 hover:-translate-y-0.5 hover:border-[#f2d078] hover:bg-[#1f1b15] hover:text-white hover:shadow-gold",
    outline:
      "border border-[#d4af37]/60 bg-transparent text-[#f2d078] hover:-translate-y-0.5 hover:border-[#faeac2] hover:bg-[#d4af37]/15 hover:text-white",
    white:
      "border border-[#faeac2] bg-white text-[#140e07] shadow-sm hover:-translate-y-0.5 hover:bg-[#fff9e6] hover:text-[#0b0a09] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#d4af37] select-none text-center cursor-pointer " +
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
