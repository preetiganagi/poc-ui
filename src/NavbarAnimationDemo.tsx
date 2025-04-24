"use client";

import React, { useState } from "react";
import { Navbar, NavbarProps } from "./components/navbar/index";
import { Heart, Home, Plus, Search, Settings, User } from "lucide-react";

const navLinks = ["Home", "About", "Contact"];

const NavbarAnimationsDemo = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [direction, setDirection] = useState<"horizontal" | "vertical">(
    "horizontal"
  );

  const menuData = [
    { title: "Home", href: "/" },
    {
      title: "Services",
      submenu: [
        { title: "Web Development", href: "/services/web" },
        { title: "Design", href: "/services/design" },
        { title: "SEO", href: "/services/seo" },
      ],
    },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-col">
      <h1 className="text-2xl font-bold">Navbar animations</h1>
      {/* <div className="flex gap-4 mb-6 flex-col items-center">
        <label className="flex  items-start">
          Select Direction:
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
      </div> */}
      <div className="flex gap-4 mb-6 flex-col items-center ">
        <p className="font-semibold mb-2">Animation type: Spotlight:</p>
        <Navbar
          animationType="spotlight"
          variant="dark"
          className="gap-6"
          direction={direction}
        >
          <a href="#">
            <Home />
          </a>
          <Heart />
          <Plus />
          <User />
          <Settings />
        </Navbar>
        <Navbar animationType="spotlight" variant="dark" className="gap-6">
          <div>
            <a href="">Home</a>
          </div>
          <div>
            <a href="">About</a>
          </div>
          <div>
            <input type="text" placeholder=" Search Here..." />
          </div>
          <div>
            <a href="">Contact</a>
          </div>
        </Navbar>
      </div>
      <div className="flex gap-6 mb-6 flex-col w-full">
        <p className="font-semibold mb-2">Animation type: Basic</p>
        <Navbar variant="primary" animationType="basic">
          <div>
            <a href="">Home</a>
          </div>

          {/* <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div> */}
          <div className="relative w-full max-w-xs">
            {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" /> */}
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <a href="">About</a>
          </div>
          <div>
            <a href="">Contact</a>
          </div>
        </Navbar>
      </div>

      <div className="flex gap-6 mb-6 flex-col ">
        <p className="font-semibold mb-2">Animation type: Glow:</p>
        <Navbar variant="dark" animationType="glow">
          <div className="flex items-center justify-between w-full px-4 py-2">
            <div className="text-lg font-semibold">NavBar Demo</div>
            <div className="flex gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-blue-500 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </Navbar>
      </div>
      <div className="flex gap-6 mb-6 flex-col">
        <p className="font-semibold mb-2">
          Animation type: clickSubmenu( On click show submenu :)
        </p>
        <Navbar
          animationType="clickSubmenu"
          variant="dark"
          header="Click Submenu"
          submenuContent={
            <div className="grid grid-cols-3 gap-8 text-sm text-gray-700">
              <div className="flex flex-col space-y-2">
                <span className="font-semibold text-lg">Benefits</span>
                <span className="font-semibold text-lg">Marketplace</span>
                <span className="font-semibold text-lg">Partners</span>
                <span className="font-semibold text-lg">Community</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-gray-400 text-sm">Company</span>
                <span className="hover:text-black cursor-pointer">Mission</span>
                <span className="hover:text-black cursor-pointer">Pricing</span>
                <span className="hover:text-black cursor-pointer">
                  Business
                </span>
                <span className="hover:text-black cursor-pointer">
                  Partnership
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-gray-400 text-sm">Follow us</span>
                <span className="hover:text-black cursor-pointer">
                  Instagram
                </span>
                <span className="hover:text-black cursor-pointer">
                  Facebook
                </span>
                <span className="hover:text-black cursor-pointer">
                  LinkedIn
                </span>
                <span className="hover:text-black cursor-pointer">TikTok</span>
              </div>
            </div>
          }
        />
      </div>

      <div className="flex gap-6 mb-6 flex-col ">
        <p className="font-semibold mb-2">Animation Type: hoverSubmenu </p>
        <Navbar
          animationType="hoverSubmenu"
          variant="primary"
          header="Hover Submenu"
          submenuContent={
            <div className="flex items-center justify-between w-full px-4 py-2">
              <div className="text-lg font-semibold">NavBar Demo</div>
              <div className="flex gap-6">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default NavbarAnimationsDemo;
