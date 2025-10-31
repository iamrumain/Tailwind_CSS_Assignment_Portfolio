import React from "react";
import { MdOutlineEventNote } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { CiLaptop } from "react-icons/ci";
export const Process = () => {
  return (

    <section className=" bg-gray-50">
      <div className=" max-w-7xl md:flex flex-row items-center justify-between mx-auto pt-40 pb-40 gap-30">
        <div className="w-full md:w-[50%]  m-auto md:10 flex flex-col space-y-5 text-center md:text-left">
          <h1 className="text-gray-900 text-4xl md:text-5xl font-semibold">Work Process</h1>
          <p className="text-gray-400 text-sm md:text-[18px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <p className="text-gray-400 text-sm md:text-[18px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </p>
      </div>

      <div className="w-full md:w-[50%] justify-center items-center md:flex">
          <div className="flex flex-wrap gap-5 mr-4">
            {/* <div className="bg-white py-10 px-6 space-y-3 flex flex-col shadow-md rounded-md hover:-translate-y-1 transition duration-300 ease-in-out sm:hover:scale-105"> */}
            <div className="bg-white m-8 md:m-auto py-10 px-6 space-y-3 shadow-md rounded-md flex flex-col items-center text-center md:items-start md:text-left  md:flex-col hover:-translate-y-1 transition duration-300 ease-in-out sm:hover:scale-105">        
              <div className="bg-[#A53DFF] w-18 h-18 flex justify-center items-center rounded-md">
                <MdOutlineEventNote className="text-white w-6 h-6 " />
              </div>
              <h1 className="text-gray-900 text-[20px] font-semibold">
                1. Research
              </h1>
              <p className="text-gray-600 text-[16px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu.
              </p>
            </div>

            <div className="bg-white m-8 md:m-auto py-10 px-6 md:mb-10 space-y-3 shadow-md rounded-md flex flex-col items-center text-center md:items-start md:text-left  md:flex-col hover:-translate-y-1 transition duration-300 ease-in-out sm:hover:scale-105">
              <div className="bg-[#A53DFF] w-18 h-18 flex justify-center items-center rounded-md">
                <FaChartLine className=" text-white  w-6 h-6 " />
              </div>
              <h1 className="text-gray-900 text-[20px] font-semibold">
                2. Analyze
              </h1>
              <p className="text-gray-600 text-[16px] font-normal ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            <div className="bg-white m-8 md:m-auto py-10 px-6 space-y-3 shadow-md rounded-md flex flex-col items-center text-center md:items-start md:text-left  md:flex-col hover:-translate-y-1 transition duration-300 ease-in-out sm:hover:scale-105">
              <div className="bg-[#A53DFF] w-18 h-18 flex justify-center items-center rounded-md">
                <GoPencil className=" text-white  w-6 h-6 " />
              </div>
              <h1 className="text-gray-900 text-[20px] font-semibold">
                2. Design
              </h1>
              <p className="text-gray-600 text-[16px] font-normal ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu.
              </p>
            </div>

            <div className="bg-white m-8 md:m-auto py-10 px-6 space-y-3 shadow-md rounded-md flex flex-col items-center text-center md:items-start md:text-left  md:flex-col hover:-translate-y-1 transition duration-300 ease-in-out sm:hover:scale-105">
              <div className="bg-[#A53DFF] w-18 h-18 flex justify-center items-center rounded-md">
                <CiLaptop className=" text-white  w-6 h-6 " />
              </div>
              <h1 className="text-gray-900 text-[20px] font-semibold">
                4. Launch
              </h1>
              <p className="text-gray-600 text-[16px] font-normal ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
