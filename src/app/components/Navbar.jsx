
'use client'
import React, { useCallback, useEffect, useState } from 'react'
import logo from '../images/logo-nBG.png'
import Image from 'next/image'
import Link from 'next/link'
function Navbar() {

  const [isVisible, setIsVisible] = useState(false);
  const [isNavVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };

  const offdiv = () => {
    setIsVisible(false)
  }

  const offNav = () => {
    setNavVisible(false)
  }

  const handleScroll = useCallback(() => {
    const curScroll = window.scrollY;
    if(curScroll > lastScrollY && curScroll >100) {
      setNavVisible(false);
    }else {
      setNavVisible(true);
    }
    setLastScrollY(curScroll);
  }, [lastScrollY])

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [handleScroll])


  return (
      <nav className={`fixed w-11/12 md:w-10/12 z-50 transition-transform duration-500 ease-in-out 
                        ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}
      `}>
        {/* md above */}
        <div className='hidden relative md:flex justify-center font-bold font-tar'>
          <div className="absolute nav_shad md:flex hidden bg-white h-full w-11/12 mx-auto self-center">
          </div>
          <div className='relative flex justify-center bg-redBlack min-w-20 mx-auto px-2'>
              <Image
                src={logo}
                className='hover:animate-flip-card'
                width={100}
                alt="Logo"
              />
          </div>
          <div className='bg-redBlack hidden items-center md:flex md:flex-row-reverse w-full text-mainRed'>
              <div className='flex flex-row md:text-xl w-11/12 md:justify-evenly items-center justify-around gap-2 text-center '>
                  <Link className="hover:text-greyWhite hover:animate-enlarge-text text-2xl" href="#about-me" onClick={offNav}>About</Link>
                  <Link className="hover:text-greyWhite hover:animate-enlarge-text text-2xl" href="#projects" onClick={offNav}>Projects</Link>
                  <Link className="hover:text-greyWhite hover:animate-enlarge-text text-2xl" href="#tech-stack" onClick={offNav}>Tech Stack</Link>
                  <a className="hover:text-greyWhite hover:animate-enlarge-text text-2xl" href="/Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={offNav}>Resume</a>
                  <Link className="hover:text-greyWhite hover:animate-enlarge-text text-2xl" href="#contact" onClick={offNav}>Contact</Link>
              </div>
          </div>
        </div>
        {/* md below */}
        <div className='md:hidden flex-col flex items-center justify-center font-bold font-tar'>
          <div className='relative flex justify-center w-full bg-redBlack min-w-20 mx-auto px-2'>
            <div className="absolute md:hidden nav_shad flex bg-white h-full w-1/5 px-2 self-center"></div>
              <Image
                src={logo}
                className='hover:animate-flip-card'
                width={100}
                alt="Logo"
                onClick={toggleDiv}
              />
          </div>
          <div className='mt-5 w-full text-mainRed p-4' >
            <div className={`absolute bg-hoverBlack w-11/12 z-10 rounded-xl p-4 mx-auto transition-all duration-500 ease-in-out transform 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`} >
              <div className='flex flex-col items-center justify-center gap-2 text-center'>
                    <Link className="hover:text-greyWhite mx-auto hover:animate-enlarge-text text-2xl" href="#about-me" onClick={offdiv}>About</Link>
                    <Link className="hover:text-greyWhite hover:animate-enlarge-text text-2xl" href="#projects" onClick={offdiv}>Projects</Link>
                    <Link className="hover:text-greyWhite hover:animate-enlarge-text text-2xl" href="#tech-stack" onClick={offdiv}>Tech Stack</Link>
                    <a className="hover:text-greyWhite hover:animate-enlarge-text text-2xl" href="/Resume.pdf" target="_blank" rel="noopener noreferrer onClick={offdiv}">Resume</a>
                    <Link className="hover:text-greyWhite hover:animate-enlarge-text text-2xl" href="#contact" onClick={offdiv}>Contact</Link>
              </div>
            </div>
          </div>
        </div>
          
      </nav>


  )
}

export default Navbar