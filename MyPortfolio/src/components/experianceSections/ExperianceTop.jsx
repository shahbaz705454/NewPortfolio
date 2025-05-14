import React from 'react'
import ExperianceTopLeft from './ExperianceTopLeft'
import ExperianceTopMiddle from './ExperianceTopMiddle'
import ExperianceTopRight from './ExperianceTopRight'

const ExperianceTop = () => {
  return (
    <div className='flex lg:flex-row sm:flex-col gap-10 justify-between items-center '>
        <ExperianceTopLeft></ExperianceTopLeft>
        <ExperianceTopMiddle></ExperianceTopMiddle>
        <ExperianceTopRight></ExperianceTopRight>
    </div>
  )
}

export default ExperianceTop