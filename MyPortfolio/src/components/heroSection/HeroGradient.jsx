import React from 'react'

const HeroGradient = () => {
  return (
    <div>
        <div className=' shadow-cyanMedShadow absolute top-0 right-[400px] -z-10 animate-pulse'></div>
        <div className=' shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse'></div>
        <div className=' shadow-cyanMedShadow absolute left-0 top-[300px] -z-10 opacity-50'> </div>
        <div className=' shadow-orangeMediumShadow absolute left-0 top-[500px] -z-10 opacity-50'> </div>

    </div>
  )
}

export default HeroGradient