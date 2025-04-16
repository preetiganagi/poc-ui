"use client";

import React, { useState } from "react";
import { Navbar, NavbarProps } from "./components/navbar/index";
import {
  Heart,
  Home,
  Plus,
  Settings,
  User,
  ChevronDown,
  Bed,
} from "lucide-react";
import { a } from "framer-motion/dist/types.d-B50aGbjN";
import NavbarDropdown from "./components/navbar/NavbarDropdown";
import { Variants } from "framer-motion";

const navLinks = ["Home", "About", "Contact"];

type MenuItem = {
  title?: string;
  href?: string;
  submenu?: {
    title: string;
    href: string;
  }[];
  isInput?: boolean; // New property to indicate if the item is an input field
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>; // Props for the input field
};

const NavbarDropdownDemo = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [direction, setDirection] = useState<"horizontal" | "vertical">(
    "horizontal"
  );

  const menuData: MenuItem[] = [
    { title: "Price", href: "/price" },
    { title: "Rooms and beds", href: "/rooms" },
    {
      isInput: true, // Input field menu item
      inputProps: {
        placeholder: "Search...",
        type: "text",
      },
    },
    { title: "Type", href: "/type" },
    { title: "Amenities", href: "/amenities" },
    {
      title: "Services",
      submenu: [
        { title: "Web Development", href: "/services/web" },
        { title: "Mobile Development", href: "/services/mobile" },
      ],
    },
  ];

  return (
    <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-col">
      <h1 className="text-2xl font-bold">Navbar animations</h1>
      <div className="flex gap-4 mb-6 flex-col items-center">
        <label className="flex  items-start">
          Menu dropdown (one level submenu):
        </label>
      </div>
      {/* <NavbarDropdown menu={menuData} animationType="basic" variant="dark" /> */}

      <div className="flex gap-4 mb-6 flex-col items-center">
        <div>
          <p></p>
          {/* <NavbarDropdown
            menu={menuData}
            animationType="creative"
            variant="default"
          /> */}
          <p>
            {" "}
            <h1> Spotlight Animation type: Spotlight </h1>
          </p>
          <NavbarDropdown
            menu={menuData}
            animationType="spotlight"
            variant="dark"
          />
        </div>
        <div>
          <p></p>
          <p></p>

          <p></p>

          <p></p>

          <p>
            {" "}
            <h1> Spotlight Animation type: Basic </h1>
          </p>
          {/* <NavbarDropdown
            menu={menuData}
            animationType="basic"
            variant="default"
          /> */}
        </div>

        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>
            {" "}
            <h1> Spotlight Animation type: Flourish </h1>
          </p>
          {/* <NavbarDropdown
            menu={menuData}
            animationType="flourish"
            variant="primary"
            // direction="vertical"
          /> */}
        </div>
        <div>
          <NavbarDropdown
            menu={[
              { title: "Price", href: "/price" },
              { title: "Rooms and beds", href: "/rooms" },
              {
                isInput: true, // Input field menu item
                inputProps: {
                  placeholder: "Search...",
                  type: "text",
                },
              },
              { title: "Type", href: "/type" },
              { title: "Amenities", href: "/amenities" },
            ]}
            animationType="basic"
            variant="default"
          />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default NavbarDropdownDemo;
