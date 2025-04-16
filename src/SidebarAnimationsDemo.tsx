import React, { useState } from "react";
import Sidebar from "./components/navbar/sideNavbar"; // adjust path if needed
import {
  Home,
  Info,
  User,
  Briefcase,
  Settings,
  Mail,
  ChevronRight,
} from "lucide-react";
import { cn } from "./utils/cn";
// const links = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Contact", href: "/contact" },
// ];

export const SidebarDemo = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const [direction, setDirection] = useState<"horizontal" | "vertical">(
    "vertical"
  );
  const [position, setPosition] = useState<
    "left" | "right" | "bottomLeft" | "bottomRight"
  >("left");
  const links = [
    { label: "Home", href: "#", icon: Home },
    { label: "About", href: "#", icon: Info },
    { label: "Portfolio", href: "#", icon: Briefcase },
    { label: "Services", href: "#", icon: Settings },
    { label: "Contact", href: "#", icon: Mail },
  ];

  return (
    <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-col items-center">
      <h1 className="text-center font-bold mb-4">
        Sidebar (select dropdown for different types sidebar demo)
      </h1>

      <div className="flex gap-4 mb-6">
        <label className="flex flex-col items-start">
          Position:
          <select
            value={position}
            onChange={(e) =>
              setPosition(
                e.target.value as
                  | "left"
                  | "right"
                  | "bottomLeft"
                  | "bottomRight"
              )
            }
            className="border px-2 py-1 rounded"
          >
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="bottomRight">BottomRight</option>
            <option value="bottomLeft">BottomLeft</option>
          </select>
        </label>

        <label className="flex flex-col items-start">
          Direction:
          <select
            value={direction}
            onChange={(e) =>
              setDirection(e.target.value as "horizontal" | "vertical")
            }
            className="border px-2 py-1 rounded"
          >
            <option value="vertical">Vertical</option>
            <option value="horizontal">Horizontal</option>
          </select>
        </label>
      </div>

      {/* <Sidebar
        links={[
          { label: "Home", href: "/", icon: Home },
          { label: "Projects", href: "/projects", icon: Briefcase },
        ]}
        animationVariant="morph"
        linkAnimationVariant="float"
        variant="dark"
        position={position}
        direction={direction}
      /> */}
      <Sidebar variant="light" links={links} brandName="NEW DEMO"></Sidebar>
    </div>
  );
};

export default SidebarDemo;
