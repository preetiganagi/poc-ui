import React from "react";
import { layoutVariants } from "./Variants";
import { cn } from "../../utils/cn";
import { LayoutComponentProps } from "./Types";

const SidebarHeader: React.FC<LayoutComponentProps> = ({
  children,
  className,
  variant,
  position = "top",
  size,
  ...props
}) => {
  return (
    <header
      className={cn(
        "w-full z-50 flex items-center px-4",
        layoutVariants({ variant, position, size }),
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
};

export default SidebarHeader;
