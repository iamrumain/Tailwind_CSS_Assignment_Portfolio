import {useEffect, useState} from 'react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [Links , setLinks] = useState([]);
  const [toggle , setToggle] = useState(false);

   const showNav = () => {
       setToggle(!toggle);
   } 

  useEffect(()=>{
    fetch('./navData.json').then(res=>res.json()).then(data=>setLinks(data))
  },[])
  return (

  <nav className='max-w-[80%] flex flex-wrap items-center justify-between mx-auto p-4'>

      <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
        <div className='flex gap-6 items-center '>
               <h1 className='bg-[#A53DFF] p-5 py-3 rounded-full text-2xl font-medium text-white'>R</h1>
               <p className='text-gray-900 text-[32px] hidden md:flex font-semibold'>RUMAIN ISLAM</p>
        </div>

        <button
          className="flex justify-end md:hidden "
          onClick={showNav}
        >
          <FontAwesomeIcon icon={faBars} 
          className="fas fa-bars text-[#A53DFF] w-9 h-9 text-2xl flex justify-center items-center hover:text-black"
          />

        </button>

        <ul
          className={`${
            toggle ? " flex" : " hidden"
          } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
        >
            {
               Links.map((link, id) => 
                <li key={id} className='text-[16px] text-[#333] font-medium leading-6 hover:text-[#A53DFF]'>
                  <a href={link.path}>{link.name}</a>
                </li>
              )
            }
             <button
          className={`${
            toggle ? " flex" : " hidden"
          } text-white bg-[#A53DFF] mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-semibold px-1 p-2 rounded-lg mt-4 w-24 hover:bg-[#9228f0] transition duration-200"`}
        > 
          Contract
        </button>
        </ul>
       
      </div>
    </nav>
  )
}





