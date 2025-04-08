"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { useEffect, useState } from "react";
import { once } from "events";

export interface NavbarProps
  extends Omit<HTMLMotionProps<"nav">, "ref">,
    VariantProps<typeof navbarVariants> {
  isOpen?: boolean;
  animationType?:
    | "slide"
    | "wave"
    | "rotate"
    | "blur"
    | "scroll"
    | "glow"
    | "stagger"
    | "magnetic"
    | "theme"
    | "shake"
    | "basic"
    | "slideLeft"
    | "slideRight"
    | "slideUp";
  direction?: "horizontal" | "vertical";
}

const navbarVariants = cva(
  "flex items-center justify-between px-4 py-3 shadow-md transition-all",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-900",
        dark: "bg-gray-900 text-white",
        transparent: "bg-transparent text-transparent",
        glass: "bg-white/10 backdrop-blur-lg text-blue-200",
        gradient: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
        primary: "bg-blue-400 text-white",
      },
      size: {
        sm: "h-12",
        md: "h-16",
        lg: "h-20",
        xl: "h-24",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      textColor: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
        accent: "text-accent",
        white: "text-white",
      },
      direction: {
        horizontal: "flex-row",
        vertical: "flex-col items-start w-60 space-y-4 p-4",
      },
    },
    defaultVariants: {
      weight: "semibold",
      align: "left",
      direction: "horizontal",
    },
  }
);

const animationVariants: Record<string, Partial<HTMLMotionProps<"nav">>> = {
  slide: {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
    transition: { repeat: Infinity, duration: 6 },
  },
  wave: {
    whileHover: {
      scale: 1.1,
      rotate: [0, 2, -2, 2, -2, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  },
  rotate: {
    whileHover: { rotate: 360, transition: { duration: 1 } },
  },
  blur: {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    transition: { repeat: Infinity, duration: 3 },
  },
  scroll: {
    initial: { scale: 1 },
    animate: { scale: 0.95 },
    transition: { repeat: Infinity, duration: 2 },
  },
  glow: {
    whileHover: {
      boxShadow: "0 0 25px 8px rgba(0, 123, 255, 0.7)",
      transition: { duration: 0.5 },
    },
  },
  stagger: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { repeat: Infinity, staggerChildren: 0.1, duration: 0.5 },
  },
  magnetic: {
    whileHover: {
      scale: 1.08,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
      },
    },
  },
  theme: {
    initial: { backgroundColor: "#fff" },
    animate: { backgroundColor: "#000", color: "#fff" },
    transition: { repeat: Infinity, duration: 4 },
  },
  shake: {
    whileHover: {
      x: [0, -10, 10, -10, 10, -6, 6, -4, 4, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  },
  slideLeft: {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -200, opacity: 0 },
    transition: { repeat: Infinity, duration: 0.5 },
  },
  slideRight: {
    initial: { x: 200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 200, opacity: 0 },
    transition: { duration: 0.5 },
  },
  slideUp: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
    transition: { duration: 0.5 },
  },
};

const Navbar: React.FC<NavbarProps> = ({
  className,
  variant,
  size,
  direction = "horizontal",
  children,
  isOpen = true,
  animationType = "slide",
  ...props
}) => {
  const animation = animationVariants[animationType] || {};
  return (
    <motion.nav
      className={cn(navbarVariants({ variant, size, direction }), className)}
      {...animation}
      {...props}
    >
      {children}
    </motion.nav>
  );
};

Navbar.displayName = "Navbar";

export { Navbar, navbarVariants };
