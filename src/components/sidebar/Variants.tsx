import { cva } from "class-variance-authority";

export const layoutVariants = cva("transition-all", {
  variants: {
    variant: {
      default: "bg-gray-900 text-white",
      dark: "bg-black text-white",
      light: "bg-white text-gray-900",
      glass: "bg-white/10 backdrop-blur-lg text-white",
    },
    position: {
      top: "top-0 left-0 right-0",
      bottom: "bottom-0 left-0 right-0",
      center: "mx-auto",
    },
    size: {
      sm: "h-12",
      md: "h-16",
      lg: "h-20",
      full: "h-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
