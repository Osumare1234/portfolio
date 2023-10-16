/* eslint-disable react-hooks/rules-of-hooks */

"use client"
import React from 'react'
import SectionHeading from './section-heading'

import { motion } from 'framer-motion'
import{sendEmail} from "@/actions/sendEmail"
import { useSectionInView } from '@/lib/hooks'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'









export default function contact () {
  const { ref } = useSectionInView("Contact");


  
 
  

  
 
  return (
  <motion.section id='contact'
   ref={ref} 
   className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center '
  initial={{opacity: 0,

  }}
  whileInView={{
    opacity: 1,
  }}
  transition={{
    duration:1
  }}
  viewport={{
    once: true,
  }}
  >
    <SectionHeading> Contact me</SectionHeading>
    <p className='text-gray-700 -mt-6  dark:text-white/80'>Please contact me diectly at <a className='underline' href='mailto:emmanuelbanky16@gmail.com'></a>or through this form
    </p>

    <form className='mt-10 flex flex-col'
    action={ async FormData =>{
     const {data, error} = await sendEmail(FormData);
     
     if(error){
     toast.error(error);
     return;
    }
    toast.success("Email sent successfully!")

    }}
    
    >
        <input
         className='h-14 px-4 rounded-lg border-black' 
        name="senderEmail"
        type='email'
        required
        maxLength={500}
        placeholder='Your Email'/>
        <textarea className='h-52 my-3 rounded-lg borderBlack p.4 text-black'
        name='message'
        placeholder='Your Message'
        required
        maxLength={5000}
        />
      
      
    <SubmitBtn />
    </form>
  </motion.section>
  );
}

