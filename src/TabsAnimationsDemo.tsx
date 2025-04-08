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
        <h2 className="text-center font-bold">Underline tabs:</h2>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={selectedTab}
          variant="underline"
          value={handleTabChange}
        />
      </div>

      <div className="w-[95%] mx-auto bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h2 className="text-center font-bold">Filled tabs:</h2>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={selectedTab}
          variant="filled"
          value={handleTabChange}
        />
      </div>

      <div className="w-[95%] mx-auto bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h2 className="text-center font-bold">Pill tabs:</h2>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={selectedTab}
          variant="pill"
          value={handleTabChange}
        />
      </div>

      <div className="w-[95%] mx-auto bg-white p-4 gap-4 rounded-md shadow-lg flex flex-wrap justify-center items-center">
        <h2 className="text-center font-bold">Block tabs:</h2>
        <Tabs
          options={["Recent", "Pending", "Completed"]}
          selected={selectedTab}
          variant="block"
          value={handleTabChange}
        />
      </div>
    </div>
  );
};

export default TabsDemo;
