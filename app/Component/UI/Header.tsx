import React from 'react'

const Header = () => {
  return (
    <>
        {/* py-5 border-b border-[var(--text-secondary)]/50 */}
        <header className="flex justify-between items-center px-5 sm:px-10 md:px-20 py-5 sm:py-8">
            <h1 className="text-sm font-semibold text-[var(--text-primary)] text-center flex-1 sm:text-left">Android and Web Developer</h1>
            <nav className='hidden sm:block'>
                <ul className="flex gap-5 font-medium text-sm duration-300">
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header