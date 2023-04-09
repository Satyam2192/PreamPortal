import { NavLink } from "react-router-dom";
import logo from "../assets (9)/asset 0.png";
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Menbers from "../containers/Menbers";

const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("home");

  return (
    <div className=" w-full py-6 flex  justify-center items-center    overflow-hidden    bg-primary  ">
      <div className=" w-[90%] flex   justify-around  items-center ">
        <img src={logo} alt="" srcset="" />

        <ul className=" text-xl  lg:flex  md:hidden   sm:hidden max-sm:hidden    font-poppins  gap-5   text-dimBlue font-bold ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={Menbers}>Features +</NavLink>

          </li>
          <li>
            <NavLink></NavLink>Community
          </li>
          <li>
            <NavLink>Blog +</NavLink>
          </li>
          <li>
            <NavLink> Contact</NavLink>
          </li>
        </ul>

        <div className=" flex   ">
          <NavLink to="/signup">
            <button className="  w-[99px] h-[54px] border shadow bg-secondary font-poppins font-blod  text-[#df314d] ">
              SIGN UP
            </button>
          </NavLink>
          <NavLink to="/login">
            <button className="w-[99px] h-[54px] border  shadow text-secondary  font-poppins font-blod  bg-[#df314d]">
              {" "}
              LOG IN
            </button>
          </NavLink>
        </div>
      </div>
      <div className=" lg:hidden    p-2   absolute top-12 right-10  ">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className=" text-xl  flex flex-col  justify-center items-center     font-poppins  gap-5   text-dimBlue font-bold ">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Features +</NavLink>
            </li>
            <li>
              <NavLink></NavLink>Community
            </li>
            <li>
              <NavLink>Blog +</NavLink>
            </li>
            <li>
              <NavLink> Contact</NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
