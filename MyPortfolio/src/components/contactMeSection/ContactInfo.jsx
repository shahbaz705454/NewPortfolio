import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SIngleinfo from './SIngleinfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SIngleinfo text="shahbaz705454@gmail.com" Image={MdEmail} ></SIngleinfo>
        <SIngleinfo text="7054545906" Image={FaPhone } ></SIngleinfo>
        <SIngleinfo text="Noida UttarPardesh" Image={FaLocationDot} ></SIngleinfo>

       
    </div>
  )
}

export default ContactInfo