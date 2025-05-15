import React from 'react'
import ExperianceText from './ExperianceText'
import ExperianceTop from './ExperianceTop'
import AllExperiance from './AllExperiance'

const ExperianceMain = () => {
  return (
    <div id='experience' className='max-w-[1200px] mx-auto px-4'>
        <ExperianceText/>
        <ExperianceTop></ExperianceTop>
        <div className='w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden'></div>
        <AllExperiance></AllExperiance>
    </div>
  )
}

export default ExperianceMain