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

  // Metallic gold, warm champagne and velvet obsidian gradients for Apolinário Advogados
  const variantClasses = {
    gold:
      "border border-[#fcf3a3]/50 bg-gradient-to-r from-[#c08322] via-[#f9d26c] to-[#c08322] text-[#0a0805] font-bold shadow-md shadow-[#080706]/40 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    rosegold:
      "border border-[#fcf3a3]/50 bg-gradient-to-r from-[#c08322] via-[#f9d26c] to-[#c08322] text-[#0a0805] font-bold shadow-md shadow-[#080706]/40 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    champagne:
      "border border-[#f9d26c]/60 bg-gradient-to-r from-[#fffceb] via-[#fae48f] to-[#fffceb] text-[#0a0805] font-bold shadow-sm hover:-translate-y-0.5 hover:shadow-gold hover:brightness-105",
    bronze:
      "border border-[#8e5813]/40 bg-gradient-to-r from-[#5a370b] via-[#8e5813] to-[#5a370b] text-white font-bold shadow-md shadow-[#080706]/40 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    dark:
      "border border-[#d49b29]/35 bg-[#110f0c] text-[#fdf6cc] shadow-sm shadow-[#080706]/50 hover:-translate-y-0.5 hover:border-[#f9d26c] hover:bg-[#1d1914] hover:text-white hover:shadow-gold",
    outline:
      "border border-[#d49b29]/60 bg-transparent text-[#f9d26c] hover:-translate-y-0.5 hover:border-[#fcf3a3] hover:bg-[#d49b29]/15 hover:text-white",
    white:
      "border border-[#fae48f] bg-white text-[#0a0805] shadow-sm hover:-translate-y-0.5 hover:bg-[#fffceb] hover:text-[#080706] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#d49b29] select-none text-center cursor-pointer " +
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
