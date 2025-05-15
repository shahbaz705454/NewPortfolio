import React from 'react'
const links =[
    {link:"About Me ", section:"about"},
    {link:"Skills", section:"skills"},
    {link:"Experience", section:"experience"},
    {link:"Projects", section:"projects"},
    {link:"Contact", section:"contact"},
]


const FooterMain = () => {
  return (
    <div className='px-4'>
        <div className='w-full h-[1px] bg-lightGrey mt-24'></div>
        <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
          <p className='text-2xl text-lightGrey '>Mohd Shahbaz</p>
          <ul className='flex gap-4 text-lightGrey text-xl'>
            {
                links.map((item,index)=>{
                    return <li key={index} className='hover:text-white transition-all duration-300 '><a href={item.link}>{item.section}</a></li>
                })
            }
          </ul>
        </div>
        <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightGrey'>@ 2025 Shahbaz | All Rights Reserved.</p>
    </div>
  )
}

export default FooterMain