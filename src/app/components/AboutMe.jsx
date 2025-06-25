'use client'
import React from 'react'
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '700'],
});


export default function AboutMe() {
  return (
    <div className={`text-greyWhite ${playfairDisplay.className} sect w-[99%] mt-10 md:mt-0 mb-20`} id='about-me'>
      <div className='flex flex-col'>
        <div className='flex flex-row gap-6'>
          <div className=' border-solid border-mainRed border-2 md:w-24 w-16 my-auto ml-4'></div>
          <h1 className='md:text-3xl font-bold text-2xl w-4/6 hover:text-mainRed'>
            About ME
          </h1>
        </div>
        <p className='p-4 md:text-xl text-justify text-darkGreyWhite'>
          I am a full-stack developer with skills in JavaScript, React.js, Node.js,
          Express, and MongoDB, who graduated from NYIT. I have hands-on experience
          building scalable web applications and backend services, using modern frameworks
          like Next.js and Electron, and working with databases like MySQL and MongoDB.
        </p>
        <p className='p-4 md:text-xl text-justify text-darkGreyWhite'>
          I enjoy building responsive, user-focused interfaces and tackling 
          challenging technical problems through clean and efficient code. 
          My experience spans across developing end-to-end features, integrating 
          APIs, managing databases, and enhancing system performance for real-world 
          applications. I’ve worked on projects like interactive maps, feedback 
          portals, chat applications, and library systems, applying practical knowledge 
          of both front-end and back-end technologies. I’m comfortable working in 
          collaborative environments, participating in code reviews, debugging issues, 
          and continuously learning new tools and techniques to improve product quality. 
          Whether it’s enhancing UI/UX, optimizing server logic, or designing scalable 
          architecture, I’m passionate about creating meaningful solutions that make a difference.

        </p>
      </div>
    </div>

  )
}
