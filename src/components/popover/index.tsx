import * as PopoverPrimitive from "@radix-ui/react-popover";
import { motion, AnimatePresence } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { ReactNode, useState } from "react";

// Motion animation variants
const motionVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.15 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
  },
  slideUp: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.15 } },
  },
  slideDown: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
  },
  slideLeft: {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, x: 10, transition: { duration: 0.15 } },
  },
  slideRight: {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, x: -10, transition: { duration: 0.15 } },
  },
};

type MotionVariantKey = keyof typeof motionVariants;

// Styling with CVA
const popoverVariants = cva("z-50 border p-4 shadow-xl min-w-[12rem]", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-md",
      md: "rounded-xl",
      full: "rounded-full",
    },
    bg: {
      white: "bg-white dark:bg-zinc-900",
      zinc: "bg-zinc-100 dark:bg-zinc-800",
      slate: "bg-slate-100 dark:bg-slate-800",
      transparent: "bg-transparent",
      default: "bg-white text-gray-900",
      dark: "bg-gray-900 text-white",
      glass: "bg-white/10 backdrop-blur-lg text-blue-200",
      gradient: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
      primary: "bg-blue-400 text-white",
    },
  },
  defaultVariants: {
    size: "md",
    rounded: "md",
    bg: "white",
  },
});

interface PopoverProps extends VariantProps<typeof popoverVariants> {
  trigger: ReactNode;
  children: ReactNode;
  animation?: MotionVariantKey;
  className?: string;
}

export const Popover = ({
  trigger,
  children,
  animation = "scale",
  size,
  rounded,
  bg,
  className,
}: PopoverProps) => {
  const [open, setOpen] = useState(false);

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      <AnimatePresence>
        {open && (
          <PopoverPrimitive.Portal forceMount>
            <PopoverPrimitive.Content asChild sideOffset={8}>
              <motion.div
                key="popover"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={motionVariants[animation]}
                className={cn(
                  popoverVariants({ size, rounded, bg }),
                  className
                )}
              >
                {children}
              </motion.div>
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        )}
      </AnimatePresence>
    </PopoverPrimitive.Root>
  );
};
