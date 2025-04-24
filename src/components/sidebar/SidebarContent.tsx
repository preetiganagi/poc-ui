import React from "react";
import { layoutVariants } from "./Variants";
import { cn } from "../../utils/cn";
import { LayoutComponentProps } from "./Types";

const SidebarContent: React.FC<LayoutComponentProps> = ({
  children,
  className,
  variant,
  size = "full",
  ...props
}) => {
  return (
    <main
      className={cn(
        "flex-1 overflow-y-auto p-4",
        layoutVariants({ variant, size }),
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
};

export default SidebarContent;
