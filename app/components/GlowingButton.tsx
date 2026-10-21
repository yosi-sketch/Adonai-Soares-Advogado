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

  // Refined metallic polished gold and prestige light styling for Michaely Silva Advogada
  const variantClasses = {
    gold:
      "border border-[#c59a3f]/70 bg-gradient-to-r from-[#8e6318] via-[#c59a3f] to-[#8e6318] text-white font-bold shadow-md shadow-[#8e6318]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    rosegold:
      "border border-[#c59a3f]/70 bg-gradient-to-r from-[#8e6318] via-[#c59a3f] to-[#8e6318] text-white font-bold shadow-md shadow-[#8e6318]/25 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold",
    "gold-dark":
      "border border-[#deb753]/40 bg-gradient-to-r from-[#322003] via-[#5a3c08] to-[#322003] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    champagne:
      "border border-[#deb753]/50 bg-[#f4efe6] text-[#14110e] font-bold shadow-xs hover:-translate-y-0.5 hover:bg-[#ede5d8]",
    bronze:
      "border border-[#5a3c08]/50 bg-[#322003] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    dark:
      "border border-[#deb753]/40 bg-[#14110e] text-[#f7e5a9] shadow-sm hover:-translate-y-0.5 hover:bg-[#221c17] hover:text-white",
    outline:
      "border border-[#8e6318]/50 bg-white text-[#8e6318] hover:-translate-y-0.5 hover:border-[#8e6318] hover:bg-[#f4efe6] hover:text-[#14110e]",
    ruby:
      "border border-[#ef4444]/40 bg-gradient-to-r from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d] text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
    white:
      "border border-[#e8dfd2] bg-white text-[#14110e] shadow-sm hover:-translate-y-0.5 hover:border-[#deb753] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#deb753] select-none text-center cursor-pointer " +
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
