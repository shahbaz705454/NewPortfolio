import React from 'react'

const AboutMeImage = () => {
  return (
    <div className='h-[500px] w-[300px] relative'>
        <div className='h-[400px] w-[270px] rounded-[100px] absolute overflow-hidden'>
            <img src="../../public/images/about-me.jpg" alt="about me image"
            className='h-full w-auto object-cover' />
        </div>
        <div className='h-[400px] w-[260px] bg-orange absolute bottom-[80px] left-[-20px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[50px] rounded-tl-[5px] -z-10'></div>
    </div>
  )
}

export default AboutMeImage