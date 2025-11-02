import { useEffect, useState } from "react";

export const Footer = () => {
  const [Links, setLinks] = useState([]);

  useEffect(() => {
    fetch("./navData.json")
      .then((res) => res.json())
      .then((data) => setLinks(data));
  }, []);

  return (
    <section className="bg-gray-800 ">
      <div className="h-[330px] max-w-[80%] mx-auto flex justify-between items-center">
            <div className="flex justify-between w-full items-center text-center"> 
                <div className="flex  gap-3 items-center ">
                <h1 className="bg-[#A53DFF] hidden md:flex p-5 py-3  rounded-full text-2xl font-medium text-white">
                    R
                </h1>
                <p className="text-white text-[32px] hidden md:flex font-semibold">
                    RUMAIN
                </p>
                </div>

                <ul className="md:flex hidden gap-9">
                {Links.map((link, id) => (
                    <li
                    key={id}
                    className="text-[16px] text-gray-50 font-medium leading-6 hover:text-[#A53DFF]"
                    >
                    <a href={link.path}>{link.name}</a>
                    </li>
                ))}
                </ul>
            
                <p className="text-gray-50 text-md font-normal">Copyright © 2025.All Rights Reserved.</p>
                

            </div>
      </div>

    </section>
  );
};
