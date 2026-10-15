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
    | "burgundy"
    | "rosegold"
    | "copper"
    | "bronze"
    | "silver"
    | "platinum"
    | "dark"
    | "outline"
    | "white"
    | "gold"
    | "champagne";
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

  // Metallic champagne gold, bronze and luxury obsidian gradients matching Dr. Hudson de Freitas visual identity
  const variantClasses = {
    burgundy:
      "border border-amber-300/40 bg-gradient-to-r from-brand-500 via-gold-400 to-brand-500 text-brand-950 font-bold shadow-md shadow-brand-950/25 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    gold:
      "border border-amber-300/40 bg-gradient-to-r from-brand-500 via-gold-400 to-brand-500 text-brand-950 font-bold shadow-md shadow-brand-950/25 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    rosegold:
      "border border-gold-400/50 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-brand-950 font-bold shadow-md shadow-brand-950/25 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    copper:
      "border border-brand-400/40 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 text-white font-bold shadow-md shadow-brand-950/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    bronze:
      "border border-brand-500/40 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 text-white font-bold shadow-md shadow-brand-950/40 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-gold",
    platinum:
      "border border-brand-300/60 bg-gradient-to-r from-brand-100 via-white to-brand-200 text-brand-950 font-bold shadow-md shadow-brand-950/15 hover:-translate-y-0.5 hover:shadow-gold hover:brightness-105",
    silver:
      "border border-brand-300/60 bg-gradient-to-r from-brand-100 via-white to-brand-200 text-brand-950 font-bold shadow-md shadow-brand-950/15 hover:-translate-y-0.5 hover:shadow-gold hover:brightness-105",
    champagne:
      "border border-gold-300/60 bg-gradient-to-r from-brand-50 via-gold-200 to-brand-100 text-brand-950 font-bold shadow-sm hover:-translate-y-0.5 hover:shadow-gold hover:brightness-105",
    dark:
      "border border-gold-400/35 bg-brand-950 text-gold-300 shadow-sm shadow-brand-950/50 hover:-translate-y-0.5 hover:border-gold-300 hover:bg-brand-900 hover:text-white hover:shadow-gold",
    outline:
      "border border-brand-500/50 bg-transparent text-brand-700 hover:-translate-y-0.5 hover:border-brand-600 hover:bg-brand-50 hover:text-brand-950",
    white:
      "border border-brand-200 bg-white text-brand-950 shadow-sm hover:-translate-y-0.5 hover:bg-brand-50 hover:text-brand-950 hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber-400 select-none text-center cursor-pointer " +
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
