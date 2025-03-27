import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Info,
  Briefcase,
  Settings,
  Mail,
  Menu,
  EyeClosed,
  SidebarClose,
  X,
} from "lucide-react";
import { Navbar, navbarVariants } from ".";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

interface LinkItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  links: LinkItem[];
  brandName?: string;
  position?: "left" | "right" | "bottomLeft" | "bottomRight";
  onClose?: () => void;
}

const sidebarVariants = cva("fixed h-full overflow-hidden transition-all", {
  variants: {
    position: {
      left: "top-0 left-0",
      right: "top-0 right-0",
      bottomLeft: "bottom-0 left-0",
      bottomRight: "bottom-0 right-0",
    },
    isOpen: {
      true: "w-fit h-fit",
      false: "w-20, h-fit",
    },
    variant: {
      default: "bg-gray-900 text-white",
      dark: "bg-black text-white",
      light: "bg-white text-gray-900",
      glass: "bg-white/10 backdrop-blur-lg text-white",
    },

    direction: {
      horizontal: "flex-row",
      vertical: "flex-col items-start",
    },
  },
  defaultVariants: {
    position: "left",
    isOpen: true,
    variant: "default",
    direction: "vertical",
  },
});

const Sidebar: React.FC<SidebarProps> = ({
  links,
  brandName = "Brand",
  position = "left",
  onClose,
  isOpen = true,
  variant,
  className,
  direction,
  ...props
}) => {
  const [open, setOpen] = useState(isOpen);

  const toggleSidebar = () => setOpen((prev) => !prev);

  const handleClose = () => {
    onClose?.();
  };

  return (
    <motion.div
      initial={{ x: position === "left" ? "-100%" : "100%" }}
      animate={{ x: isOpen ? 0 : position === "left" ? "-300%" : "0%" }}
      transition={{ duration: 0.4 }}
      className={cn(
        sidebarVariants({ position, isOpen: open, variant, direction }),
        className
      )}
    >
      {/* Sidebar Header */}
      <div className="p-4 flex items-center justify-between gap-4">
        {open && <h1 className="text-xl font-bold">{brandName}</h1>}
        <button onClick={() => [toggleSidebar(), handleClose()]}>
          {open ? (
            <span title="Close">
              <X size={24} />
            </span>
          ) : (
            <span title="Open">
              <Menu size={24} />
            </span>
          )}
        </button>
      </div>

      {/* Sidebar Links */}
      <motion.nav
        className={cn(
          direction === "horizontal" ? "flex-row" : "flex-col items-start",
          "flex"
        )}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex items-center p-4 gap-4 "
          >
            <link.icon size={24} />
            {open && <span>{link.label}</span>}
          </a>
        ))}
      </motion.nav>
    </motion.div>
  );
};

export default Sidebar;
