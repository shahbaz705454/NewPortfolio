import React from 'react'
import {Link} from "react-scroll"

const links =[
    {link:"About Me ", section:"about"},
    {link:"Skills", section:"skills"},
    {link:"Experience", section:"experience"},
    {link:"Projects", section:"projects"},
    {link:"Contact", section:"contact"},
]



const NavbarLinks = () => {
  return (
    <ul className='flex gap-6 text-white font-bold text-center py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full '> 
        {links.map((item,index)=>{
        return(
            <li key={index} className='group' >
                <Link  to={item.section}
                smooth={true}
                spy={true}
                duration={500}
                offset={-130}
                className=' cursor-pointer text-white hover:text-cyan transition-all duration-300 ease-in-out'>{item.link}</Link>
                <div className='mx-auto w-0 group-hover:w-full bg-cyan h-[1px] transition-all duration-300 ease-in-out'></div>

            </li>
           
        )

        })
    }
    </ul>
  )
}

export default NavbarLinks