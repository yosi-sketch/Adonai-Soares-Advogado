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

  // Refined metallic antique bronze gold and midnight slate styling for Bruno Marques Advocacia
  const variantClasses = {
    gold:
      "border border-[#faeed2]/60 bg-gradient-to-r from-[#b38836] via-[#dfb76c] to-[#b38836] text-[#090c12] font-bold shadow-md shadow-[#080b11]/60 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    rosegold:
      "border border-[#faeed2]/60 bg-gradient-to-r from-[#b38836] via-[#dfb76c] to-[#b38836] text-[#090c12] font-bold shadow-md shadow-[#080b11]/60 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    "gold-dark":
      "border border-[#c59b48]/40 bg-gradient-to-r from-[#634512] via-[#8c6622] to-[#634512] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    champagne:
      "border border-[#faeed2]/60 bg-gradient-to-r from-[#fdfaf3] via-[#faeed2] to-[#fdfaf3] text-[#1c1608] font-bold shadow-sm hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    bronze:
      "border border-[#8c6622]/50 bg-gradient-to-r from-[#382506] via-[#634512] to-[#382506] text-white font-bold shadow-md shadow-[#080b11]/50 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    dark:
      "border border-[#c59b48]/35 bg-[#121825] text-[#faeed2] shadow-sm shadow-[#080b11]/50 hover:-translate-y-0.5 hover:border-[#f3dfa7] hover:bg-[#182030] hover:text-white hover:shadow-gold",
    outline:
      "border border-[#c59b48]/60 bg-transparent text-[#dfb76c] hover:-translate-y-0.5 hover:border-[#faeed2] hover:bg-[#c59b48]/15 hover:text-white",
    ruby:
      "border border-[#ef4444]/40 bg-gradient-to-r from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    white:
      "border border-[#c59b48]/40 bg-white text-[#090c12] shadow-sm hover:-translate-y-0.5 hover:bg-[#fdfaf3] hover:text-[#080b11] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c59b48] select-none text-center cursor-pointer " +
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
