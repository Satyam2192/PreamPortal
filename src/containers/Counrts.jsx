import React, { useState }  from 'react'

import {conter} from '../constant/Index'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


function Counrts() {
  const [countOn ,setCountON ]=useState(false)
  return (
    <ScrollTrigger onEnter={()=>{
      setCountON(true)
    }}  onExit={()=>{
      setCountON(false)
    }}>
    <div className=" w-[100%]   overflow-hidden   bg-primary  pt-16">
    <h1 className="  font-poppins font-bold text-4xl text-btred m  text-center">
      {" "}
      It All Starts With A Date
    </h1>
    <h1 className="  font-poppins font-bold text-xl    mt-5 text-dimBlue text-center">
      {" "}
      Learn from them and try to make it to this board. <br /> 
      This will for sure boost you visibility and increase your chances to find you loved one.
    </h1>
    <div className=" w-[80%] flex mt-20 justify-between max-sm:w-1/2 flex-1  flex-wrap items-center gap-2  mx-auto ">
      {conter.map((man) => {
        return (
          <div
            key={man.id}
            className=" w-[200px] h-[296px] flex flex-col justify-center  bg-secondary shadow"
          >
            <img
              className="  hover:shadow-lg shadow-dimBlue    hover:rounded-b-full hover:translate-x-4  hover:translate-y-4 transition-all   duration-700 "
              src={man.icon}
              alt=""
            />
            <p className="  font-poppins text-3xl  font-bold      mt-2   text-gray-600 text-center">
               <CountUp start={0} end={man.Number} duration={10} delay={1} />
               +

            </p>
            <div className='w-32 h-1 bg-btred mx-auto '>

            </div>
            
            <h1 className="  font-poppins font-bold text-xl    mt-2 text-dimBlue text-center">
              {man.title}{" "}
            </h1>
          </div>
        );
      })}
    </div>
    <div className=" flex justify-center items-center mt-16">
      <a
        className=" w-[176px] f-[50px] bg-btred border py-2 shadow-lg text-center text-white font-poppins font-bold  mr-5 "
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
  </ScrollTrigger>
  )
}

export default Counrts