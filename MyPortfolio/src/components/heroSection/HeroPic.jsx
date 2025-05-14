import React from 'react'
import { LiaCircleSolid } from "react-icons/lia";
import { PiHexagonLight } from "react-icons/pi";

const HeroPic = () => {
  return (
    <div className='h-full flex items-center justify-center'>
        <img src='../../public/images/main.png' className='max-h-[450px]'></img>
    <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
        <PiHexagonLight className='md:h-[80%] sm:[110%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]' /></div>
    </div>
  )
}

export default HeroPic