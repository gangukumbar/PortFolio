import React, { useState } from "react";

import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center text-white bg-black fixed w-full h-20  px-4">
      <div>
        <h1 className="text-5xl font-signature ml-5">Gangu</h1>
      </div>
      <ul className="hidden md:flex">
        <li className="px-4  capitalize text-gray-500 hover:scale-105 duration-200 font-medium cursor-pointer">
          <a href="#">Home</a>
        </li>
        <li className="px-4  capitalize text-gray-500 hover:scale-105 duration-200 font-medium cursor-pointer">
          <a href="#">About</a>
        </li>
        <li className="px-4  capitalize text-gray-500 hover:scale-105 duration-200 font-medium cursor-pointer">
          <a href="javascript:void(0)">Portfolio</a>
        </li>

        <li className="px-4  capitalize text-gray-500 hover:scale-105 duration-200 font-medium cursor-pointer">
          <a href="javascript:void(0)">Experience</a>
        </li>
        <li className="px-4  capitalize text-gray-500 hover:scale-105 duration-200 font-medium cursor-pointer">
          <a href="javascript:void(0)">Contact</a>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className=" md:hidden cursor-pointer px-4"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center  left-0 top-0 w-full h-screen  bg-gradient-to-b from-black to-gray-800 text-gray-500 absolute">
          <li className="px-4 py-6 cursor-pointer  text-4xl capitalize">
            <a href="javascript:void(0)">Home</a>
          </li>
          <li className="px-4 py-6 cursor-pointer  text-4xl capitalize">
            <a href="javascript:void(0)">About</a>
          </li>
          <li className="px-4 py-6 cursor-pointer  text-4xl capitalize">
            <a href="javascript:void(0)">Portfolio</a>
          </li>
          <li className="px-4 py-6 cursor-pointer  text-4xl capitalize">
            <a href="javascript:void(0)">Experience</a>
          </li>
          <li className="px-4 py-6 cursor-pointer  text-4xl capitalize">
            <a href="javascript:void(0)">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
