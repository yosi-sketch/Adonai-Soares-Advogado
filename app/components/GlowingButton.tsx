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

  // Refined metallic bronze, warm copper and deep obsidian styling for Tomaz Henrique Advocacia
  const variantClasses = {
    gold:
      "border border-[#fae0c8]/40 bg-gradient-to-r from-[#8f4d22] via-[#c97f48] to-[#8f4d22] text-white font-bold shadow-md shadow-[#090706]/50 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-bronze",
    rosegold:
      "border border-[#fae0c8]/40 bg-gradient-to-r from-[#a86131] via-[#d48c52] to-[#a86131] text-white font-bold shadow-md shadow-[#090706]/50 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-bronze",
    champagne:
      "border border-[#e5a26c]/60 bg-gradient-to-r from-[#fdf6ee] via-[#fae0c8] to-[#fdf6ee] text-[#241308] font-bold shadow-sm hover:-translate-y-0.5 hover:shadow-bronze hover:brightness-105",
    bronze:
      "border border-[#c97f48]/50 bg-gradient-to-r from-[#54280c] via-[#8f4d22] to-[#54280c] text-white font-bold shadow-md shadow-[#090706]/50 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-bronze",
    dark:
      "border border-[#c97f48]/35 bg-[#120e0b] text-[#fae0c8] shadow-sm shadow-[#090706]/50 hover:-translate-y-0.5 hover:border-[#e5a26c] hover:bg-[#1f1610] hover:text-white hover:shadow-bronze",
    outline:
      "border border-[#c97f48]/60 bg-transparent text-[#e5a26c] hover:-translate-y-0.5 hover:border-[#fae0c8] hover:bg-[#c97f48]/15 hover:text-white",
    white:
      "border border-[#c97f48]/40 bg-white text-[#1a110a] shadow-sm hover:-translate-y-0.5 hover:bg-[#fdf6ee] hover:text-[#090706] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c97f48] select-none text-center cursor-pointer " +
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
