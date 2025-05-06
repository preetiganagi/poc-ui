import { cva, VariantProps } from "class-variance-authority";
import { motion, MotionProps } from "framer-motion";
import { cn } from "../../utils/cn";

import React, { JSX } from "react";

const headingVariants = cva("font-bold tracking-tight", {
  variants: {
    size: {
      default: "text-2xl",
      sm: "text-xl",
      lg: "text-4xl",
      xl: "text-5xl",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
  },
  defaultVariants: {
    size: "default",
    align: "left",
    weight: "bold",
  },
});

const animationVariants = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  bubble: {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 15,
        bounce: 0.4,
      },
    },
  },
  expand: {
    initial: { scale: 1 },
    whileHover: {
      scale: 1.6,
      color: "#93c5fd",
      textShadow: "0px 0px 8px #93c5fd",
    },
  },
};

type MotionVariant = keyof typeof animationVariants;
// type MotionVariant = keyof typeof animationVariants | "expand";

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: keyof JSX.IntrinsicElements;
  animation?: MotionVariant;
  delay?: number;
  duration?: number;
}

export const Heading = ({
  as = "h2",
  className,
  size,
  align,
  weight,
  animation = "fade",
  delay = 0.1,
  duration = 0.4,
  children,
  ...props
}: HeadingProps) => {
  const MotionTag = motion(as) as React.ElementType;

  return (
    <MotionTag
      {...(animation === "expand"
        ? {
            initial: animationVariants.expand.initial,
            whileHover: animationVariants.expand.whileHover,
          }
        : {
            initial: "hidden",
            animate: "visible",
            variants: animationVariants[animation],
            transition:
              animation === "bubble"
                ? animationVariants.bubble.visible.transition
                : { delay, duration },
          })}
      className={cn(headingVariants({ size, align, weight }), className)}
      {...props}
    >
      {children}
    </MotionTag>
  );
};
