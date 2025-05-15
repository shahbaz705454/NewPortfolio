import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'
import HeroGradient from './HeroGradient'
import SubHeroSection from './SubHeroSection'


const HeroMain = () => {
  return (
    <div id='home' className='pt-40 pb-16 px-10 flex sm:flex-col  justify-around gap-40 mx-auto w-full items-center lg:flex-col '>

      <div className='lg:flex justify-between gap-52 mx-auto px-10'>
        <HeroText/>
        <HeroPic/>
        <HeroGradient/>

      </div>
        <div className='w-full'>

        <SubHeroSection></SubHeroSection>
        </div>

    </div>
  )
}

export default HeroMain