"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "silver" | "platinum" | "dark" | "outline" | "white" | "gold" | "champagne";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "platinum",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-3 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Metallic platinum/silver gradients matching the new logo
  const variantClasses = {
    platinum:
      "border border-white/60 bg-gradient-to-r from-brand-100 via-white to-brand-200 text-brand-950 font-bold shadow-md shadow-brand-950/20 hover:-translate-y-0.5 hover:shadow-silver hover:brightness-105",
    silver:
      "border border-brand-300/40 bg-gradient-to-r from-brand-200 via-brand-100 to-brand-300 text-brand-950 font-bold shadow-sm hover:-translate-y-0.5 hover:shadow-silver hover:brightness-105",
    champagne:
      "border border-white/60 bg-gradient-to-r from-brand-100 via-white to-brand-200 text-brand-950 font-bold shadow-md shadow-brand-950/20 hover:-translate-y-0.5 hover:shadow-silver hover:brightness-105",
    dark:
      "border border-brand-500/50 bg-brand-900 text-white shadow-sm shadow-brand-950/40 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-950 hover:shadow-silver",
    gold:
      "border border-white/60 bg-gradient-to-r from-brand-100 via-white to-brand-200 text-brand-950 font-bold shadow-md shadow-brand-950/20 hover:-translate-y-0.5 hover:shadow-silver hover:brightness-105",
    outline:
      "border border-brand-600/40 bg-transparent text-brand-900 hover:-translate-y-0.5 hover:border-brand-700 hover:bg-brand-50 hover:text-black",
    white:
      "border border-white bg-white text-brand-950 shadow-sm hover:-translate-y-0.5 hover:bg-brand-50 hover:text-brand-950 hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-700 select-none text-center cursor-pointer " +
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
