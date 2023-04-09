import React from "react";
import { Member } from "../constant/Index";

function Menbers() {
  return (
    <div className=" w-[100%]   overflow-hidden bg-secondary pt-28">
      <h1 className="  font-poppins font-bold text-2xl text-btred m  text-center">
        {" "}
        Meet New People Today!
      </h1>
      <h1 className="  font-poppins font-bold text-4xl    mt-5 text-dimBlue text-center">
        {" "}
        New Members in London
      </h1>
      <div className=" w-[80%] flex mt-20 justify-between    flex-wrap items-center  gap-2 mx-auto ">
        {Member.map((man) => {
          return (
            <div
              key={man.id}
              className=" w-[200px] lg:h-[296px] md:h-[200px] sm:w-[100px]   overflow-hidden max-sm:w-[100px] lg:flex-1 flex-col justify-center    bg-secondary shadow"
            >
              <img
                className="  hover:shadow-lg shadow-dimBlue  hover:rounded-full hover:translate-x-4  hover:translate-y-4 transition-all   duration-700 "
                src={man.icon}
                alt=""
              />
              <h1 className="  font-poppins font-bold text-xl    mt-5 text-dimBlue text-center">
                {man.title}{" "}
              </h1>
              <p className="  font-poppins  text-[15px]    mt-2   text-gray-600 text-center">
                {man.Active}
              </p>
            </div>
          );
        })}
      </div>
      <div className=" flex justify-center items-center mb-20 mt-16">
        <a
          className=" w-[176px] f-[50px] bg-btred border py-2  text-center text-white font-poppins font-bold  mr-5 "
          href="#"
        >
          Join Us For Free
        </a>
        <a
          href=""
          className=" w-[176px] f-[50px] bg-btred border shadow-lg py-2 text-center text-white font-poppins font-bold  "
        >
          {" "}
          Our Tv Commercial
        </a>
      </div>
    </div>
  );
}

export default Menbers;