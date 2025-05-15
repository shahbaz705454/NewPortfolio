import React from 'react'
import ExperianceText from './ExperianceText'
import ExperianceTop from './ExperianceTop'
import AllExperiance from './AllExperiance'
import {motion} from 'framer-motion';
import {fadeIn} from "../../framerMotion/variants"

const ExperianceMain = () => {
  return (
    <div id='experience' className='max-w-[1200px] mx-auto px-4'>
        <motion.div
        variants={fadeIn('down',0.3)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once:false,amount:0.7}}
        >

        <ExperianceText/>

        </motion.div>

        <motion.div
        variants={fadeIn('down',0.3)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once:false,amount:0}}
        >
        <ExperianceTop></ExperianceTop>

        </motion.div>
        <div className='w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden'></div>
        <AllExperiance></AllExperiance>
    </div>
  )
}

export default ExperianceMain