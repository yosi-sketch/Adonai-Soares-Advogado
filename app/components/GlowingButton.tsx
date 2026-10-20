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
    | "gold-dark"
    | "rosegold"
    | "champagne"
    | "bronze"
    | "dark"
    | "outline"
    | "ruby"
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

  // Refined metallic bronze gold and warm obsidian styling for Gabriella Pimenta Advocacia
  const variantClasses = {
    gold:
      "border border-[#f7eed8]/70 bg-gradient-to-r from-[#966826] via-[#d4a853] to-[#b88a3e] text-[#0b0907] font-bold shadow-md shadow-[#0b0907]/60 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    rosegold:
      "border border-[#f7eed8]/70 bg-gradient-to-r from-[#966826] via-[#d4a853] to-[#b88a3e] text-[#0b0907] font-bold shadow-md shadow-[#0b0907]/60 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    "gold-dark":
      "border border-[#b88a3e]/40 bg-gradient-to-r from-[#442a0b] via-[#634316] to-[#442a0b] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    champagne:
      "border border-[#f7eed8]/70 bg-gradient-to-r from-[#fbf6ee] via-[#f7eed8] to-[#fbf6ee] text-[#14100c] font-bold shadow-sm hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    bronze:
      "border border-[#634316]/50 bg-gradient-to-r from-[#241403] via-[#442a0b] to-[#241403] text-white font-bold shadow-md shadow-[#0b0907]/50 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    dark:
      "border border-[#b88a3e]/35 bg-[#18130e] text-[#f7eed8] shadow-sm shadow-[#0b0907]/50 hover:-translate-y-0.5 hover:border-[#f7eed8] hover:bg-[#221b14] hover:text-white hover:shadow-gold",
    outline:
      "border border-[#b88a3e]/60 bg-transparent text-[#d4a853] hover:-translate-y-0.5 hover:border-[#f7eed8] hover:bg-[#b88a3e]/15 hover:text-white",
    ruby:
      "border border-[#ef4444]/40 bg-gradient-to-r from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    white:
      "border border-[#b88a3e]/40 bg-white text-[#0b0907] shadow-sm hover:-translate-y-0.5 hover:bg-[#fbf6ee] hover:text-[#0b0907] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#b88a3e] select-none text-center cursor-pointer " +
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
