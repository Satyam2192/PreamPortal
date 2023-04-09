import React from "react";

const About = () => {
  return (
    <div>
      <div className="container mx-auto px-6 py-10 text-center ">
        <h1 className="text-3xl font-bold text-[#df314d] mb-10">
          How Does It Work?
        </h1>

        <h2 className="text-2xl font-bold text-[#210053] mb-6">
          You’re Just 3 Steps Away From A Great Date
        </h2>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:w-1/3 m-3 ">
            <div className="mb-6">
              <div className="relative">
                <div className="flex justify-center">
                  <p className="bg-white absolute top-[-30px] right-[121px] text-[#df314d] border-2 border-[#df314d] rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-[#df314d] hover:text-white md:top-[-30px] md:right-[171px]">
                    Step 01
                  </p>
                </div>
                <div className="flex justify-center mb-4 ">
                  <img
                    src="https://www.linkpicture.com/q/asset21.png"
                    alt="work-img"
                  ></img>
                </div>
              </div>

              <h2 className="text-xl font-bold text-[#210053] mb-2 ">
                Create A Profile
              </h2>
              <p className="text-[#210053]">
                Continua actualize ailers through robu and sertively concepze
                standards compliant commerce after technica sound.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:w-1/3 m-3">
            <div className="mb-6">
              <div className="relative">
                <div className="flex justify-center">
                  <p className="bg-white absolute top-[-30px] right-[121px] text-[#df314d] border-2 border-[#df314d] rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-[#df314d] hover:text-white md:top-[-30px] md:right-[171px]">
                    Step 02
                  </p>
                </div>
                <div className="flex justify-center mb-4 ">
                  <img
                    src="https://www.linkpicture.com/q/asset22.png"
                    alt="work-img"
                  ></img>
                </div>
              </div>
              <h2 className="text-xl font-bold text-[#210053] mb-2">
                Find Matches
              </h2>
              <p className="text-[#210053]">
                Continua actualize ailers through robu and sertively concepze
                standards compliant commerce after technica sound.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:w-1/3 m-3">
            <div className="mb-6">
              <div className="relative">
                <div className="flex justify-center">
                  <p className="bg-white absolute top-[-30px] right-[121px] text-[#df314d] border-2 border-[#df314d] rounded-full w-[54px] h-[54px] flex items-center justify-center hover:bg-[#df314d] hover:text-white md:top-[-30px] md:right-[171px]">
                    Step 03
                  </p>
                </div>
                <div className="flex justify-center mb-4 ">
                  <img
                    src="https://www.linkpicture.com/q/asset23.png"
                    alt="work-img"
                  ></img>
                </div>
              </div>
              <h2 className="text-xl font-bold text-[#210053] mb-2">
                Start Dating
              </h2>
              <p className="text-[#210053]">
                Continua actualize ailers through robu and sertively concepze
                standards compliant commerce after technica sound.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
