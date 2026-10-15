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
    | "rosegold"
    | "burgundy"
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
  variant = "rosegold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-3 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  // Metallic rose gold, marsala wine and velvet plum obsidian gradients for Letícia Saldanha Advocacia
  const variantClasses = {
    rosegold:
      "border border-rose-200/50 bg-gradient-to-r from-[#c47d73] via-[#e8aea6] to-[#c47d73] text-[#190c10] font-bold shadow-md shadow-[#0d090b]/40 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-rosegold",
    gold:
      "border border-rose-200/50 bg-gradient-to-r from-[#c47d73] via-[#e8aea6] to-[#c47d73] text-[#190c10] font-bold shadow-md shadow-[#0d090b]/40 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-rosegold",
    burgundy:
      "border border-[#d49389]/40 bg-gradient-to-r from-[#4a1521] via-[#682330] to-[#4a1521] text-[#fdf5f3] font-bold shadow-md shadow-[#0d090b]/30 hover:-translate-y-0.5 hover:brightness-115 hover:shadow-rosegold",
    copper:
      "border border-[#d49389]/40 bg-gradient-to-r from-[#b36b61] via-[#d49389] to-[#b36b61] text-white font-bold shadow-md shadow-[#0d090b]/30 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-rosegold",
    bronze:
      "border border-[#914f46]/40 bg-gradient-to-r from-[#6b3730] via-[#914f46] to-[#6b3730] text-white font-bold shadow-md shadow-[#0d090b]/40 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-rosegold",
    platinum:
      "border border-rose-100/60 bg-gradient-to-r from-[#faeae6] via-white to-[#faeae6] text-[#191115] font-bold shadow-md shadow-[#0d090b]/15 hover:-translate-y-0.5 hover:shadow-rosegold hover:brightness-105",
    silver:
      "border border-rose-100/60 bg-gradient-to-r from-[#faeae6] via-white to-[#faeae6] text-[#191115] font-bold shadow-md shadow-[#0d090b]/15 hover:-translate-y-0.5 hover:shadow-rosegold hover:brightness-105",
    champagne:
      "border border-[#f2d2cb]/60 bg-gradient-to-r from-[#fdf5f3] via-[#faeae6] to-[#fdf5f3] text-[#191115] font-bold shadow-sm hover:-translate-y-0.5 hover:shadow-rosegold hover:brightness-105",
    dark:
      "border border-[#d49389]/35 bg-[#140e11] text-[#f2d2cb] shadow-sm shadow-[#0d090b]/50 hover:-translate-y-0.5 hover:border-[#e8aea6] hover:bg-[#22161c] hover:text-white hover:shadow-rosegold",
    outline:
      "border border-[#d49389]/60 bg-transparent text-[#e8aea6] hover:-translate-y-0.5 hover:border-[#f2d2cb] hover:bg-[#d49389]/15 hover:text-white",
    white:
      "border border-[#f2d2cb] bg-white text-[#191115] shadow-sm hover:-translate-y-0.5 hover:bg-[#fdf5f3] hover:text-[#0d090b] hover:shadow-md",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#d49389] select-none text-center cursor-pointer " +
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
