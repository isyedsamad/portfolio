'use client'
import React from 'react'
import {motion} from 'motion/react'

const HeroSection = () => {
  return (
    <>
    {/* h-[calc(100dvh-84px)] */}
    <div className='w-full px-5 md:px-15'>
        <motion.div animate={{opacity: [0, 1]}} transition={{delay:0.2, duration:0.8}} className='w-full py-20 min-h-full rounded-3xl bg-[url("/herobg.png")] bg-cover bg-center flex flex-col justify-center items-center text-center px-5'>
            <h2 className='font-medium text-xl sm:text-2xl text-[var(--text-primary)] useLeckerli'>Hello! I'm <span className='bg-[var(--bg)] font-semibold cursor-pointer duration-400 px-2 uppercase usePoppins'>Syed Samad</span></h2>
            <p className="text-[var(--text-primary)]/70 max-w-md sm:max-w-2xl mt-2 text-xs sm:text-sm">
                I craft web and mobile experiences that blend design, performance, and purpose. 
                Currently building ERP systems and SaaS tools that empower businesses and schools.
            </p>
            <div className="flex gap-4 mt-4 text-xs sm:text-sm font-semibold">
                <a href="#projects" className="px-5 py-2 rounded-lg text-[var(--text-primary)] bg-[var(--bg)]/60 font-medium hover:bg-[var(--bg)]/70 duration-200 transition">
                    View Projects
                </a>
                <a href="#contact" className="px-5 py-2 rounded-lg text-[var(--text-primary)] bg-[var(--text-primary)]/10 hover:bg-[var(--text-primary)]/15 duration-200 transition">
                    Contact Me
                </a>
            </div>
        </motion.div>
    </div>
    </>
  )
}

export default HeroSection