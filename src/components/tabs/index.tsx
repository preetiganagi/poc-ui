"use client";

import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsVariants> {
  options: string[];
  selected?: number;
  value?: (index: number) => void;
}

const tabsVariants = cva("flex items-center border-b", {
  variants: {
    variant: {
      underline: "border-b-2 border-transparent border-blue-500", // Option 1, 3, 5, 7, 9
      filled: "bg-blue-500 text-white", // Option 2
      pill: "bg-blue-500 text-white rounded-full px-4 py-2", // Option 4, 6
      block: "border border-gray-300 rounded-md", // Option 10
    },
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "underline",
    size: "md",
  },
});

export const Tabs: React.FC<TabsProps> = ({
  options,
  selected = 0,
  value,
  variant = "underline",
  size = "md",
  className,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(selected);

  return (
    <div className={cn("flex space-x-4", className)} {...props}>
      {options.map((option, index) => (
        <button
          key={option}
          onClick={() => {
            setActiveIndex(index);
            value && value(index);
          }}
          className={cn(
            "px-4 py-2 transition-all",
            index === activeIndex
              ? tabsVariants({ variant, size })
              : "text-gray-500 hover:text-blue-500"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
