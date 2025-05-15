import React from 'react'
import {Link} from "react-scroll"

const NavbarLogo = () => {
  return (
    <Link to='home'
    smooth={true}
    spy={true}
    duration={500}
    className='flex items-center gap-2'>
        <h1 className='text-white text-2xl font-semibold sm:hidden md:block'>Mohd Shahbaz</h1>
        <h1 className='text-white font-special font-semibold text-4xl sm:block md:hidden'>MS</h1>
    </Link>
  )
}

export default NavbarLogo