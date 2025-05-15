import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className='flex gap-4 '>
        <SingleContactSocial link="https://github.com/shahbaz705454" Icon={FaGithub}></SingleContactSocial>
        <SingleContactSocial link="https://www.linkedin.com/in/mohd-shahbaz-462791213/" Icon={FaLinkedin}></SingleContactSocial>
    </div>
  )
}

export default ContactSocial