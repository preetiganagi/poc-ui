// src/App.tsx
import React, { useState } from "react";
import { Navbar, NavbarProps } from "./components/navbar/index";
import {
  Home,
  Info,
  User,
  Briefcase,
  Settings,
  Mail,
  ChevronRight,
} from "lucide-react";
import Sidebar from "./components/navbar/sideNavbar";
import { DynamicNavbar } from "./components/navbar/dynamicNavbar";
import { Breadcrumbs } from "./components/breadcrumbs";
import { Tabs } from "./components/tabs";

const App: React.FC = () => {
  const navLinks = ["Home", "About", "Contact"];
  const links = [
    { label: "Home", href: "#", icon: Home },
    { label: "About", href: "#", icon: Info },
    { label: "Portfolio", href: "#", icon: Briefcase },
    { label: "Services", href: "#", icon: Settings },
    { label: "Contact", href: "#", icon: Mail },
  ];
  const [activeLink, setActiveLink] = useState<string>("Home");
  const [isSidebarOpenLeft, setIsSidebarOpenLeft] = useState(false);
  const [direction, setDirection] = useState<"horizontal" | "vertical">(
    "horizontal"
  );
  const [position, setPosition] = useState<
    "left" | "right" | "bottomLeft" | "bottomRight"
  >("bottomLeft");
  const steps = ["Cart", "Billing", "Shipping", "Payment"];

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <p className="text-2xl font-medium text-center pt-4 pb-2">Navbar</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label>
          Direction:
          <select
            className="border p-2 ml-2"
            value={direction}
            onChange={(e) =>
              setDirection(e.target.value as "horizontal" | "vertical")
            }
          >
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        </label>
        <label>
          select Position for sidebar:
          <select
            className="border p-2 ml-2"
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
          >
            <option value="left">Left</option>
            <option value="right">Right</option>
            <option value="bottomLeft">Bottom Left</option>
            <option value="bottomRight">Bottom Right</option>
          </select>
        </label>
      </div>

      {/* Example with default variant and size */}
      <div className="w-[95%] bg-white justify-center items-center space-y-4">
        <h1 className="text-center font-bold"> Primary Navbar </h1>
        <Navbar
          variant="primary"
          className="flex justify-center space-x-8"
          direction={direction}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`relative px-4 py-2 text-white hover:text-blue-600 transition-all ${
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
        <h1 className="text-center font-bold"> Dynamic links to Navbar </h1>
        <DynamicNavbar
          direction={direction}
          variant="dark"
          brandName="Dynamic Navbar"
          links={links}
        ></DynamicNavbar>

        <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
          <h1 className="text-center font-bold">
            Sidebar (select dropdown for different types sidebar demo)
          </h1>
          <Sidebar
            links={links}
            brandName="MyBrand"
            position={position}
            direction={direction}
          />
        </div>
      </div>
      <h1>Breadcrumbs</h1>
      <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h1 className="text-center font-bold">Text Breadcrumbs:</h1>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Shoes" },
          ]}
          variant="text"
          size="lg"
          separatorIcon={ChevronRight}
        />
      </div>
      <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h1 className="text-center font-bold">Step Breadcrumbs:</h1>
        <Breadcrumbs
          variant="step"
          steps={steps}
          currentStep={2}
          size="lg"
          separatorIcon={ChevronRight}
        />
      </div>
      <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h1 className="text-center font-bold">Custom Breadcrumbs:</h1>
        <Breadcrumbs
          variant="custom"
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Shoes" },
          ]}
          currentStep={1}
          size="lg"
          // separatorIcon={ChevronRight}
          bgColor="green"
          shape="default"
        />
      </div>
      <h1>Tabs</h1>
      <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h1 className="text-center font-bold">Underline tabs:</h1>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={1}
          variant="underline" // Change to "filled", "pill", "block"
          value={(index) => console.log("Selected Tab:", index)}
        />
      </div>
      <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <p className="text-center font-bold">filled tabs:</p>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={1}
          variant="filled" // Change to "filled", "pill", "block"
          value={(index) => console.log("Selected Tab:", index)}
        />
      </div>
      <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h1 className="text-center font-bold">Pill tabs:</h1>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={1}
          variant="pill" // Change to "filled", "pill", "block"
          value={(index) => console.log("Selected Tab:", index)}
        />
      </div>
      <div className="w-[95%] bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h1 className="text-center font-bold">block tabs:</h1>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={1}
          variant="block" // Change to "filled", "pill", "block"
          value={(index) => console.log("Selected Tab:", index)}
        />
      </div>
    </div>
  );
};

export default App;
