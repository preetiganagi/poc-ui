import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
  animationVariant?: "pill" | "underline" | "none";
  onClick?: () => void;
};

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
  active = false,
  animationVariant = "pill",
  onClick,
}) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={cn(
        "relative flex items-center gap-4 px-4 py-3 cursor-pointer text-sm transition-colors",
        active ? "text-black font-semibold" : "text-gray-500 hover:text-black"
      )}
      initial={false}
      animate={{
        backgroundColor:
          animationVariant === "pill" && active
            ? "rgba(0,0,0,0.05)"
            : "transparent",
        borderRadius: animationVariant === "pill" && active ? "1rem" : "0.5rem",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>

      {animationVariant === "underline" && active && (
        <motion.div
          layoutId="underline"
          className="absolute left-0 bottom-0 h-[2px] w-full bg-black"
        />
      )}

      {animationVariant === "pill" && active && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 bg-black/5 rounded-xl -z-10"
        />
      )}
    </motion.a>
  );
};
