import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import home_view from "../assets/home_view.png";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen h-fit w-full bg-gradient-to-b from-black via-black to-[#06b6d4]"
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col-reverse items-center justify-right h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-10 md:mt-32">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Welcome to {"SL Technocrats"}
          </h2>
          <br />

          <h2 className=" text-white py-4 max-w-md">
            The Pioneers in AI, Machine Learning, Full Stack Development, and
            Healthcare Solutions
          </h2>

          {/* <!-- Introduction Section --> */}
          <section>
            <p className="text-white py-4 max-w-md">
              At Your Company Name, we are committed to driving innovation and
              excellence in the fields of Artificial Intelligence, Machine
              Learning, Full Stack Development, and Healthcare Services. Our
              mission is to leverage cutting-edge technology to create smarter,
              more efficient solutions for a healthier tomorrow.
            </p>
          </section>

          {/* <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div> */}
        </div>

        <div className=" mt-10 w-full">
          <img
            src={home_view}
            alt="my profile"
            className="rounded-2xl mx-auto sm:w-fit w-fit h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
