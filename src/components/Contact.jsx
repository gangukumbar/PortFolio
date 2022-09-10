import React from "react";

function Contact() {
  return (
    <div
      name="Contact"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-screen"
    >
      <div className=" w-full h-full flex flex-col justify-center p-4 mx-auto max-w-screen-lg text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Contact
          </p>
          <p className="text-gray-500 pt-4 pb-4">
            Submit the form below to get in touch with me.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action=" https://getform.io/f/a81d5939-c479-4c10-82ee-3cb2c13df0ca"
            method="POST"
            className=" w-full flex flex-col   mx-auto md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className=" my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your mail"
              className=" my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none "
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message.."
              className="  bg-transparent  border-2 rounded-md focus:outline-none  "
            ></textarea>
            <button className="px-6 my-8 mx-auto py-3 bg-gradient-to-b from-cyan-800 to-cyan-500 rounded-md flex items-center duration-300 hover:scale-110">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
