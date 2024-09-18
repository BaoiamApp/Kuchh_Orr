import React from "react";
import OurHands from "../../assets/Team/TeamHands.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const JoinUs = () => {
  return (
    <div className="w-full h-52 md:h-80 my-6 relative">
      <div className="absolute w-full h-full hover:opacity-100 backdrop-blur-sm bg-black/80"></div>
      <img
        src={OurHands}
        alt="Join Us"
        className="w-full absolute-z-10 h-full object-cover"
      />
      <div className="flex absolute top-0 right-0 items-center gap-4 z-20 w-full h-full justify-center flex-col">
        <h1 className="text-white text-xl max-w-[80%] text-center md:text-2xl lg:text-4xl font-serif">
          Join Our <span className="text-indigo-500 uppercase">Team</span>{" "}
        </h1>
        <p className="text-white md:text-lg text-center px-4">
          Interested in becoming part of our team? Check out our careers page
          for current job openings and opportunities.
        </p>
        <Link
          to={"/career"}
          className="rounded-full gap-2 flex items-center px-6 py-2 justify-center font-medium text-white group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <button className="relative transition-all ease-in duration-75 dark:bg-gray-900 group-hover:bg-opacity-0">
            Join us
          </button>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default JoinUs;
