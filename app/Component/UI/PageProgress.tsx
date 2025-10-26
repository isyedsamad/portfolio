'use client'
import React from 'react'
import {motion, useScroll} from 'motion/react'

const PageProgress = () => {
    const {scrollYProgress} = useScroll();
  return (
    <>
        <motion.div 
        style={{scaleX: scrollYProgress}} 
        className='fixed top-0 left-0 right-0 h-1 origin-left bg-orange-800 z-50'/>
    </>
  )
}

export default PageProgress