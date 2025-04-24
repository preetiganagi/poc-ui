import React from "react";
import { layoutVariants } from "./Variants";
import { cn } from "../../utils/cn";
import { LayoutComponentProps } from "./Types";

const SidebarFooter: React.FC<LayoutComponentProps> = ({
  children,
  className,
  variant,
  position = "bottom",
  size,
  ...props
}) => {
  return (
    <footer
      className={cn(
        " fixed  items-center justify-center px-4",
        layoutVariants({ variant, position, size }),
        className
      )}
      {...props}
    >
      {children}
    </footer>
  );
};

export default SidebarFooter;
