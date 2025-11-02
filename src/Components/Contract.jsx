import React from "react";
import { LuMapPin } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

export const Contract = () => {
  const infoItems = [
    { label: "Address", value: "Rangpur" },
    { label: "Email", value: "example@email.com" },
    { label: "Phone", value: "+880 1234 567890" },
  ];

  const InfoCard = ({ label, value }) => (
    <div className="px-3 py-3 mt-4 gap-3 flex rounded-md items-center  md:w-[70%] hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out sm:hover:scale-105">
      <div className="bg-[#A53DFF] w-12 h-12 flex justify-center items-center rounded-md">
        <LuMapPin className="text-white w-6 h-6" />
      </div>
      <div>
        <p className="text-gray-700 text-sm font-normal">{label}:</p>
        <h1 className="text-gray-900 text-md font-medium">{value}</h1>
      </div>
    </div>
  );

  const icons = [
    { icon: <FaFacebookF />, href: "" },
    { icon: <FaSquareInstagram />, href: "" },
    { icon: <FaLinkedinIn />, href: "" },
    { icon: <IoLogoGithub />, href: "" },
  ];

  return (
    <section className="bg-gray-50 ">
      <div className="max-w-[80%] mx-auto bg-white md:h-170 rounded-b-lg shadow-lg relative after:absolute after:inset-0 -m-15   ">
        <div className="md:flex justify-between gap-4">
          <div className="p-3 md:p-10 " >
            <div className=" flex flex-col text-center md:text-left">
              <h1 className="text-gray-900 font-semibold text-[38px]">
                Let’s discuss your Project
              </h1>
              <p className="text-gray-400 text-lg md:w-[80%]">
                There are many variations of passages of Lorem Ipsu available.
                but the majority have suffered alte.
              </p>
            </div>
            <div className="flex flex-col md:space-y-7 items-start">
              {infoItems.map((item, index) => (
                <InfoCard key={index} label={item.label} value={item.value} />
              ))}
            </div>

            <div className="mt-10 flex md:justify-between justify-center gap-3 md:w-[70%]">
              {icons.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center shadow-sm bg-gray-50 items-center w-14 h-14 rounded-md text-[#A53DFF] hover:text-white hover:bg-[#A53DFF] hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out sm:hover:scale-105"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>


            <div className="md:mt-7 p-3 md:p-10 ">
              <div className="flex flex-col text-center md:text-left">
                <p className="text-gray-400 text-sm md:text-lg text-center md:text-left">
                There are many variations of passages of Lorem Ipsu available,but
                the majority have suffered alte.
                </p>

              <div className="mt-7 p-4 md:p-0 space-y-10 w-[95%]">
                <input
                  type="text"
                  id="Name"
                  className="border-b-2 h-8 pb-3 border-gray-100 w-full hover:border-b-2 hover:border-[#A53DFF] hover:placeholder-[#A53DFF]  focus:ring-white "
                  placeholder="Name*"
                  required
                />
                <input
                  type="text"
                  id="Email"
                  className="border-b-2 h-8 pb-3 border-gray-100 w-full  hover:border-b-2 hover:border-[#A53DFF] hover:placeholder-[#A53DFF]  focus:ring-white "
                  placeholder="Email*"
                  required
                />
                <input
                  type="text"
                  id="Location"
                  className="border-b-2 h-8 pb-3 border-gray-100 w-full  hover:border-b-2 hover:border-[#A53DFF] hover:placeholder-[#A53DFF]  focus:ring-white "
                  placeholder="Location*"
                  required
                />

                <div className="flex gap-6 ">
                  <input
                    type="text"
                    id="Budget"
                    className="border-b-2 h-8 pb-3 border-gray-100  w-full  hover:border-b-2 hover:border-[#A53DFF] hover:placeholder-[#A53DFF]  focus:ring-white "
                    placeholder="Budget*"
                    required
                  />
                  <input
                    type="text"
                    id="Subject"
                    className="border-b-2 h-8 pb-3 border-gray-100 w-full  hover:border-b-2 hover:border-[#A53DFF] hover:placeholder-[#A53DFF]  focus:ring-white "
                    placeholder="Subject*"
                    required
                  />
                </div>

                <input
                  type="text"
                  id="Message"
                  className="border-b-2 h-8 pb-3 border-gray-100 w-full  hover:border-b-2 hover:border-[#A53DFF] hover:placeholder-[#A53DFF]  focus:ring-white "
                  placeholder="Message*"
                  required
                />

                <button
                  type="submit"
                  className="flex gap-5 items-center  bg-[#A53DFF] py-3 px-8 rounded-md text-white font-semibold text-md"
                >
                  Submit{" "}
                  <HiOutlinePaperAirplane className=" text-white font-semibold text-[20px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};