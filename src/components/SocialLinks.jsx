import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  return (
    <div className="  hidden lg:flex flex-col  top-[35%] fixed left-0">
      <ul>
        <li className="flex justify-between items-center text-white bg-gray-500 w-40 h-14 px-4  ml-[-100px]  hover:ml-[-10px] hover:rounded-md ">
          <a
            href=" https://www.linkedin.com/in/gangu-kumbar-141626200/ "
            className="flex justify-between items-center w-full"
          >
            LinkedIn
            <FaLinkedin />
          </a>
        </li>

        <li className="flex justify-between items-center text-white bg-gray-500 w-40 h-14 px-4  ml-[-100px]  hover:ml-[-10px] hover:rounded-md ">
          <a
            href=" https://github.com/gangukumbar "
            className="flex justify-between items-center w-full"
          >
            Github
            <FaGithub />
          </a>
        </li>
        <li className="flex justify-between items-center text-white  bg-gray-500 w-40 h-14 px-4 ml-[-100px]  hover:ml-[-10px] hover:rounded-md ">
          <a
            href="mailto:gangukumbar4@gmail.com"
            className="flex justify-between items-center w-full"
          >
            Mail
            <HiOutlineMail />
          </a>
        </li>
        <li className="flex justify-between items-center text-white  bg-gray-500  w-40 h-14 px-4 ml-[-100px]  hover:ml-[-10px]  hover:rounded-md ">
          <a
            href="/Updated_Resume.pdf"
            className="flex justify-between items-center w-full"
          >
            Resume
            <BsFillPersonLinesFill />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
