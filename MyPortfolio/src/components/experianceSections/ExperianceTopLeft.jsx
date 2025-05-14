import React from 'react'
import ExperianceInfo from './ExperianceInfo'

const ExperianceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2024</p>
        <div className='flex justify-center items-center gap-4 '>
            <ExperianceInfo number={1} text="Years"></ExperianceInfo>
            <p className='font-bold text-6xl text-lightBrown'></p>
            <ExperianceInfo number="23" text="Websites"></ExperianceInfo>
        </div>
        <p className='text-center text-white'>With 1 Years Experiance builing dynamic and user-friendly web Applications</p>
        <ExperianceInfo number="35+" text="Git Repos"></ExperianceInfo>
    </div>
  )
}

export default ExperianceTopLeft