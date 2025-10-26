'use client'
import React from 'react'
import {motion} from 'motion/react'

const AboutUs = () => {
  return (
    <>
        <div className='flex justify-center items-center flex-col gap-3' id='about'>
            <motion.h2 className='font-semibold text-md'>About Me</motion.h2>
        </div>
    </>
  )
}

export default AboutUs