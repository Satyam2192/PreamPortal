import React from "react";
import { GrFacebook } from "react-icons/gr";

import assent1 from "../assets (9)/asset 2.png";
import assent2 from "../assets (9)/01.png";
import assent3 from "../assets (9)/02.png";
import assent4 from "../assets (9)/03.png";
import assent5 from "../assets (9)/04.png";
import assent6 from "../assets (9)/05.png";
import assent7 from "../assets (9)/06.png";
import assent8 from "../assets (9)/07.png";

import assent9 from "../assets (9)/08.png";
import form1 from "../assets (9)/asset 52.png";
import form2 from "../assets (9)/asset 53.png";

function Hero() {
  return (
    <>
      <div className="w-full  flex justify-center   items-center overflow-hidden    bg-primary  ">
        <div className=" relative lg:flex-row flex-1    sm:flex-col  max-sm:flex-col md:flex-col  w-[90%] flex  justify-around items-center">
          <div className="  md:mt-20   sm:mt-10 max-sm:mt-10 relative md:mb-10 ">
            <img
              src={form1}
              className=" absolute -right-16 -top-10 z-[20]"
              alt=""
            />
            <img
              src={form2}
              className=" absolute  -bottom-14 -left-10 z-[20]"
              alt=""
            />

            <form className=" overflow-hidden    relative flex w-[420px] h-[600px] p-10 flex-col gap-6    border-8  border-[#df314d]  ">
              <h1 className=" text-3xl  font-poppins   text-dimBlue font-bold">
                Introducing TuruLav
              </h1>
              <p className="text-[16px]  text-dimBlue font-poppins  ">
                Serious Dating With TuruLav Your Perfect Match is Just a Click
                Away.
              </p>
              <div className="flex overflow-hidden    justify-between items-center  gap-6 ">
                <label for="Gender"> I am a :</label>
                <select
                  className="w-[70%] p-1  border border-black"
                  name="Gender"
                  id="Gender"
                >
                  <option value="Select Gender">Select Gender</option>
                  <option value="Female">Male</option>
                  <option value="Female">Female</option>
                  <option value="thers">Others</option>
                </select>
              </div>
              <div className="flex justify-center overflow-hidden   items-center  gap-5 ">
                <label for="Gender"> Loking for:</label>
                <select
                  className="w-[70%] p-1  border border-black"
                  name="Gender"
                  id="Gender"
                >
                  <option value="Select Gender">Select Gender</option>
                  <option value="Female">Male</option>
                  <option value="Female">Female</option>
                  <option value="thers">Others</option>
                </select>
              </div>
              <div className="flex justify-between items-center  gap-6 ">
                <label for="Age">age:</label>
                <select
                  className="w-[70%]  p-1  border border-black"
                  name="Age"
                  id="Age"
                >
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                </select>
              </div>
              <div className="flex justify-between items-center  gap-6">
                <label for="city">City:</label>
                <input
                  for="City"
                  className="w-[70%] border border-black  py-1 text-center  text-dimBlue font-poppins"
                  type="text"
                  placeholder="Your city Name"
                />
              </div>

              <button className="w-full border py-2 text-white font-poppins bg-[#df314d]">
                Find Your Partner
              </button>
              <div></div>
            </form>
          </div>
          <div className=" relative overflow-hidden   pt-40 ">
            <img
              className=" absolute right-20 top-32 animate-bounce  "
              src={assent2}
              alt=""
              srcset=""
            />
            <img className="w-[90%] h-[90%]" src={assent1} alt="" srcset="" />

            <img
              className=" absolute -left-32 top-60 animate-bounce  "
              src={assent3}
              alt=""
              srcset=""
            />
            <img
              className=" absolute    left-32 top-80 animate-spin  "
              src={assent4}
              alt=""
              srcset=""
            />
            <img
              className=" absolute left-0 top-20 animate-bounce  "
              src={assent5}
              alt=""
              srcset=""
            />
            <img
              className=" absolute   bottom-0   right-5 animate-spin"
              src={assent6}
              alt=""
              srcset=""
            />

            <img
              className=" absolute left-4 top-28 animate-bounce  "
              src={assent7}
              alt=""
              srcset=""
            />
            <img
              className=" absolute animate-spin left-2 top-1/2   "
              src={assent8}
              alt=""
              srcset=""
            />
            <img
              className=" absolute   bottom-20  animate-bounce  "
              src={assent9}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
