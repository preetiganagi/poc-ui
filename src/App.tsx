// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarAnimationsDemo from "./NavbarAnimationDemo";
import SidebarDemo from "./SidebarAnimationsDemo";
import TabsDemo from "./TabsAnimationsDemo";
import BreadcrumbsDemo from "./BreadcrumbsDemo";
import { Navbar } from "./components";
import NavbarDropdownDemo from "./NavbarDropdownDemo";

const App = () => {
  return (
    <div className="flex flex-col justify-between w-full h-screen bg-gray-100 ">
      <div>
        <Navbar animationType="spotlight" variant="primary" className="w-full">
          <Link to="/" className="flex p-4 mb-4 float-left">
            Animations
          </Link>
          <Link to="/" className="flex p-4 mb-4">
            Navbar
          </Link>
          <Link to="/sidebar" className="flex p-4 mb-4">
            Sidebar
          </Link>
          <Link to="/tabs" className="flex p-4 mb-4">
            Tabs
          </Link>
          <Link to="/breadcrumbs" className="flex p-4 mb-4">
            Breadcrumbs
          </Link>
          <Link to="/navbarDropdown" className="flex p-4 mb-4">
            Navbar Dropdown
          </Link>
        </Navbar>
      </div>
      <div className="flex-1 pt-16 overflow-y-auto">
        {" "}
        <Routes>
          <Route path="/" element={<NavbarAnimationsDemo />} />
          <Route path="/sidebar" element={<SidebarDemo />} />
          <Route path="/tabs" element={<TabsDemo />} />
          <Route path="/breadcrumbs" element={<BreadcrumbsDemo />} />
          <Route path="/navbarDropdown" element={<NavbarDropdownDemo />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
