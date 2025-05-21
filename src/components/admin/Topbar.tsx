// @ts-ignore
// @ts-nocheck
import { UserCog, Activity } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

const Topbar = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility on click
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (

    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 ">
      {/* Logo Section */}
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Activity className="h-6 w-6" />
          <span className="text-lg font-semibold mr-64">AdminDash</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="relative ml-96">
            <Input className="w-[200px] md:w-[300px]" placeholder="Search..." />
          </div>
          <div className="relative">
            <button
              className="flex items-center space-x-2 p-1  hover:bg-teal-900 rounded-full"
              onClick={toggleDropdown}
            >
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 z-50 bg-white text-gray-800 shadow-lg rounded-lg border border-gray-300">
                <ul>
                  <Link to={'/admin/settings'} ><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile Settings</li></Link>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </header>

      {/* Navigation and User Section */}
      {/* <div className="flex items-center space-x-4">

        <button className="text-white hover:bg-gray-700 p-2 rounded-full">
          <i className="fas fa-bell"></i>
        </button>

  
        <div className="relative">
          <button
            className="flex items-center space-x-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-full"
            onClick={toggleDropdown}
          >
            <UserCog />
            <span className="hidden md:block">Admin</span>
          </button>

       
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 z-50 bg-white text-gray-800 shadow-lg rounded-lg border border-gray-300">
              <ul>
                <Link to={'/admin/settings'} ><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile Settings</li></Link>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div> */}
    </header>
  );
};

export default Topbar;
