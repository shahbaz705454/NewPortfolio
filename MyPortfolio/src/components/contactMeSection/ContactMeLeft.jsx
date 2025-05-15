import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col w-full gap-8'>
        <div>
            <h2 className='text-orange text-3xl mb-4 '>Get In Touch</h2>
            <p className='text-white '>Feel free to reach out if you you'd like to collaborate <br/>
            you are just a few click away!.
            </p>
        </div>
        <ContactForm></ContactForm>
    </div>
  )
}

export default ContactMeLeft