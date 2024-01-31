import React from "react";
// import { useSelector } from "react-redux";
import src1 from '../assets/ic_room.png';
import src2 from '../assets/ic_healthcare.png';
import src3 from '../assets/ic_nueral_network.png';
import src4 from '../assets/ic_call.png';

const Reliability = () => {
  // const mySkills = useSelector((state) => state.portfolio.mySkills);
  // console.log(mySkills);
  const color = [
    " shadow-orange-500",
    " shadow-blue-400",
    " shadow-yellow-500",
    " shadow-sky-400",
    " shadow-sky-800",
    " shadow-orange-800",
    " shadow-green-400",
    " shadow-violet-400",
    " shadow-sky-400",
    " shadow-gray-300",
    " shadow-sky-400",
  ];

  return (
    <div
      name="reliability"
      className="h-fit min-h-screen bg-gradient-to-b from-gray-800 to-black w-full pt-20"
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-start items-start w-full h-full text-white">
        <div>
          <p className="text-4xl sm:text-5xl font-bold border-b-4 border-gray-500 p-2 inline">
            What we do actually?
          </p>
          {/* <p className="py-6"></p> */}
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-12">
          {mySkills?.map(({ id, src, title, description }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-300 " +
                color[id - 1]
              }
            >
              <img src={src} alt="" className="w-40 sm:w-60 md:w-80 mx-auto" />
              <p className="mt-4 border-b-2 border-gray-500 p-2">{title}</p>
              <p className="mt-4 px-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const mySkills = [
  {
    id: 0,
    title: "Introduction to Real-Time Solutions",
    src: src1,
    description: `Our company is at the forefront of delivering real-time software solutions, revolutionizing how businesses tackle immediate challenges. We understand that in today's fast-paced world, the ability to respond to changes instantaneously is not just an advantage but a necessity. Our solutions are designed to empower businesses with real-time data processing, instantaneous analytics, and agile decision-making capabilities.`,
  },
  {
    id: 1,
    title: "Tailored Solutions for Diverse Industries",
    src: src2,
    description: `Our company is at the forefront of delivering real-time software solutions, revolutionizing how businesses tackle immediate challenges. We understand that in today's fast-paced world, the ability to respond to changes instantaneously is not just an advantage but a necessity. Our solutions are designed to empower businesses with real-time data processing, instantaneous analytics, and agile decision-making capabilities.`,
  },
  {
    id: 2,
    title: "Cutting-Edge Technology and Innovation",
    src: src3,
    description: `Our commitment to innovation drives us to constantly upgrade our solutions with the latest in technology. Incorporating AI, machine learning, and cloud computing, we ensure that our real-time software solutions are not only fast but also intelligent and scalable. This commitment positions us as a leader in providing solutions that adapt and evolve with your business needs.`,
  },
  {
    id: 3,
    title: "Reliability and Support",
    src: src4,
    description: `Reliability is the cornerstone of our real-time software solutions. We understand that every second counts, and our team is dedicated to providing robust support to ensure uninterrupted service. Our clients trust us for not just our technology but also for our unwavering commitment to keeping their operations running smoothly around the clock.`,
  },
];


export default Reliability;

