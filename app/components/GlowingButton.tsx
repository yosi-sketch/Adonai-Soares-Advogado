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

  // Refined metallic polished gold and prestige styling for Débora Gurgel — Advocacia e Consultoria Jurídica
  const variantClasses = {
    gold:
      "border border-[#cba273]/80 bg-gradient-to-r from-[#a46d2f] via-[#cba273] to-[#a46d2f] text-white font-bold shadow-md shadow-[#a46d2f]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    rosegold:
      "border border-[#cba273]/80 bg-gradient-to-r from-[#a46d2f] via-[#cba273] to-[#a46d2f] text-white font-bold shadow-md shadow-[#a46d2f]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    "gold-dark":
      "border border-[#eece9e]/40 bg-gradient-to-r from-[#0b111e] via-[#162035] to-[#0b111e] text-[#fdefca] font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    champagne:
      "border border-[#cba273]/50 bg-[#faf8f5] text-[#0d121c] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-[#f4efe6]",
    bronze:
      "border border-[#7d5120]/50 bg-[#5d3618] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    dark:
      "border border-[#cba273]/40 bg-[#0b111e] text-[#fdefca] shadow-sm hover:-translate-y-0.5 hover:bg-[#162035] hover:text-white",
    outline:
      "border border-[#a46d2f]/60 bg-white text-[#7d5120] hover:-translate-y-0.5 hover:border-[#a46d2f] hover:bg-[#faf8f5] hover:text-[#0d121c]",
    ruby:
      "border border-[#ef4444]/40 bg-gradient-to-r from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    white:
      "border border-[#e8dfd2] bg-white text-[#0d121c] shadow-sm hover:-translate-y-0.5 hover:border-[#cba273] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#cba273] select-none text-center cursor-pointer " +
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
