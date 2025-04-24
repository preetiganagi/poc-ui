import { VariantProps } from "class-variance-authority";
import { layoutVariants } from "./Variants";

export interface LayoutComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {}
