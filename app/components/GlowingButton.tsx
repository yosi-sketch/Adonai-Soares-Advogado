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

  // Refined metallic bronze gold and warm obsidian styling for Júlia Andrade Advocacia
  const variantClasses = {
    gold:
      "border border-[#f5e7c8]/60 bg-gradient-to-r from-[#b27d35] via-[#d4a359] to-[#b27d35] text-[#120e0b] font-bold shadow-md shadow-[#0c0a08]/60 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    rosegold:
      "border border-[#f5e7c8]/60 bg-gradient-to-r from-[#b27d35] via-[#d4a359] to-[#b27d35] text-[#120e0b] font-bold shadow-md shadow-[#0c0a08]/60 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    "gold-dark":
      "border border-[#c89345]/40 bg-gradient-to-r from-[#633e14] via-[#8c5d23] to-[#633e14] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    champagne:
      "border border-[#f5e7c8]/60 bg-gradient-to-r from-[#fcf7ed] via-[#f5e7c8] to-[#fcf7ed] text-[#1f170c] font-bold shadow-sm hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    bronze:
      "border border-[#8c5d23]/50 bg-gradient-to-r from-[#3d240a] via-[#633e14] to-[#3d240a] text-white font-bold shadow-md shadow-[#0c0a08]/50 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    dark:
      "border border-[#c89345]/35 bg-[#191410] text-[#f5e7c8] shadow-sm shadow-[#0c0a08]/50 hover:-translate-y-0.5 hover:border-[#ebd3a2] hover:bg-[#221c16] hover:text-white hover:shadow-gold",
    outline:
      "border border-[#c89345]/60 bg-transparent text-[#d4a359] hover:-translate-y-0.5 hover:border-[#f5e7c8] hover:bg-[#c89345]/15 hover:text-white",
    ruby:
      "border border-[#ef4444]/40 bg-gradient-to-r from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    white:
      "border border-[#c89345]/40 bg-white text-[#120e0b] shadow-sm hover:-translate-y-0.5 hover:bg-[#fcf7ed] hover:text-[#0c0a08] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c89345] select-none text-center cursor-pointer " +
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
