import React from 'react'
import  { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {

    const [formData, setformData] = useState({
        from_name: '',
        from_email: '',
        message: '',
    })
   
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cbrtx7d', 'template_532hl4d', form.current, {
        publicKey: 'KqSe2gyVcs8VuDqUc',
      })
      .then(
        () => {
          setSuccess("Email sent successfully!");
            setformData({
                from_name: '',
                from_email: '',
                message: '',
            });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
    <form action="" className='flex flex-col gap-4 text-white' onSubmit={sendEmail} ref={form}>
        <p className='text-cyan'>{success}</p>
        <input name='from_name' type="text" placeholder='Your Name' required className='h-12 rounded-lg bg-lightBrown px-2 ' value={formData.from_name} onChange={handleChange} />
        <input type="email" name='from_email' placeholder='Your Email' required className='h-12 rounded-lg bg-lightBrown px-2 ' value={formData.from_email} onChange={handleChange} />
        <textarea name="message"  id="" placeholder='Message' rows={9} color='50' required className='rounded-lg bg-lightBrown p-2 ' value={formData.message} onChange={handleChange}></textarea>
        <button className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-300'>Send</button>

    </form>
    </div>
  )
}

export default ContactForm