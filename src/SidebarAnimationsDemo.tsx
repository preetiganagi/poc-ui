import { BarChart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Home, Info, User, Briefcase, Settings, Mail } from "lucide-react";
import Sidebar from "./components/sidebar/Sidebar";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const links = [
    { label: "Home", href: "#", icon: Home },
    { label: "About", href: "#", icon: Info },
    { label: "Portfolio", href: "#", icon: Briefcase },
    { label: "Services", href: "#", icon: Settings },
    { label: "Contact", href: "#", icon: Mail },
  ];
  return (
    <div className="flex flex-col items-center">
      <Sidebar
        brandName="My Brand"
        variant="default"
        position="left"
        links={links}
      />
    </div>
  );
}
