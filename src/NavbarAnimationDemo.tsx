"use client";

import React, { useState } from "react";
import { Navbar, NavbarProps } from "./components/navbar/index";

const navLinks = ["Home", "About", "Contact"];

const NavbarAnimationsDemo = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [direction, setDirection] = useState<"horizontal" | "vertical">(
    "horizontal"
  );

  return (
    <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-col">
      <h1 className="text-2xl font-bold">Navbar animations</h1>
      <div className="flex gap-4 mb-6 flex-col items-center">
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
      </div>
      <div>
        <p className="font-semibold mb-2">Basic:</p>
        <Navbar animationType="basic" direction={direction} variant="primary">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`relative px-4 py-2 text-white transition-all ${
                activeLink === link ? "text-blue-900" : ""
              }`}
            >
              {link}
              {activeLink === link && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600"></span>
              )}
            </button>
          ))}
        </Navbar>
      </div>
      <div>
        <p className="font-semibold mb-2">Glow:</p>
        <Navbar variant="default" direction={direction} animationType="glow">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </Navbar>
      </div>

      <div>
        <p className="font-semibold mb-2">Scroll:</p>
        <Navbar variant="gradient" direction={direction} animationType="scroll">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </Navbar>
      </div>

      <div>
        <p className="font-semibold mb-2">Theme:</p>
        <Navbar animationType="theme" direction={direction} variant="glass">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`relative px-4 py-2 text-white transition-all ${
                activeLink === link ? "text-blue-900" : ""
              }`}
            >
              {link}
              {activeLink === link && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600"></span>
              )}
            </button>
          ))}
        </Navbar>
      </div>

      <div>
        <p className="font-semibold mb-2">Shake:</p>
        <Navbar animationType="shake" direction={direction} variant="dark">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`relative px-4 py-2 text-white transition-all ${
                activeLink === link ? "text-blue-900" : ""
              }`}
            >
              {link}
              {activeLink === link && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600"></span>
              )}
            </button>
          ))}
        </Navbar>
      </div>

      <div>
        <p className="font-semibold mb-2">Blur:</p>
        <Navbar animationType="blur" direction={direction} variant="primary">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`relative px-4 py-2 text-white transition-all ${
                activeLink === link ? "text-blue-900" : ""
              }`}
            >
              {link}
              {activeLink === link && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600"></span>
              )}
            </button>
          ))}
        </Navbar>
      </div>

      <div>
        <p className="font-semibold mb-2">Slide:</p>
        <Navbar animationType="slide" direction={direction} variant="primary">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`relative px-4 py-2 text-white transition-all ${
                activeLink === link ? "text-blue-900" : ""
              }`}
            >
              {link}
              {activeLink === link && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600"></span>
              )}
            </button>
          ))}
        </Navbar>
      </div>

      <div>
        <p className="font-semibold mb-2">Stagger:</p>
        <Navbar animationType="stagger" direction={direction} variant="primary">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`relative px-4 py-2 text-white transition-all ${
                activeLink === link ? "text-blue-900" : ""
              }`}
            >
              {link}
              {activeLink === link && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600"></span>
              )}
            </button>
          ))}
        </Navbar>
      </div>
      <div>
        <p className="font-semibold mb-2">Magnetic:</p>
        <Navbar
          animationType="magnetic"
          direction={direction}
          variant="primary"
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`relative px-4 py-2 text-white transition-all ${
                activeLink === link ? "text-blue-900" : ""
              }`}
            >
              {link}
              {activeLink === link && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600"></span>
              )}
            </button>
          ))}
        </Navbar>
      </div>
      <div>
        <p className="font-semibold mb-2">Rotate:</p>
        <Navbar animationType="rotate" direction={direction} variant="primary">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`relative px-4 py-2 text-white transition-all ${
                activeLink === link ? "text-blue-900" : ""
              }`}
            >
              {link}
              {activeLink === link && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600"></span>
              )}
            </button>
          ))}
        </Navbar>
      </div>

      <div>
        <p className="font-semibold mb-2">Wave:</p>
        <Navbar animationType="wave" direction={direction} variant="primary">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`relative px-4 py-2 text-white transition-all ${
                activeLink === link ? "text-blue-900" : ""
              }`}
            >
              {link}
              {activeLink === link && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600"></span>
              )}
            </button>
          ))}
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarAnimationsDemo;
