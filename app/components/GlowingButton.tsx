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
    | "emerald"
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
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-8 py-4 text-xs tracking-[0.15em]",
  }[size];

  // Ultra-Luxury Haute Horlogerie & Legal prestige styling aligned with Adonai Soares visual identity
  const variantClasses = {
    // Primary Signature: Brushed Champagne Gold with Specular Inset & Luminous Aura
    gold:
      "relative border border-[#f4ebd6]/85 bg-gradient-to-r from-[#9e7e57] via-[#dfcaa9] to-[#9e7e57] text-[#0b0a08] font-black tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(197,168,130,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.85),inset_0_-1px_1.5px_rgba(0,0,0,0.3)] " +
      "hover:-translate-y-0.5 hover:from-[#b09068] hover:via-[#fbf7ee] hover:to-[#b09068] " +
      "hover:shadow-[0_10px_32px_-2px_rgba(223,202,169,0.7),inset_0_1px_2px_rgba(255,255,255,1)] " +
      "hover:border-[#ffffff] active:translate-y-0 active:shadow-[0_3px_12px_rgba(197,168,130,0.4)]",

    // Deep Forest Emerald Luxury with Champagne Frame (Refined, never neon)
    emerald:
      "relative border border-[#c5a882]/70 bg-gradient-to-r from-[#0a2315] via-[#133924] to-[#0a2315] text-[#fbfaf8] font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(10,35,21,0.6),inset_0_1px_1px_rgba(223,202,169,0.5),inset_0_-1px_1px_rgba(0,0,0,0.4)] " +
      "hover:-translate-y-0.5 hover:border-[#f4ebd6] hover:from-[#0f301e] hover:via-[#194a2f] hover:to-[#0f301e] " +
      "hover:shadow-[0_10px_28px_-2px_rgba(19,57,36,0.7),0_0_20px_rgba(197,168,130,0.25)]",

    champagne:
      "relative border border-[#dfcaa9] bg-gradient-to-r from-[#866843] via-[#c5a882] to-[#866843] text-[#fbfaf8] font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(197,168,130,0.35),inset_0_1px_1px_rgba(255,255,255,0.5)] " +
      "hover:-translate-y-0.5 hover:from-[#9e7e57] hover:via-[#dfcaa9] hover:to-[#9e7e57] hover:shadow-[0_10px_28px_rgba(197,168,130,0.5)]",

    // Warm Obsidian Noir Surface with Champagne Rim & Top Shimmer
    dark:
      "relative border border-[#c5a882]/40 bg-[#12100d] text-[#fbfaf8] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] " +
      "hover:-translate-y-0.5 hover:bg-[#1a1713] hover:border-[#dfcaa9] hover:text-white " +
      "hover:shadow-[0_8px_25px_rgba(197,168,130,0.25)]",

    // Outline with Champagne Accent & Glassmorphism
    outline:
      "relative border border-[#c5a882]/60 bg-[#0b0a08]/60 backdrop-blur-md text-[#dfcaa9] font-bold tracking-[0.13em] " +
      "shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] " +
      "hover:-translate-y-0.5 hover:border-[#f4ebd6] hover:bg-[#c5a882]/15 hover:text-white " +
      "hover:shadow-[0_6px_20px_rgba(197,168,130,0.25)]",

    white:
      "border border-[#ece7df]/20 bg-white/10 text-white backdrop-blur-md shadow-sm hover:-translate-y-0.5 hover:bg-white/15 hover:border-white/40",
    navy:
      "border border-[#c5a882]/60 bg-gradient-to-r from-[#12100d] via-[#1a1713] to-[#12100d] text-[#fbfaf8] font-bold shadow-md shadow-black/60 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg hover:border-[#dfcaa9]",
    ruby:
      "border border-red-500/50 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white font-bold shadow-md hover:-translate-y-0.5 hover:brightness-110",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2.5 rounded-lg font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#dfcaa9] select-none text-center cursor-pointer " +
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
