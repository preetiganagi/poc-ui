import React, { useState } from "react";
import { Tabs } from "./components/tabs";

const TabsDemo = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabChange = (index: number) => {
    console.log("Selected Tab:", index);
    setSelectedTab(index);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-center">Tabs</h1>

      <div className="w-[95%] mx-auto bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h2 className="text-center font-bold">
          Variant : Underline, Theme: dark
        </h2>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={selectedTab}
          variant="underline"
          value={handleTabChange}
          theme="dark"
        />
        <h2 className="text-center font-bold">
          {" "}
          Variant : Underline, Theme: light
        </h2>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={selectedTab}
          variant="underline"
          value={handleTabChange}
          theme="light"
        />
      </div>

      <div className="w-[95%] mx-auto bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h2 className="text-center font-bold">Filled tabs, Theme: dark</h2>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={selectedTab}
          variant="filled"
          value={handleTabChange}
          theme="dark"
        />
        <h2 className="text-center font-bold"> Theme: Light</h2>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={selectedTab}
          variant="filled"
          value={handleTabChange}
          theme="light"
        />
      </div>

      <div className="w-[95%] mx-auto bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h2 className="text-center font-bold">Variant : Pill, Theme: light</h2>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={selectedTab}
          variant="pill"
          value={handleTabChange}
          theme="light"
        />
      </div>

      <div className="w-[95%] mx-auto bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h2 className="text-center font-bold">
          {" "}
          Variant : Block, Theme : dark
        </h2>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={selectedTab}
          variant="block"
          value={handleTabChange}
          theme="dark"
        />
      </div>
      <div className="w-[95%] mx-auto bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h2 className="text-center font-bold"> Variant : Ghost tabs </h2>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={selectedTab}
          variant="ghost"
          value={handleTabChange}
          theme="light"
        />
      </div>
      <div className="w-[95%] mx-auto bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h2 className="text-center font-bold">
          Variant :Gradient, Theme: glassGradient{" "}
        </h2>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={selectedTab}
          variant="gradient"
          value={handleTabChange}
          theme="glassGradient"
        />
      </div>
      <div className="w-[95%] mx-auto bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h2 className="text-center font-bold">
          Variant : Glow, Theme: glassGradientDark
        </h2>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={selectedTab}
          variant="glow"
          value={handleTabChange}
          theme="glassGradientDark"
        />
      </div>
    </div>
  );
};

export default TabsDemo;
