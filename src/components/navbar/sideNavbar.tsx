import React, { useState, useRef } from "react";
import {
  HTMLMotionProps,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Home, Info, Briefcase, Settings, Mail, Menu, X } from "lucide-react";
import { Navbar, navbarVariants } from ".";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

interface LinkItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

interface SidebarProps
  extends HTMLMotionProps<"div">,
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
      true: "w-fit",
      false: "w-20",
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

  const sidebarMotion = {
    initial: {
      x: position === "left" ? "-100%" : position === "right" ? "100%" : 0,
      y: position.includes("bottom") ? "100%" : 0,
      opacity: 0,
      scale: 0.95,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      boxShadow: "10px 0px 30px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  const linkMotion = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  const brandPulse = {
    animate: {
      scale: [1, 1.05, 1],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={sidebarMotion}
      className={cn(
        sidebarVariants({ position, isOpen: open, variant, direction }),
        className,
        "shadow-xl rounded-tr-2xl rounded-br-2xl z-40"
      )}
      {...props}
    >
      {/* Sidebar Header */}
      <div className="p-4 flex items-center justify-between gap-4">
        {open && (
          <motion.h1
            className="text-xl font-bold"
            animate={brandPulse.animate}
            transition={brandPulse.transition}
          >
            {brandName}
          </motion.h1>
        )}
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
          <motion.a
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={linkMotion}
            whileHover={{ scale: 1.05, x: 5 }}
            className="flex items-center p-4 gap-4 hover:bg-white/10 rounded-md transition-colors"
            href={link.href}
          >
            <motion.div
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <link.icon size={24} />
            </motion.div>
            {open && (
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {link.label}
              </motion.span>
            )}
          </motion.a>
        ))}
      </motion.nav>
    </motion.div>
  );
};

export default Sidebar;
