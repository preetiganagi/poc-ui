"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { cn } from "../../utils/cn";

// Types
type MenuItem = {
  title?: string;
  href?: string;
  submenu?: {
    title: string;
    href: string;
  }[];
  isInput?: boolean; // New property to indicate if the item is an input field
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>; // Props for the input field
};

type AnimationType =
  | "basic"
  | "creative"
  | "spotlight"
  | "magnetic"
  | "flourish";

type NavbarProps = {
  className?: string;
  menu: MenuItem[];
  animationType?: AnimationType;
  variant?: NavbarVariant;
  size?: NavbarSize;
  weight?: NavbarWeight;
  align?: NavbarAlign;
  direction?: NavbarDirection;
};

type NavbarVariant =
  | "default"
  | "dark"
  | "transparent"
  | "glass"
  | "gradient"
  | "primary";
type NavbarSize = "sm" | "md" | "lg" | "xl";
type NavbarWeight = "light" | "normal" | "medium" | "semibold" | "bold";
type NavbarAlign = "left" | "center" | "right";

type NavbarDirection = "horizontal" | "vertical";

// Variants
const navbarVariants = ({
  variant = "default",
  size = "md",
  weight = "semibold",
  align = "left",
  direction = "horizontal",
}: Partial<NavbarProps>) => {
  const variants = {
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
    direction: {
      horizontal: "flex-row",
      vertical: "flex-col items-start w-60 space-y-4 p-4",
    },
  };

  return `${variants.variant[variant]} ${variants.size[size]} ${variants.weight[weight]} ${variants.align[align]} ${variants.direction[direction]}`;
};

export const animationVariants: Record<string, any> = {
  creative: {
    initial: { opacity: 0, scale: 0.8, y: -10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: -10 },
  },
  spotlight: {
    initial: { opacity: 0.6, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  magnetic: {
    initial: { scale: 0.95 },
    animate: { scale: 1 },
    whileHover: { scale: 1.05 },
  },
  flourish: {
    initial: { opacity: 0, scale: 0.95, y: -10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -10 },
  },
};

const submenuBgByVariant: Record<NavbarVariant, string> = {
  default: "bg-white",
  dark: "bg-gray-800 text-white",
  transparent: "bg-white",
  glass: "bg-white/20 backdrop-blur-md",
  gradient: "bg-gradient-to-br from-blue-500 to-purple-500",
  primary: "bg-blue-500",
};

export default function NavbarDropdown({
  menu,
  animationType = "basic",
  variant = "default",
  weight = "semibold",
  align = "left",
  direction = "horizontal",
  className,
}: NavbarProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (animationType === "magnetic") {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [animationType]);

  const getMagneticTransform = (index: number) => {
    if (!navRef.current) return {};
    const item = navRef.current.children[index] as HTMLElement;
    const rect = item.getBoundingClientRect();
    const dx = mousePosition.x - (rect.left + rect.width / 2);
    const dy = mousePosition.y - (rect.top + rect.height / 2);
    const distance = Math.max(1, Math.sqrt(dx * dx + dy * dy));
    const strength = Math.min(10, 120 / distance);
    return { x: (dx / distance) * strength, y: (dy / distance) * strength };
  };

  return (
    <motion.nav
      className={cn(
        navbarVariants({
          variant,
          weight,
          align,
          direction,
        }),
        className
      )}
    >
      <ul
        className={clsx(
          "relative w-full",
          direction === "horizontal" && "flex",
          animationType === "flourish" && "gap-8 justify-start"
        )}
        ref={navRef}
      >
        {menu.map((item, index) => {
          const isOpen = openIndex === index;
          const transform =
            animationType === "magnetic" ? getMagneticTransform(index) : {};

          return (
            <li
              key={index}
              className={cn("relative")}
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              {" "}
              {item.isInput ? (
                // Render input field if isInput is true
                <div className="flex items-center gap-2 p-3">
                  {variant === "dark" ? (
                    <input
                      {...item.inputProps}
                      className="border text-gray-900 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <input
                      {...item.inputProps}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                </div>
              ) : (
                <motion.a
                  whileHover={
                    animationType === "spotlight"
                      ? {
                          transform,
                          scale: 1.1,
                          background:
                            variant === "dark"
                              ? "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 80%)"
                              : "radial-gradient(circle, rgba(123, 122, 126, 0.91) 0%, rgba(0, 0, 0, 0) 80%)",
                        }
                      : transform
                  }
                  href={item.href || "#"}
                  className="flex items-center gap-1 text-inherit rounded-full p-3 group"
                  {...animationVariants[animationType]}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <span className="relative z-10">{item.title}</span>
                  {item.submenu && (
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  )}
                </motion.a>
              )}
              <AnimatePresence>
                {isOpen && item.submenu && (
                  <motion.ul
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={animationVariants[animationType]}
                    className={clsx(
                      "absolute top-full left-0 mt-2 p-4 rounded-3xl shadow-2xl z-50",
                      submenuBgByVariant[variant],
                      animationType === "flourish" &&
                        "grid grid-cols-3 gap-4 w-[640px]"
                    )}
                  >
                    {item.submenu.map((subItem, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={{
                          initial: { opacity: 0, y: 10 },
                          animate: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: i * 0.05 },
                          },
                        }}
                      >
                        <motion.a
                          href={subItem.href}
                          className={clsx(
                            "block px-4 py-2 text-sm rounded-lg transition-all hover:underline"
                          )}
                          whileHover={
                            animationType === "spotlight"
                              ? {
                                  scale: 1.1,
                                  background:
                                    variant === "dark"
                                      ? "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 80%)"
                                      : "radial-gradient(circle, rgba(123, 122, 126, 0.91) 0%, rgba(0, 0, 0, 0) 80%)",
                                }
                              : undefined
                          }
                        >
                          {subItem.title}
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
