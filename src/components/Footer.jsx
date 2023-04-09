import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import "tailwindcss/tailwind.css";

const Footer = () => {
  return (
    <footer className="relative bg-white text-[#210053]">
      <div className="absolute inset-0 bg-[#df314d] opacity-50 animate-pink-bg"></div>
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* 1st column */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">
              Made with
              <div className="grid grid-cols-3 gap-2 inline-block">
                <span className="animate-pulse text-red-500">&hearts;</span>
                <span className="animate-pulse text-red-500">&hearts;</span>
                <span className="animate-pulse text-red-500">&hearts;</span>
              </div>
              by Space Coders
            </h3>
          </div>
          {/* 2nd column */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">Subscribe to Our Newsletter</h3>
            <form action="#" className="mt-4">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md bg-[#fff3f3] text-[#210053]"
              />
              <input
                type="submit"
                value="Subscribe"
                className="mt-4 w-full px-4 py-2 text-white rounded-md bg-[#df314d] hover:bg-white hover:border-2 hover:border-[#df314d] hover:text-[#df314d] transition duration-300 ease-in-out"
              />
            </form>
          </div>
          {/* 3rd column */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">Follow Us On</h3>
            <div className="flex justify-center mt-4">
              <a href="#" className="mr-4">
                <FaTwitter className="text-2xl text-[#1DA1F2] hover:text-[#df314d] transition duration-300 ease-in-out" />
              </a>
              <a href="#" className="mr-4">
                <FaDiscord className="text-2xl text-[#7289DA] hover:text-[#df314d] transition duration-300 ease-in-out" />
              </a>
              <a href="#" className="mr-4">
                <FaInstagram className="text-2xl text-[#E1306C] hover:text-[#df314d] transition duration-300 ease-in-out" />
              </a>
              <a href="#" className="mr-4">
                <FaYoutube className="text-2xl text-[#FF0000] hover:text-[#df314d] transition duration-300 ease-in-out" />
              </a>
            </div>
          </div>
          {/* 4th column */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <h3 className="mt-4">info@turuluv.org</h3>
            <h3 className="mt-4">
              Our office is located at 123 Main St, Anytown, INDIA
            </h3>
          </div>
        </div>
        {/* bottom section */}
        <div className="mt-8 border-t border-[#210053] py-4 flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <p className="text-sm text-[#210053]">
              Learn how we protect your info, read our privacy policy
            </p>
          </div>
          <div className="w-full sm:w-auto text-center mt-4 sm:mt-0">
            <p className="text-sm text-[#210053]">
              Website views not reflecting other organizations/institutions
            </p>
          </div>
          <div className="w-full sm:w-auto text-center mt-4 sm:mt-0">
            <p className="text-sm text-[#210053]">
              &copy; {new Date().getFullYear()} Space coders. All rights
              reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
