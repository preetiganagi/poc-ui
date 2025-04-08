// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavbarAnimationsDemo from "./NavbarAnimationDemo";
import SidebarDemo from "./SidebarAnimationsDemo";
import TabsDemo from "./TabsAnimationsDemo";
import BreadcrumbsDemo from "./BreadcrumbsDemo";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="flex flex-col p-4 items-center">
      <Navbar animationType="basic" direction="horizontal" variant="dark">
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
      </Navbar>
      <Routes>
        <Route path="/" element={<NavbarAnimationsDemo />} />
        <Route path="/sidebar" element={<SidebarDemo />} />
        <Route path="/tabs" element={<TabsDemo />} />
        <Route path="/breadcrumbs" element={<BreadcrumbsDemo />} />
      </Routes>
    </div>
  );
};

export default App;
