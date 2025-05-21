
// @ts-ignore
// @ts-nocheck
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, User, ShoppingCart } from "lucide-react"; // ChevronDown for dropdown indicator
import axios from "axios";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const user:any = JSON.parse(localStorage.getItem('user'))

  const userDetails = user?.user;
  const [isOpen, setIsOpen] = useState(false);


    // console.log("useruser",userDetails);
    //     console.log("useruser",userDetails?.name);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // state for toggling profile menu


  const [logo, setLogo] = useState("Fashnova");



  console.log("logo",logo)
  

  

  const handleLogout = () => {
    localStorage.removeItem("user"); // or localStorage.clear() to remove all
    navigate("/login");
  };


  return (
    <nav className="bg-gradient-to-r from-emerald-500 to-teal-600  hover:from-emerald-600 hover:to-teal-700 text-white p-2 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {!logo?   <img src={logo} alt="logo" style={{width:"100px", height:"50px"}} />:
         <h1 className="text-2xl pl-10 font-bold tracking-wide">{logo}</h1>}
       
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/client" className="p-2 hover:text-gray-200 transition">Home</Link>
          <Link to="/client/products" className="p-2 hover:text-gray-200 transition">Products</Link>
          {/* <Link to="/client/game" className="p-2 hover:text-gray-200 transition">Game</Link> */}
          {/* <Link to="/client/cart" className="p-2 hover:text-gray-200 transition"><ShoppingCart /></Link> */}
          
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 p-2 hover:text-gray-200 transition"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} // Toggle profile menu visibility
            >
              {/* <img
                src="https://via.placeholder.com/40" // Placeholder profile image
                alt="Profile"
                className="rounded-full w-10 h-10 object-cover"
              /> */}
               <User />
              <ChevronDown size={16} />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 bg-gradient-to-r from-emerald-500 to-teal-600  hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg shadow-md w-44 py-2">
                {/* Profile Display */}
             
                  <div className="flex items-center space-x-2">
                    {/* <img
                      src="https://via.placeholder.com/40" // Placeholder profile image
                      alt="Profile"
                      className="rounded-full w-12 h-12 object-cover"
                    /> */}
                     {/* <User /> */}
                    <div>
                      <p className="font-semibold">{userDetails?.name}</p> {/* Replace with dynamic name */}
                      <p className="text-sm text-gray-400">{userDetails?.email}</p> {/* Replace with dynamic email */}
                    </div>
                  </div>
        

                {/* Dropdown Menu */}
                <Link to="/client/profile" className="block px-2 py-2 hover:bg-teal-700">Profile Settings</Link>
                <p onClick={handleLogout}className="block px-2 py-2 hover:bg-teal-700">Logout</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 bg-gray-400 p-4 rounded-lg shadow-md">
          <Link to="/client" className="p-2 hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/client/products" className="p-2 hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>Products</Link>
          {/* <Link to="/client/game" className="p-2 hover:text-gray-200 transition">Game</Link> */}
          {/* <Link to="/client/cart" className="p-2 hover:text-gray-200 transition"><ShoppingCart /></Link> */}

          {/* Profile Dropdown for Mobile */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 p-2 hover:text-gray-200 transition"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} // Toggle profile menu visibility
            >
              {/* <img
                src="https://via.placeholder.com/40" // Placeholder profile image
                alt="Profile"
                className="rounded-full w-10 h-10 object-cover"
              /> */}
              <User />
              <ChevronDown size={16} />
            </button>

            {/* Mobile Profile Dropdown Menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 bg-black text-white rounded-lg shadow-md w-64 py-2">
                {/* Profile Display */}
                <div className="px-4 py-2 border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://via.placeholder.com/40" // Placeholder profile image
                      alt="Profile"
                      className="rounded-full w-12 h-12 object-cover"
                    />
                    <div>
                      <p className="font-semibold">{userDetails?.name}</p> {/* Replace with dynamic name */}
                      <p className="text-sm text-gray-400"> {userDetails?.email}</p> {/* Replace with dynamic email */}
                    </div>
                  </div>
                </div>

                {/* Dropdown Menu */}
                <Link to="/client/profile" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Profile Settings</Link>
                <p onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-700" >Logout</p>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
