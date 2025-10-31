import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Img_1 from './img_1.jpg'
import Img_2 from './img_2.jpg'
import Img_3 from './img_3.jpg'
import Img_4 from './img_4.jpg'
import Img_5 from './img_5.jpg'
import Img_6 from './img_6.jpg'



export const Project = () => {
  return (
    <section className='max-w-7xl mx-auto pt-20 pb-30 px-4 py-10 gap-10 flex-col md:flex '>
          <div className='flex justify-center flex-col text-center space-y-5'>
              <h1 className='text-gray-900 font-semibold text-4xl md:text-5xl'>Projects</h1>
              <p className='text-gray-600 text-md md:text-lg md:leading-6 font-normal'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
          </div>

          <div className='md:flex gap-5 mt-5 w-full mx-auto'>
                <div className='bg-white flex flex-col text-center md:text-left md:w-[424px] md:h-[480px] pb-7  rounded-sm shadow-md hover:-translate-y-1 transition duration-300 ease-in-out sm:hover:scale-105'>
                    <img src={Img_1} alt=""
                    className='w-full h-[148px] md:h-[248px] object-cover rounded-t-md' />
                    <div className='px-8 mt-4'>
                        <p className='text-gray-400 text-xs'>BLOCKCHAIN PROJECT</p>
                            <h1 className='text-gray-900 text-md md:text-lg font-semibold mb-3'>ChainFund</h1>
                            <p className='text-gray-600 text-sm md:text-md md:text-md mb-5'>A decentralized crowdfunding platform powered by  smart contracts.</p>
                        
                            <button className='flex gap-3 items-center justify-center rounded-sm  md:justify-between w-full md:w-[60%] border-2 border-[#A53DFF] py-3 px-6 text-[#A53DFF] hover:bg-[#9228f0] hover:text-white transition duration-200'>
                                Case Study 
                                <FaArrowRight
                                />
                            </button>
                    </div>
                </div>
                <div className='bg-white flex flex-col text-center md:text-left md:w-[424px] md:h-[480px] pb-7  rounded-sm shadow-md hover:-translate-y-1 transition duration-300 ease-in-out sm:hover:scale-105'>
                    <img src={Img_2} alt=""
                    className='w-full h-[148px] md:h-[248px] object-cover rounded-t-md' />
                    <div className='px-8 mt-4'>
                        <p className='text-gray-400 text-xs'>BLOCKCHAIN PROJECT</p>
                            <h1 className='text-gray-900 text-md md:text-lg font-semibold mb-3'>MetaLease</h1>
                            <p className='text-gray-600 text-sm md:text-md md:text-md mb-5'>Blockchain-based solution for secure digital leasing and asset rentals.</p>
                            
                            <button className='flex gap-3 items-center justify-center rounded-sm  md:justify-between w-full md:w-[60%] border-2 border-[#A53DFF] py-3 px-6 text-[#A53DFF] hover:bg-[#9228f0] hover:text-white transition duration-200'>
                                Case Study 
                                <FaArrowRight
                                />
                            </button>
                    </div>
                </div>
                <div className='bg-white flex flex-col text-center md:text-left md:w-[424px] md:h-[480px] pb-7  rounded-sm shadow-md hover:-translate-y-1 transition duration-300 ease-in-out sm:hover:scale-105'>
                    <img src={Img_3} alt=""
                    className='w-full h-[148px] md:h-[248px] object-cover rounded-t-md' />
                    <div className='px-8 mt-4'>
                        <p className='text-gray-400 text-xs'>BLOCKCHAIN PROJECT</p>
                            <h1 className='text-gray-900 text-md md:text-lg font-semibold mb-3'>BlockCerts</h1>
                            <p className='text-gray-600 text-sm md:text-md md:text-md mb-5'>Tamper-proof certificate issuance and verification on the blockchain.</p>
                            
                            <button className='flex gap-3 items-center justify-center rounded-sm  md:justify-between w-full md:w-[60%] border-2 border-[#A53DFF] py-3 px-6 text-[#A53DFF] hover:bg-[#9228f0] hover:text-white transition duration-200'>
                                Case Study 
                                <FaArrowRight
               
                                />
                            </button>
                    </div>
                </div>
          </div>
            <div className='md:flex gap-5 mt-5 w-full mx-auto'>
                <div className='bg-white flex flex-col text-center md:text-left md:w-[424px] md:h-[480px] pb-7  rounded-sm shadow-md hover:-translate-y-1 transition duration-300 ease-in-out sm:hover:scale-105'>
                    <img src={Img_4} alt=""
                    className='w-full h-[148px] md:h-[248px] object-cover rounded-t-md' />
                    <div className='px-8 mt-4'>
                        <p className='text-gray-400 text-xs'>BLOCKCHAIN PROJECT</p>
                            <h1 className='text-gray-900 text-md md:text-lg font-semibold mb-3'>DeTrust Vault</h1>
                            <p className='text-gray-600 text-sm md:text-md md:text-md mb-5'>A non-custodial DeFi wallet with built-in trustless escrow services.</p>

                            <button className='flex gap-3 items-center justify-center rounded-sm  md:justify-between w-full md:w-[60%] border-2 border-[#A53DFF] py-3 px-6 text-[#A53DFF] hover:bg-[#9228f0] hover:text-white transition duration-200'>
                                Case Study 
                                <FaArrowRight
                                />
                            </button>
                    </div>
                </div>
                <div className='bg-white flex flex-col text-center md:text-left md:w-[424px] md:h-[480px] pb-7  rounded-sm shadow-md hover:-translate-y-1 transition duration-300 ease-in-out sm:hover:scale-105'>
                    <img src={Img_5} alt=""
                    className='w-full h-[148px] md:h-[248px] object-cover rounded-t-md' />
                    <div className='px-8 mt-4'>
                        <p className='text-gray-400 text-xs'>BLOCKCHAIN PROJECT</p>
                            <h1 className='text-gray-900 text-md md:text-lg font-semibold mb-3'>NFTicket PROJECT</h1>
                            <p className='text-gray-600 text-sm md:text-md md:text-md mb-5'>NFT-powered event ticketing system to prevent fraud and scalping.</p>
                            
                            <button className='flex gap-3 items-center justify-center rounded-sm  md:justify-between w-full md:w-[60%] border-2 border-[#A53DFF] py-3 px-6 text-[#A53DFF] hover:bg-[#9228f0] hover:text-white transition duration-200'>
                                Case Study 
                                <FaArrowRight
                                />
                            </button>
                    </div>
                </div>
                <div className='bg-white flex flex-col text-center md:text-left md:w-[424px] md:h-[480px] pb-7  rounded-sm shadow-md hover:-translate-y-1 transition duration-300 ease-in-out sm:hover:scale-105'>
                    <img src={Img_6} alt=""
                    className='w-full h-[148px] md:h-[248px] object-cover rounded-t-md' />
                    <div className='px-8 mt-4'>
                        <p className='text-gray-400 text-xs'>BLOCKCHAIN PROJECT</p>
                            <h1 className='text-gray-900 text-md md:text-lg font-semibold mb-3'>DAOgenda</h1>
                            <p className='text-gray-600 text-sm md:text-md md:text-md mb-5'>A governance platform enabling transparent DAO decision-making and voting.</p>
                            
                            <button className='flex gap-3 items-center justify-center rounded-sm  md:justify-between w-full md:w-[60%] border-2 border-[#A53DFF] py-3 px-6 text-[#A53DFF] hover:bg-[#9228f0] hover:text-white transition duration-200'>
                                Case Study 
                                <FaArrowRight
               
                                />
                            </button>
                    </div>
                </div>
            </div>



          <div className='flex justify-center items-center'>
                <button className='text-white bg-[#A53DFF] rounded-md  px-8 p-4 text-[16px] font-semibold'>
                    More Project
                </button>
          </div> 


    </section>
  )
}
