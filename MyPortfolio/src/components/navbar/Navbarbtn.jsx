import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";


const Navbarbtn = () => {
  return (
    
    <button className='flex px-4 py-2 rounded-full hover:border-orange font-bold text-white border-cyan border items-center justify-center gap-1 bg-gradient-to-r from-cyan to-orange hover:scale-110 trans
    ition-all duration-300 ease-in-out hover:shadow-cyanShadow'>
        Hire Me
        <div className='sm:hidden md:block'>
           <LuArrowDownRight />

        </div>
       
    </button>
  )
}

export default Navbarbtn