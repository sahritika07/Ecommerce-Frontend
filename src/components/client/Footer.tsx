// @ts-ignore
// @ts-nocheck

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react"; // Add icons or choose any other ones.

const Footer = () => {
  return (
    <div className="bg-[#323232] text-[#d9d9d9] flex flex-col items-center gap-5 px-[8vw] pt-10 mt-24">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-5">
          <div className="text-4xl font-bold text-teal-700">Fashnova</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore dolore ab sunt quas
            culpa, officia mollitia earum vitae dolor, eos sit
          </p>
          
          <div className="flex space-x-6 justify-center md:justify-start">
            <Button
              variant="link"
              className="text-gray-400 hover:text-white transition duration-200"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="link"
              className="text-gray-400 hover:text-white transition duration-200"
              onClick={() => window.open("https://twitter.com", "_blank")}
            >
              <Twitter className="h-6 w-6" />
            </Button>
            <Button
              variant="link"
              className="text-gray-400 hover:text-white transition duration-200"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-teal-700 text-lg font-semibold">COMPANY</h2>
          <ul>
            <li className="mb-2 cursor-pointer hover:underline">Home</li>
            <li className="mb-2 cursor-pointer hover:underline">About Us</li>
            <li className="mb-2 cursor-pointer hover:underline">Delivery</li>
            <li className="mb-2 cursor-pointer hover:underline">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-teal-700 text-lg font-semibold">GET IN TOUCH</h2>
          <ul>
            <li className="mb-2">9876543210</li>
            <li className="mb-2">contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr className="w-full h-[2px] my-2 bg-gray-500 border-none" />

      <p className="text-center text-teal-700 text-sm mb-6">
        Copyright 2024 © Tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
