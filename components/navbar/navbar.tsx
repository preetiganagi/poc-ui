// "use client";

// import { motion } from "framer-motion";
// import * as React from "react";
// import { cva, type VariantProps } from "class-variance-authority";
// // import { cn } from "@/utils/cn";

// export interface NavbarProps
//   extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag">,
//     VariantProps<typeof navbarVariants> {}

// const navbarVariants = cva(
//   "flex items-center justify-between px-4 py-3 shadow-md transition-all",
//   {
//     variants: {
//       variant: {
//         default: "bg-white text-gray-900",
//         dark: "bg-gray-900 text-white",
//         transparent: "bg-transparent text-white",
//         glass: "bg-white/10 backdrop-blur-lg text-white",
//         gradient: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
//       },
//       size: {
//         sm: "h-12",
//         md: "h-16",
//         lg: "h-20",
//         xl: "h-24",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "md",
//     },
//   }
// );

// const animations = {
//   slideDown: {
//     initial: { y: -50, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     transition: { duration: 0.5 },
//   },
//   fadeIn: {
//     initial: { opacity: 0 },
//     animate: { opacity: 1 },
//     transition: { duration: 0.5 },
//   },
//   bounce: {
//     initial: { y: -10 },
//     animate: { y: [0, -5, 0] },
//     transition: { duration: 0.3, repeat: Infinity },
//   },
// };

// const Navbar: React.FC<NavbarProps> = ({
//   className,
//   variant,
//   size,
//   children,
//   ...props
// }) => {
//   return (
//     <motion.nav
//       className={cn(navbarVariants({ variant, size }), className)}
//       initial={animations.slideDown.initial}
//       animate={animations.slideDown.animate}
//       transition={{ duration: 0.5 }}
//       onDrag={(event, info) => {
//         console.log(event, info);
//       }}
//     >
//       {children}
//     </motion.nav>
//   );
// };

// Navbar.displayName = "Navbar";

// export { Navbar, navbarVariants };
