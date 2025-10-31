import React from 'react'
import Photo from '../assets/IMG_0255.JPG';

export const Banner = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-10 mt-10 gap-10 flex flex-col-reverse md:flex-row justify-between '>
        <div className='w-full md:w-[60%] flex flex-col justify-center space-y-6 text-center md:text-left'>
           <div className='space-y-4'>
                <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-gray-900'>
                   Hello, I’m <br className="hidden sm:block" /> Rumain Islam
                </h1>
                <p className='font-normal text-gray-600 text-base sm:text-lg leading-relaxed'>
                  I'm a <span className="font-semibold text-[#A53DFF]">Blockchain Developer</span> based in Rangpur, Bangladesh,  focused <br /> on building user-centric solutions across smart contracts, NFTs, and <br /> DeFi platforms.
                </p>
              <button
              className="bg-[#A53DFF] text-white text-[16px] font-medium py-2 px-6 rounded-md hover:bg-[#9228f0] transition duration-200"
              >
                Say Hello!  
              </button>
           </div>

          <div className="flex justify-center md:justify-start items-center mt-10 flex-wrap gap-2">
            <div className="bg-[#EDD8FF80] py-4 px-13  rounded-lg text-center min-w-[120px]">
              <h2 className="text-[#424E60] font-semibold text-3xl">1 Y.</h2>
              <p className="text-gray-500 text-sm">Experience</p>
            </div>
            <div className="bg-[#EDD8FF80] py-4 px-15  rounded-lg text-center min-w-[120px]">
              <h2 className="text-[#424E60] font-semibold text-3xl">0+</h2>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>
            <div className="bg-[#EDD8FF80] py-4 px-13 rounded-lg text-center min-w-[120px]">
              <h2 className="text-[#424E60] font-semibold text-3xl">0</h2>
              <p className="text-gray-500 text-sm">Happy Clients</p>
          </div>
          </div>
      </div>



        <div className='w-full md:w-[40%] flex justify-center md:justify-end'>
            <img src={Photo} alt="" 
            className='w-[436px] sm:w-[400px] md:w-[436px] h-auto object-cover rounded-xl shadow-lg' 
            />
        </div>
    </section>
  )
}