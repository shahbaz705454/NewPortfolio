import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from "../../framerMotion/variants"

const AboutMeImage = () => {
  return (
    <motion.div
      variants={fadeIn('left',0.3)}
      initial='hidden'
      whileInView='show'
      viewport={{once:false,amount:0}}
     className='h-[500px] w-[300px] relative'>
        <div className='h-[400px] w-[270px] rounded-[100px] absolute overflow-hidden'>
            <img src="../../images/about-me.jpg" alt="about me image"
            className='h-full w-auto object-cover' />
        </div>
        <div className='h-[400px] w-[260px] bg-orange absolute bottom-[80px] left-[-20px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[50px] rounded-tl-[5px] -z-10'></div>
    </motion.div>
  )
}

export default AboutMeImage