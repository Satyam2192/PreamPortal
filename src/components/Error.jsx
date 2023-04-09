import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="top-member-section py-10">
      <div className="container">
        <div className="container mx-auto px-6 py-10 text-center ">
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto mb-10">
            <img
              src="https://www.linkpicture.com/q/LPic643171533b0162072713111.png"
              alt="post-img"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-sans text-[#df314d] mb-10">
            Oops! This Page Not Found
          </h1>

          <h1 className="text-base md:text-lg font-bold text-purple-900 mb-6">
            We are Really Sorry But the Page you Requested is Missing
          </h1>

          <Link
            to="/"
            className="bg-[#df314d] text-white text-[16px] py-2 px-4 rounded-md hover:bg-white hover:text-[#df314d] hover:border-4 transition duration-300"
          >
            Go back to home page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;