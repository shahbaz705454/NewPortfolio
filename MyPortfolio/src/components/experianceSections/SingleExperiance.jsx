import React from 'react'

const SingleExperiance = ({experiance}) => {
  console.log(experiance)
  return (
    <div className='md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4'>
      <p className='font-bold text-cyan'>{experiance.job}</p>
      <p className='text-orange '>{experiance.company}</p>
      <p className='text-lightGrey'>{experiance.date}</p>
      <ul className=' list-disc mt-4 pl-4 text-white'>{experiance.responsibilities.map((item,index)=>{
        return <li key={index}>{item}</li>
      })}</ul>
    </div>
  )
}

export default SingleExperiance