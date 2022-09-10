import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import MyPicture from "../assets/Picture.jpg";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg h-full text-white flex flex-col items-center justify-center mx-auto px-4 md:flex-row">
        <div>
          <h1 className="text-4xl md:text-7xl font-bold">
            I'am a Full Stack Developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            Hello,I' m Gangu I' m a Full Stack Beginer and I'm enjoing this
            react, with work
          </p>

          <div className="pb-4">
            <button className="  group w-fit py-3 px-6 flex items-center rounded-md ml-4 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90">
                <AiOutlineArrowRight size={20} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={MyPicture}
            alt=""
            className="w-2/4 mx-auto rounded-2xl md:w-2/3 "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
