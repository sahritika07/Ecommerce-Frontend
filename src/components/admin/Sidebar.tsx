"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { LayoutDashboard, User, Package, Settings, Tags } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button (Mobile) */}
      <Button
        className="fixed top-4 left-4 z-50 md:hidden"
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Sidebar Container */}
      <aside
        className={`fixed md:relative top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 
          shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold ml-3 text-teal-600">Admin Panel</h2>
          {/* Close Button (Mobile) */}
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Sidebar Navigation */}

<nav className="space-y-3">
  {[
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Users", path: "/admin/users", icon: <User className="w-5 h-5" /> },
    { name: "Products", path: "/admin/products", icon: <Package className="w-5 h-5" /> },
    { name: "Category", path: "/admin/category", icon: <Tags className="w-5 h-5" /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
  ].map((item) => (
    <Link
      key={item.path}
      to={item.path}
      className="flex items-center gap-3 p-3 text-gray-300 hover:bg-teal-600 hover:text-white rounded-lg transition"
    >
      {item.icon}
      {item.name}
    </Link>
  ))}
</nav>


        {/* Logout Button (Fixed at Bottom) */}
        <div className="absolute bottom-6 left-6 right-6">
          <Button
            variant="destructive"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Overlay for Mobile (Click to Close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
