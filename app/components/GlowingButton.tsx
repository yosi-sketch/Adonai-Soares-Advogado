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

  // Refined metallic imperial gold & deep obsidian noir for Dra. Carla Gisele
  const variantClasses = {
    emerald: // Primary action: Deep obsidian noir with imperial gold accents
      "border border-[#c58b2c]/60 bg-gradient-to-r from-[#0e0c0a] via-[#1a1510] to-[#0e0c0a] text-[#fdfbf7] font-bold shadow-md shadow-black/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#eaa43a]",
    navy:
      "border border-[#c58b2c]/60 bg-gradient-to-r from-[#0e0c0a] via-[#1a1510] to-[#0e0c0a] text-[#fdfbf7] font-bold shadow-md shadow-black/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#eaa43a]",
    ruby:
      "border border-[#c58b2c]/60 bg-gradient-to-r from-[#0e0c0a] via-[#1a1510] to-[#0e0c0a] text-[#fdfbf7] font-bold shadow-md shadow-black/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#eaa43a]",
    champagne:
      "border border-[#c58b2c] bg-gradient-to-r from-[#a56f1e] via-[#c58b2c] to-[#833a03] text-white font-bold shadow-md shadow-[#c58b2c]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    gold:
      "border border-[#eaa43a] bg-gradient-to-r from-[#833a03] via-[#c58b2c] to-[#d49b35] text-white font-bold shadow-md shadow-[#c58b2c]/30 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    dark:
      "border border-[#c58b2c]/40 bg-[#0e0c0a] text-[#fdfbf7] font-bold shadow-sm hover:-translate-y-0.5 hover:bg-[#1a1510] hover:border-[#eaa43a] hover:text-white",
    outline:
      "border border-[#c58b2c]/70 bg-white text-[#141210] hover:-translate-y-0.5 hover:border-[#c58b2c] hover:bg-[#fdfbf7]",
    white:
      "border border-[#e5dccd] bg-white text-[#141210] shadow-sm hover:-translate-y-0.5 hover:border-[#c58b2c] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c58b2c] select-none text-center cursor-pointer " +
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
