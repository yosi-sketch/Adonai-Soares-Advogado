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

  // Refined metallic polished platinum champagne & deep obsidian noir for Dra. Paloma Fernandes
  const variantClasses = {
    emerald: // Backward compatible alias mapping to obsidian noir & platinum champagne
      "border border-[#a8927b]/50 bg-gradient-to-r from-[#0b0d11] via-[#171b22] to-[#0b0d11] text-white font-bold shadow-md shadow-black/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#bea993]",
    navy:
      "border border-[#a8927b]/50 bg-gradient-to-r from-[#0b0d11] via-[#171b22] to-[#0b0d11] text-white font-bold shadow-md shadow-black/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#bea993]",
    ruby:
      "border border-[#a8927b]/50 bg-gradient-to-r from-[#0b0d11] via-[#171b22] to-[#0b0d11] text-white font-bold shadow-md shadow-black/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#bea993]",
    champagne:
      "border border-[#8f7863] bg-gradient-to-r from-[#8f7863] via-[#a8927b] to-[#745f4d] text-white font-bold shadow-md shadow-[#a8927b]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-champagne",
    gold:
      "border border-[#c9944d] bg-gradient-to-r from-[#9e6e28] via-[#d4a359] to-[#be8a3a] text-white font-bold shadow-md shadow-[#d4a359]/30 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    dark:
      "border border-[#a8927b]/40 bg-[#0b0d11] text-[#faf8f5] font-bold shadow-sm hover:-translate-y-0.5 hover:bg-[#171b22] hover:border-[#bea993] hover:text-white",
    outline:
      "border border-[#a8927b]/70 bg-white text-[#11141a] hover:-translate-y-0.5 hover:border-[#a8927b] hover:bg-[#faf8f5]",
    white:
      "border border-[#e2dad0] bg-white text-[#11141a] shadow-sm hover:-translate-y-0.5 hover:border-[#a8927b] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#a8927b] select-none text-center cursor-pointer " +
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
