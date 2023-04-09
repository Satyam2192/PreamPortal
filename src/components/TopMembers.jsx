import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { MdGirl, MdBoy } from "react-icons/md";

const TopMembers = () => {
  const [members, setMembers] = useState([]);
  const [filter, setFilter] = useState("*");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFilter = (e) => {
    setFilter(e.target.dataset.filter);
  };

  return (
    <section className="top-member-section py-10">
      <div className="container">
        <div className="container mx-auto px-6 py-10 text-center ">
          <h1 className="text-3xl md:text-4xl font-bold font-sans text-red-600 mb-10">
            Top Members
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Turulav Members Online Now
          </h2>
        </div>
        <div className="section-wrapper">
          <ul className="button-group text-[#210053] filters-button-group w-full flex flex-wrap justify-center">
            <button
              className={`button ${
                filter === "*" ? "is-checked" : ""
              } filter-btn m-6  focus:bg-[#dc2626] focus:text-white focus:w-[105px] focus:h-[39px] focus:pl-2 focus:ml-8 ...`}
              data-filter="*"
              onClick={handleFilter}
            >
              <span className="flex items-center">
                {" "}
                <FaHeart className="mr-2" />
                Show all
              </span>
            </button>

            <button
              className={`button ${
                filter === ".girl" ? "is-checked" : ""
              } filter-btn m-6 focus:bg-[#dc2626] focus:text-white focus:w-[180px] focus:h-[39px] focus:pl-2 ...`}
              data-filter=".girl"
              onClick={handleFilter}
            >
              <span className="flex items-center">
                {" "}
                <MdGirl className="mr-2" />
                New girl member
              </span>
            </button>
            <button
              className={`button ${
                filter === ".boy" ? "is-checked" : ""
              } filter-btn m-6 focus:bg-[#dc2626] focus:text-white focus:w-[185px] focus:h-[39px] focus:pl-2 ...`}
              data-filter=".boy"
              onClick={handleFilter}
            >
              <span className="flex items-center">
                {" "}
                <MdBoy className="mr-2" />
                New boy member
              </span>
            </button>
          </ul>

          <div className="grid-memberlist grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {members
              .filter((member) => filter === "*" || member.id % 2 === 0)
              .map((member) => (
                <div
                  key={member.id}
                  className={`grid-member filter-item ${
                    member.id % 2 === 0 ? "boy" : "girl"
                  }`}
                >
                  <div className="lab-item member-item style-1 style-2">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img
                          src={member.url}
                          alt={member.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="lab-content">
                        <h6 className="text-lg md:text-xl">{member.title}</h6>
                        <p className="text-[#210053] text-sm md:text-base">
                          Active 1 Day
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopMembers;
