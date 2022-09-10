import React from "react";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import hiz1 from "../assets/hiz1.jpg";
import hiz2 from "../assets/hiz2.jpg";
import hiz3 from "../assets/hiz3.jpg";
import hiz4 from "../assets/hiz4.jpg";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: blog1,
    },

    {
      id: 2,
      src: blog2,
    },
    {
      id: 3,
      src: hiz1,
    },

    {
      id: 4,
      src: hiz2,
    },

    {
      id: 5,
      src: hiz3,
    },
    {
      id: 6,
      src: hiz4,
    },
  ];
  return (
    <div
      name="Portfolio"
      className=" w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-screen "
    >
      <div className="max-w-screen-lg h-full w-full p-4 mx-auto flex flex-col  justify-center">
        <div className=" text-white  pb-8        ">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="text-gray-500 pt-4">Check out my works here</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 md:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className=" h-48 w-full object-cover cursor-pointer duration-300 rounded-lg hover:scale-105"
              />
              <div className="flex items-center justify-center text-gray-400 font-bold">
                <button className="w-1/2  px-6 py-3  m-4 duration-300  hover:scale-105   ">
                  Demo
                </button>

                <button className="w-1/2 px-6 py-3   m-4  duration-300 hover:scale-105 ">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
