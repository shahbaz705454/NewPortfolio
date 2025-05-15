import React from 'react'

const SingleContactSocial = ({Icon,link}) => {
  return (
    <div className='group text-2xl h-12 border border-orange text-orange rounded-full p-3 flex items-center hover:shadow-cyanShadow justify-center'>
        <a href={link} className=' cursor-pointer hover:text-cyan transition-all duration-300 ease-in-out '><Icon/></a>
    </div>
  )
}

export default SingleContactSocial