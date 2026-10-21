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
    | "ruby"
    | "gold"
    | "dark"
    | "champagne"
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
  variant = "ruby",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-3 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Refined metallic polished wine, ruby, gold and prestige styling for Kowalski Advocacia
  const variantClasses = {
    ruby:
      "border border-[#a3141b]/60 bg-gradient-to-r from-[#700a12] via-[#871017] to-[#700a12] text-white font-bold shadow-md shadow-[#700a12]/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg",
    gold:
      "border border-[#cfa05e]/80 bg-gradient-to-r from-[#b6813b] via-[#cfa05e] to-[#b6813b] text-white font-bold shadow-md shadow-[#b6813b]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    dark:
      "border border-[#cfa05e]/40 bg-[#16080a] text-[#fbf0de] font-bold shadow-sm hover:-translate-y-0.5 hover:bg-[#260306] hover:text-white",
    champagne:
      "border border-[#cfa05e]/50 bg-[#faf8f6] text-[#16080a] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-[#f5efea]",
    outline:
      "border border-[#871017]/60 bg-white text-[#700a12] hover:-translate-y-0.5 hover:border-[#871017] hover:bg-[#fdf5f5] hover:text-[#16080a]",
    white:
      "border border-[#e7dcce] bg-white text-[#16080a] shadow-sm hover:-translate-y-0.5 hover:border-[#871017] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#871017] select-none text-center cursor-pointer " +
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
