'use client'
import React from 'react'
import {motion} from 'motion/react'

const Marquee = () => {
    const firstMarquee = [
        {img: '/tech-stack/java.png', alt: 'Java' },
        {img: '/tech-stack/kotlin.png', alt: 'Kotlin' },
        {img: '/tech-stack/html5.png', alt: 'HTML5' },
        {img: '/tech-stack/css3.png', alt: 'CSS3' },
        {img: '/tech-stack/nextjs2.png', alt: 'Next.js' },
        {img: '/tech-stack/react.png', alt: 'ReactJS' },
        {img: '/tech-stack/typescript.png', alt: 'TypeScript' },
        {img: '/tech-stack/js.png', alt: 'JavaScript' },
        {img: '/tech-stack/tailwindcss.png', alt: 'Tailwind CSS' },
        {img: '/tech-stack/nodejs.png', alt: 'Node.js' },
        {img: '/tech-stack/php.png', alt: 'PHP' },
        {img: '/tech-stack/mongodb.png', alt: 'MongoDB' },
        {img: '/tech-stack/firebase.png', alt: 'Firebase' },
    ]
    const secondMarquee = [
        {img: '/tech-stack/android.png', alt: 'Android' },
        {img: '/tech-stack/git.png', alt: 'Git' },
        {img: '/tech-stack/mysql.png', alt: 'MySQL' },
        {img: '/tech-stack/huggingface.png', alt: 'Hugging Face' },
        {img: '/tech-stack/notion.png', alt: 'Notion' },
        {img: '/tech-stack/postman.png', alt: 'Postman' },
        {img: '/tech-stack/postgresql.png', alt: 'PostgreSQL' },
        {img: '/tech-stack/redis.png', alt: 'Redis' },
        {img: '/tech-stack/supabase.png', alt: 'Supabase' },
        {img: '/tech-stack/npm.png', alt: 'npm' },
        // {img: '/tech-stack/vercel.png', alt: 'Vercel' },
    ]
  return (
    <>
        <div className='w-full flex justify-center items-center overflow-hidden'>
            <div className="container mx-auto py-7 sm:py-10 flex flex-col gap-5">
                <div className='flex gap-4'>
                    <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration: 60, repeat:Infinity, ease:'linear'}} className='flex flex-shrink-0 gap-4'>
                        {firstMarquee.map((item, index) => (
                            <div key={index} className='bg-[var(--card)] rounded-xl py-3 px-6 flex justify-center items-center gap-3'>
                                <img src={item.img} alt={`tech-stack-${index}`} className='w-7 h-7 object-contain'/>
                                <p className='text-xs font-semibold'>{item.alt}</p>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{duration: 60, repeat:Infinity, ease:'linear'}} className='flex flex-shrink-0 gap-4'>
                        {firstMarquee.map((item, index) => (
                            <div key={index} className='bg-[var(--card)] rounded-xl py-3 px-6 flex justify-center items-center gap-3'>
                                <img src={item.img} alt={`tech-stack-${index}`} className='w-7 h-7 object-contain'/>
                                <p className='text-xs font-semibold'>{item.alt}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className='flex gap-4'>
                    <motion.div initial={{x:"-100%"}} animate={{x:0}} transition={{duration: 60, repeat:Infinity, ease:'linear'}} className='flex flex-shrink-0 gap-4'>
                        {secondMarquee.map((item, index) => (
                            <div key={index} className='bg-[var(--card)] rounded-xl py-3 px-6 flex justify-center items-center gap-3'>
                                <img src={item.img} alt={`tech-stack-${index}`} className='w-7 h-7 object-contain'/>
                                <p className='text-xs font-semibold'>{item.alt}</p>
                            </div>
                        ))}
                    </motion.div>
                    <motion.div initial={{x:"-100%"}} animate={{x:0}} transition={{duration: 60, repeat:Infinity, ease:'linear'}} className='flex flex-shrink-0 gap-4'>
                        {secondMarquee.map((item, index) => (
                            <div key={index} className='bg-[var(--card)] rounded-xl py-3 px-6 flex justify-center items-center gap-3'>
                                <img src={item.img} alt={`tech-stack-${index}`} className='w-7 h-7 object-contain'/>
                                <p className='text-xs font-semibold'>{item.alt}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Marquee