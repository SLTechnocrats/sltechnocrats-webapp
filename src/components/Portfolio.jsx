import React from "react";
import Project from "./Project";
import PopMsg from "./PopMsg";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const portfolios = useSelector((state) => state.portfolio.portfolios);
  return (
    <div
      name="portfolio"
      className="w-full  min-h-screen h-fit bg-gradient-to-b from-black to-gray-800  text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-12 px-0">
          {portfolios?.map(
            ({
              id,
              image,
              name,
              style,
              personalProject,
              github,
              about,
              containerStyle,
              others,
              images,
            }) => (
              <div
                key={id}
                className={
                  "w-full shadow-md shadow-gray-600 rounded-lg " + style
                }
              >
                <img
                  src={image}
                  alt=""
                  className="rounded-md duration-200 w-[320px] mx-auto h-[180px] hover:scale-105  "
                />
                <div className="flex flex-col items-center justify-center px-4 py-2 mt-4">
                  <div className="w-full truncate">{name}</div>
                  <div className="w-full flex flex-row justify-between space-x-16 ">
                    <Project
                      about={about}
                      style={containerStyle}
                      name={name}
                      others={others}
                      images={images}
                    />
                    {personalProject && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-blue-500  hover:bg-gradient-to-r hover:from-cyan-500 hover:to-red-500 cursor-pointer duration-200 hover:scale-110 "
                      >
                        Code
                      </a>
                    )}
                    {!personalProject && <PopMsg />}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
