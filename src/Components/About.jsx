import React from "react";

export const About = () => {


  const info = [
    {
      title: "What I do",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.",
    },
  ];
  
  const cards_info = [
        {
      title: "User Experience (UX)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
        {
      title: "User Interface (UI)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
        {
      title: "Web Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
    },
  ]
 
   
  return (
    <section className="bg-gray-50">
      <div className="max-w-[80%] md:flex flex-row items-center justify-between mx-auto pt-40 pb-40 gap-30">
        <div className="md:w-[50%] w-full text-center md:text-left">
          {info.map((item, id) => (
            <div key={id} className=" space-y-7">
             <h1 className="text-[#333333] text-4xl md:text-5xl font-semibold">{item.title}</h1>
               <p className="text-gray-400 text-sm md:text-lg font-normal">{item.desc}</p>

               <button className="text-white bg-[#A53DFF] rounded-md px-8 py-4 mt-2 text-[16px] font-semibold hover:bg-[#9228f0] transition duration-200">
                 Say Hello!
               </button>
            </div>
          ))}
          
        </div>

        <div className="md:w-[50%] w-full mt-4 text-center md:text-left space-y-4">
            {
                cards_info.map((card, id) => 
                    <div key={id} className="gap-y-10 p-10  shadow-lg text-white rounded-md hover:-translate-y-1 transition duration-300 ease-in-out sm:hover:scale-105  hover:border-l-4 hover:border-l-[#A53DFF]">
                        <h1 className="text-gray-900 text-lg md:text-2xl font-semibold">{card.title}</h1>
                         <p className="text-gray-700 text-sm md:text-md font-normal">{card.desc}</p>
                    </div>
                )
            }
        </div>
      </div>
    </section>
  );
};
