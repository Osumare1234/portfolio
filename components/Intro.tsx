/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';
import {BsArrowRight} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext, } from "@/context/active-section-context";






export default function Intro () {
  const { ref } = useSectionInView("Home", 0.5);
  const {  setTimeOfLastClick } = useActiveSectionContext();
 

  
   
 
  
  

  
  

  return (
   <section   ref={ref}   id="home" className=' mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'> 
   <div className='items-center justify-center'>
        <div className=' relative'>
            
          <motion.div
           initial={{opacity: 0, scale: 0 }}
           animate={{opacity:1, scale:1}}
           transition={{
            type:"tween",
            duration: 0.2,
           }}
          >
            
          <Image className= "m-auto  h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl" 
           src='/emma.jpg' alt='/' width={195} height={195} property='true'
            
            
            />
           </motion.div>  
            <motion.span className='absolute bottom-0 right-15 text-4xl '
            initial={{opacity: 0, scale:0}}
            animate={{opacity:1, scale:1}}
            transition={{
              type: 'spring',
              stiffness:125,
              delay: 0.1,
              duration:0.7,
            }}
            >
              👋
            </motion.span>
            
        </div>

    </div>
<motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      
      initial={{opacity:0,y:100}}
      animate={{opacity:2, y:0}}
      transition={{
        delay:0.1,
        type: "spring",
        duration: 0.7,
        stiffness: 125,

      }}
      >
      <span className="font-bold">Hello, I'm Osumare Emmanuel.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">5 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
    </motion.h1>
    <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
    initial={{opacity:0, y: 100}}
    animate={{opacity:1, y:0}}
    transition={{
      delay:0.1,
    }}
    >
     <Link href='#contact'
      
     className="group bg-gray-900 text-white px-7 py-3 flex item-center
      gap-2 rounded-full outline-none focus:scale-110 hover-scale-110 hover-bg-gray-950 active:scale-105 transition"
      onClick={()=>{
        ("Contact");
            setTimeOfLastClick(Date.now());
        
      }}
     >
      Contact me here<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>

     </Link>
     <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-Black dark:bg-white/10"
      href="/CV.doc" download>Download CV {''} <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/> </a>
     <a className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition hover-text-gray-950 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href='https://www.linkedin.com/in/emmanuel-osumare-334b11148/' target='_blank'>< BsLinkedin /></a>
     <a className="bg-white p-4 text-gray-700 flex items-center gap-2 
     text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15]
      hover:text-gray-950 active:scale-105 transition cursor-pointer border-Black dark:bg-white/10 dark:text-white/60"
      href='https://github.com/Osumare1234' target='_blank'>< FaGithub /></a>
    </motion.div>
   
   </section>
  );
}

