import React from 'react'
import { LiaCircleSolid } from "react-icons/lia";
import { PiHexagonLight } from "react-icons/pi";
import {motion} from 'framer-motion';
import {fadeIn} from "../../framerMotion/variants"

const HeroPic = () => {
  return (
    <motion.div
    variants={fadeIn('left',0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{once:false,amount:0}}
    className='h-full flex items-center justify-center'>
        <img src='../../images/main.png' className='max-h-[450px]'></img>
    <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
        <PiHexagonLight className='md:h-[80%] sm:[110%] min-h-[400px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]' /></div>
    </motion.div>
  )
}

export default HeroPic