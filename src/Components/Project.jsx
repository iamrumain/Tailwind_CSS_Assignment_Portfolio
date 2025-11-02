import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export const Project = () => {
  const [proData, setProData] = useState([]);
  useEffect(() => {
    fetch("./project.json")
      .then((res) => res.json())
      .then((data) => setProData(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <section className="max-w-[80%] mx-auto px-4 py-16 flex flex-col space-y-14">
      <div className="flex flex-col items-center text-center space-y-5">
        <h1 className="text-gray-900 font-semibold text-4xl md:text-5xl">
          Projects
        </h1>
        <p className="text-gray-600 text-md md:text-lg leading-6 max-w-2xl">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {proData.map((project, index) => (
          <div
            key={index}
            className="bg-white flex flex-col text-center md:text-left rounded-md shadow-md overflow-hidden hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <img
              src={project.img}
              alt={project.subtitle}
              className="w-full h-52 object-cover"
            />
            <div className="flex justify-center flex-col p-4">
              <div>
                <p className="text-gray-400 text-xs mb-2">{project.subtitle}</p>
                <h2 className="text-gray-900 text-lg font-semibold ">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-5">
                  {project.desc}
                </p>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-sm border-2 border-[#A53DFF] py-3 text-[#A53DFF] hover:bg-[#9228f0] hover:text-white transition duration-200">
                Case Study <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5 mb-5">
        <button className="text-white bg-[#A53DFF] rounded-md px-8 py-4 text-[16px] font-semibold hover:bg-[#9228f0] transition duration-200">
          More Projects
        </button>
      </div>
    </section>
  );
};
