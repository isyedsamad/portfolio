import React from 'react'

const HeroSection = () => {
  return (
    <>
    <div className='w-full h-[calc(100dvh-84px)] px-15'>
        <div className='w-full min-h-full rounded-t-2xl bg-[url("/herobg.png")] bg-cover bg-center flex flex-col justify-center items-center text-center px-5'>
            <h2 className='font-medium text-2xl text-[var(--text-primary)]'>Hello! I'm <span className='bg-[var(--bg)] font-semibold px-2 uppercase'>Syed Samad</span></h2>
        </div>
    </div>
    </>
  )
}

export default HeroSection