"use client"

import * as React from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  glowColor?: string;
  variant?: "default" | "aurora" | "rainbow";
  glowClassName?: string;
}

function hexToRgba(hex: string, alpha: number = 1): string {
  let hexValue = hex.replace("#", "");
 
  if (hexValue.length === 3) {
    hexValue = hexValue
      .split("")
      .map((char) => char + char)
      .join("");
  }
 
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);
 
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    console.error("Invalid hex color:", hex);
    return "rgba(0, 0, 0, 1)";
  }
 
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(({
  className,
  children,
  glowColor = "#3b82f6",
  variant = "default",
  glowClassName,
  ...props
}, ref) => {
  if (variant === "aurora") {
    return (
      <div className="relative">
        {/* Gradient border container */}
        <div
          className={cn(
            "absolute -inset-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-cyan-300 to-emerald-400 opacity-75 blur-lg transition-all",
            "group-hover:opacity-100 group-hover:blur-xl",
            glowClassName
          )}
        />

        {/* Button */}
        <button
          ref={ref}
          className={cn(
            "relative rounded-lg bg-background/90 px-4 py-2",
            "text-foreground shadow-xl",
            "transition-all hover:bg-background/70",
            "group border border-border",
            className
          )}
          {...props}
        >
          {children}
        </button>
      </div>
    );
  }

  if (variant === "rainbow") {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

          // before styles
          "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

          // light mode colors
          "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

          // dark mode colors
          "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  // Default glow button
  const glowColorRgba = hexToRgba(glowColor);
  const glowColorVia = hexToRgba(glowColor, 0.075);
  const glowColorTo = hexToRgba(glowColor, 0.2);

  return (
    <button
      ref={ref}
      style={
        {
          "--glow-color": glowColorRgba,
          "--glow-color-via": glowColorVia,
          "--glow-color-to": glowColorTo,
        } as React.CSSProperties
      }
      className={cn(
        "w-full h-12 px-6 text-sm rounded-md border flex items-center justify-center relative transition-colors overflow-hidden bg-gradient-to-t border-r-0 duration-200 whitespace-nowrap",
        "from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 border-primary/20",
        "after:inset-0 after:absolute after:rounded-[inherit] after:bg-gradient-to-r after:from-transparent after:from-40% after:via-[var(--glow-color-via)] after:to-[var(--glow-color-to)] after:via-70% after:shadow-[hsl(var(--foreground)/0.15)_0px_1px_0px_inset] z-20",
        "before:absolute before:w-[5px] hover:before:translate-x-full before:transition-all before:duration-200 before:h-[60%] before:bg-[var(--glow-color)] before:right-0 before:rounded-l before:shadow-[-2px_0_10px_var(--glow-color)] z-10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

GlowButton.displayName = "GlowButton"; 