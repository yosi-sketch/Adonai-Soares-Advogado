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

  // Refined metallic polished deep emerald, imperial forest green and champagne gold for Dra. Manuela Gonçalves
  const variantClasses = {
    emerald:
      "border border-[#264b3a]/70 bg-gradient-to-r from-[#0f1d16] via-[#162b21] to-[#0f1d16] text-white font-bold shadow-md shadow-[#0f1d16]/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#c5a059]/60",
    navy: // Backward compatible alias mapping to emerald
      "border border-[#264b3a]/70 bg-gradient-to-r from-[#0f1d16] via-[#162b21] to-[#0f1d16] text-white font-bold shadow-md shadow-[#0f1d16]/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#c5a059]/60",
    ruby: // Backward compatible alias mapping to emerald
      "border border-[#264b3a]/70 bg-gradient-to-r from-[#0f1d16] via-[#162b21] to-[#0f1d16] text-white font-bold shadow-md shadow-[#0f1d16]/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#c5a059]/60",
    gold:
      "border border-[#c5a059]/80 bg-gradient-to-r from-[#9a762b] via-[#c5a059] to-[#9a762b] text-white font-bold shadow-md shadow-[#c5a059]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    dark:
      "border border-[#33614c]/40 bg-[#0d1611] text-[#faf8f5] font-bold shadow-sm hover:-translate-y-0.5 hover:bg-[#162b21] hover:text-white",
    champagne:
      "border border-[#c5a059]/50 bg-[#faf8f5] text-[#0d1611] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-[#f3efe6]",
    outline:
      "border border-[#162b21]/60 bg-white text-[#162b21] hover:-translate-y-0.5 hover:border-[#162b21] hover:bg-[#f2f8f5] hover:text-[#0d1611]",
    white:
      "border border-[#e3ded5] bg-white text-[#0d1611] shadow-sm hover:-translate-y-0.5 hover:border-[#162b21] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#162b21] select-none text-center cursor-pointer " +
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
