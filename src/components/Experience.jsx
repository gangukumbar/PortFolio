import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import javascript from "../assets/js.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.jpg";

function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-800",
    },

    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },

    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-blue-500",
    },

    {
      id: 5,
      src: github,
      title: "GITHUB",
      style: "shadow-chocolate-500",
    },

    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-blue-1000",
    },
  ];
  return (
    <div
      name="Experience"
      className="w-full bg-gradient-to-b from-gray-800  to-black hover:h-screen"
    >
      <div className=" max-w-screen-lg h-full w-full p-4 mx-auto flex justify-center flex-col">
        <div className="text-white pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
            Experience
          </p>
          <p className="text-gray-500 pt-4">
            These are the Technologies I've worked with..
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 text-center gap-8 py-8 px-12 md:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "rounded-lg shadow-md hover:scale-105 duration-200 ${style} "
              }
            >
              <img
                src={src}
                alt=""
                className="w-20 mx-auto rounded-lg duration-300 hover:scale-105 "
              />
              <p className="  mt-4 duration-300 hover:scale-105  font-bold text-white">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
