import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export const WorkTogether = () => {
  return (
    <section className="bg-gray-900">
      <div className="max-w-[80%] mx-auto py-15 pb-20 md:p-30">
        <div className="flex justify-center items-center text-center flex-col space-y-7 ">
          <h1 className="text-white text-4xl md:text-5xl font-semibold">Do you have Project Idia? Let's discuss your project!</h1>
          <p className="text-gray-300 text-sm md:text-lg font-normal">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>

          <div className="flex justify-center mt-5 mb-5">
            <button className="text-white bg-[#A53DFF] rounded-md px-8 py-4 text-[16px] font-semibold hover:bg-[#9228f0] transition duration-200">
              Let’s work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
