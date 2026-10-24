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

  // Refined metallic polished warm gold & deep obsidian noir for Dra. Janaína Carvalho
  const variantClasses = {
    emerald: // Backward compatible alias mapping to obsidian noir & gold
      "border border-[#c5a059]/40 bg-gradient-to-r from-[#0e1116] via-[#181c23] to-[#0e1116] text-white font-bold shadow-md shadow-black/25 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#c5a059]",
    navy:
      "border border-[#c5a059]/40 bg-gradient-to-r from-[#0e1116] via-[#181c23] to-[#0e1116] text-white font-bold shadow-md shadow-black/25 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#c5a059]",
    ruby:
      "border border-[#c5a059]/40 bg-gradient-to-r from-[#0e1116] via-[#181c23] to-[#0e1116] text-white font-bold shadow-md shadow-black/25 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#c5a059]",
    gold:
      "border border-[#d89c48] bg-gradient-to-r from-[#9a762b] via-[#c5a059] to-[#b88d3b] text-white font-bold shadow-md shadow-[#c5a059]/30 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    dark:
      "border border-[#c5a059]/50 bg-[#0e1116] text-[#faf8f5] font-bold shadow-sm hover:-translate-y-0.5 hover:bg-[#181c23] hover:border-[#c5a059] hover:text-white",
    champagne:
      "border border-[#c5a059]/50 bg-[#faf8f5] text-[#12151b] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-[#f4efea] hover:border-[#c5a059]",
    outline:
      "border border-[#c5a059]/70 bg-white text-[#12151b] hover:-translate-y-0.5 hover:border-[#c5a059] hover:bg-[#faf8f5]",
    white:
      "border border-[#e5dfd7] bg-white text-[#12151b] shadow-sm hover:-translate-y-0.5 hover:border-[#c5a059] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c5a059] select-none text-center cursor-pointer " +
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
