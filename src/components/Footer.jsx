import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { FaTwitter, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import "tailwindcss/tailwind.css";

const Footer = () => {
  return (

    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* 1st column */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">Pream Portal</h3>
            <p className="mt-4">lzdmvbsdjkv</p>
          </div>
          {/* 2nd column */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">
                adjkbjkasbbjwnc
            </h3>
            <form action="#" className="mt-4">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
              />
              <input
                type="submit"
                value="Subscribe"
                className="mt-4 w-full px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out"
              />
            </form>
          </div>
          {/* 3rd column */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">Follows Us On</h3>
            
          </div>
          {/* 4th column */}
          <div className="text-center">
            <h3 className="text-2xl font-bold">Call Us</h3>
            <h3 className="mt-4">info@preamportal.org</h3>
            <h3 className="mt-4">
              Our office is located at 123 Main St, Anytown, USA
            </h3>
          </div>
        </div>
        {/* bottom section */}
        <div className="mt-8 border-t border-gray-700 py-4 flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <p className="text-sm">
              Learn how we protect your info, read our privacy policy
            </p>
          </div>
          <div className="w-full sm:w-auto text-center">
            <p className="text-sm">
              Website views not reflecting other organizations/institutions
            </p>
          </div>
          <div className="w-full sm:w-auto text-center">
            <p className="text-sm">
              @{new Date().getFullYear()} ©Copyright SK Earth Savers. All rights
              reserved
            </p>
          </div>
          <div className="w-full sm:w-auto text-center sm:text-right">
            <p className="text-sm">
              By using our website, you agree to our terms and conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
