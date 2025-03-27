"use client";

import { motion } from "framer-motion";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

export interface NavbarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarVariants> {
  isOpen?: boolean;
}

const navbarVariants = cva(
  "flex items-center justify-between px-4 py-3 shadow-md transition-all",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-900",
        dark: "bg-gray-900 text-white",
        transparent: "bg-transparent text-white",
        glass: "bg-white/10 backdrop-blur-lg text-white",
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
        vertical: "flex-col items-start w-60 space-y-4 p-4 ",
      },
    },
    defaultVariants: {
      // size: "md",
      weight: "semibold",
      align: "left",
      // textColor: "default",
      direction: "horizontal",
    },
  }
);

const animations = {
  slideDown: {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
    transition: { duration: 0.5 },
  },
  slideLeft: {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -200, opacity: 0 },
    transition: { duration: 0.5 },
  },
};

const Navbar: React.FC<NavbarProps> = ({
  className,
  variant,
  size,
  direction,
  children,
  isOpen = true,
  ...props
}) => {
  return (
    <motion.nav
      className={cn(
        navbarVariants({ variant, size, direction, ...props }),
        className
      )}
      initial={
        direction === "vertical"
          ? animations.slideLeft.initial
          : animations.slideDown.initial
      }
      animate={
        direction === "vertical"
          ? animations.slideLeft.animate
          : animations.slideDown.animate
      }
      exit={
        direction === "vertical"
          ? animations.slideLeft.exit
          : animations.slideDown.exit
      }
      transition={
        direction === "vertical"
          ? animations.slideLeft.transition
          : animations.slideDown.transition
      }
    >
      {children}
    </motion.nav>
  );
};

Navbar.displayName = "Navbar";

export { Navbar, navbarVariants };
