import React from 'react'

const SIngleinfo = ({text,Image}) => {
  return (
    <div className='flex gap-4 items-center justify-start'>
        <Image className="text-3xl"/>
        <p>{text}</p>
    </div>
  )
}

export default SIngleinfo