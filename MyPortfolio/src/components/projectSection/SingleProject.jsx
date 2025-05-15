import React from 'react'
import { BiRightTopArrowCircle } from "react-icons/bi";
import {motion} from 'framer-motion';
import {fadeIn} from "../../framerMotion/variants"

const SingleProject = ({project}) => {
    
  return (
    <motion.div
     variants={fadeIn('up',0.3)}
                initial='hidden'
                whileInView='show'
                viewport={{once:false,amount:0}}
     className={`flex w-full sm:flex-col-reverse items-center gap-8 ${project.align == "left" ? "md:flex-row" : "md:flex-row-reverse"} justify-end`}>
        <div>
            <h2 className='md:text-3xl sm:text-2xl text-orange'>{project.name}</h2>
            <h2 className={`text-2xl font-thin text-white font-special sm:text-center ${project.align == "left" ? "md:text-right" : "md:text-left"}  `}>{project.year}</h2>
            <a href={project.link} target='_blank' className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${project.align == "left" ? "md:justify-self-end" : "md:justify-self-start"} `}>View <BiRightTopArrowCircle /></a>
        </div>
        <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white '>
            <div className='w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden '></div>
            <img src={project.image}  alt="Image" className='w-full h-full ' />
        </div>
    </motion.div>
  )
}

export default SingleProject