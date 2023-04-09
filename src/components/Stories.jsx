import React from "react";

const Stories = () => {
  return (
    <div
      className="bg-[#fff3f3] bg-cover bg-center py-20"
      style={{
        backgroundImage: `url("https://source.unsplash.com/1920x1080/?love")`,
      }}
    >
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-[#df314d] mb-10 text-center">
          Love in Faith Success Stories
        </h1>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Sweet Stories From Our Lovers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://source.unsplash.com/1920x1920/?couple"
              alt="post-img"
              className="w-full h-64 object-cover transition duration-300 transform hover:scale-110 hover:rotate-3"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#210053] mb-2">
                Image Post Format
              </h2>
              <p className="text-gray-600">
                Seamlessly evolve unique web-readiness with collaboratively
                fabricate best-of-breed applications through.
              </p>
              <button className="bg-[#df314d] text-white py-2 px-4 rounded-full mt-4 hover:bg-white hover:text-[#df314d] border-2 border-[#df314d] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://source.unsplash.com/1920x1920/?romance"
              alt="couple-img"
              className="w-full h-64 object-cover transition duration-300 transform hover:scale-110 hover:rotate-3"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#210053] mb-2">
                Couple Of Month
              </h2>
              <p className="text-gray-600">
                Seamlessly evolve unique web-readiness with collaboratively
                fabricate best-of-breed applications through.
              </p>
              <button className="bg-[#df314d] text-white py-2 px-4 rounded-full mt-4 hover:bg-white hover:text-[#df314d] border-2 border-[#df314d] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://source.unsplash.com/1920x1920/?kiss"
              alt="media-img"
              className="w-full h-64 object-cover transition duration-300 transform hover:scale-110 hover:rotate-3"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#210053] mb-2">
                Media For Blog Article
              </h2>
              <p className="text-gray-600">
                Seamlessly evolve unique web-readiness with collaboratively
                fabricate best-of-breed applications through.
              </p>
              <button className="bg-[#df314d] text-white py-2 px-4 rounded-full mt-4 hover:bg-white hover:text-[#df314d] border-2 border-[#df314d] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;