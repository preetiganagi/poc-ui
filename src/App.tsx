// src/App.tsx
import React, { useState } from "react";
import { Navbar, NavbarProps } from "./components/navbar/index";
import { Home, Info, User, Briefcase, Settings, Mail } from "lucide-react";
import Sidebar from "./components/navbar/sideNavbar";
import { DynamicNavbar } from "./components/navbar/dynamicNavbar";

const App: React.FC = () => {
  const [isSidebarOpenRight, setIsSidebarOpenRight] = useState(false);
  const [isSidebarOpenLeft, setIsSidebarOpenLeft] = useState(false);

  const handleSignIn = () => {
    console.log("Sign In Clicked");
  };
  const navLinks = [
    "Home",
    "Features",
    "Company",
    "Pricing",
    "Customers",
    "Support",
  ];
  const links = [
    { label: "Home", href: "#", icon: Home },
    { label: "About", href: "#", icon: Info },
    { label: "Portfolio", href: "#", icon: Briefcase },
    { label: "Services", href: "#", icon: Settings },
    { label: "Contact", href: "#", icon: Mail },
  ];

  const [activeLink, setActiveLink] = useState("Home");
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <p className="text-2xl font-medium text-center pt-4 pb-2">Navbar</p>
      {/* Example with default variant and size */}
      <div className="w-[95%] bg-white justify-center items-center">
        <h1 className="text-center text-bold"> Basic Navbar </h1>
        <Navbar variant="gradient" size="sm">
          <a className="hover:underline">Home</a>
          <a className="hover:underline">About</a>
          <a className="hover:underline">Contact</a>
        </Navbar>
        <h1 className="text-center text-bold"> Primary Navbar </h1>
        <Navbar
          variant="primary"
          size="md"
          className="flex justify-center space-x-8"
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`relative px-4 py-2  text-white hover:text-blue-600 transition-all ${
                activeLink === link ? "text-blue-900" : ""
              }`}
            >
              {link}
              {activeLink === link && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 text-white"></span>
              )}
            </button>
          ))}
        </Navbar>
        <h1 className="text-center text-bold"> Dynamic links to Navbar </h1>
        <DynamicNavbar
          brandName="Brand Name"
          links={links}
          direction="vertical"
          variant="dark"
        ></DynamicNavbar>

        <h1 className="text-center text-bold">
          Show Sidebar: pass links and brand name to Sidebar
        </h1>
        <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
          <button
            onClick={() => setIsSidebarOpenLeft(true)}
            className="p-4 bg-blue-500 text-white rounded-md"
          >
            Show Sidebar left
          </button>

          {isSidebarOpenLeft && (
            <Sidebar
              links={links}
              brandName="MyBrand"
              onClose={() => setIsSidebarOpenLeft(false)}
              position="left"
              direction="vertical"
            />
          )}

          <Sidebar
            links={links}
            brandName="MyBrand"
            position="right"
            variant="default"
            direction="horizontal"
          />
          <Sidebar
            links={links}
            brandName="MyBrand"
            position="bottomLeft"
            direction="vertical"
          />
        </div>

        <h1>Vericle Navbar</h1>
        <Navbar variant="gradient" direction="vertical">
          <a className="hover:underline">Home</a>
          <a className="hover:underline">About</a>
          <a className="hover:underline">Contact</a>
        </Navbar>
      </div>
    </div>
  );
};

export default App;
