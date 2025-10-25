import React from 'react'

const Header = () => {
  return (
    <>
        {/* py-5 border-b border-[var(--text-secondary)]/50 */}
        <header className="flex justify-between items-center px-20 py-8">
            <h1 className="text-sm font-semibold text-[var(--text-primary)]">Android and Web Developer</h1>
            <nav>
                <ul className="flex gap-5 font-medium text-sm">
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