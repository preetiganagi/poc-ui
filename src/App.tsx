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
    <div className="flex flex-col  items-center">
      <Navbar animationType="spotlight" variant="dark" className="w-full">
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
      <Routes>
        <Route path="/" element={<NavbarAnimationsDemo />} />
        <Route path="/sidebar" element={<SidebarDemo />} />
        <Route path="/tabs" element={<TabsDemo />} />
        <Route path="/breadcrumbs" element={<BreadcrumbsDemo />} />
        <Route path="/navbarDropdown" element={<NavbarDropdownDemo />} />
      </Routes>
    </div>
  );
};

export default App;
