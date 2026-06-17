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
          <div className='border-solid border-mainRed border-2 md:w-24 w-16 my-auto ml-4 transition-all duration-300 group-hover:shadow-lg'></div>
          <h1 className='md:text-3xl font-bold text-2xl w-4/6 hover:text-mainRed transition-colors duration-300'>
            About Me
          </h1>
        </div>

        <p className='p-4 md:text-xl text-justify text-darkGreyWhite'>
          I am a full-stack developer currently pursuing my Master’s in Computer Science
          at the University of Illinois Urbana-Champaign (UIUC) while working as a Software
          Developer at One Community Global. I hold a B.S. in Computer Science from NYIT
          with a 3.90 GPA and have professional experience building scalable web applications
          and backend systems. My technical expertise spans React.js, Node.js, Express,
          TypeScript, Next.js, MongoDB, MySQL, and Docker. I&apos;m also Salesforce certified
          (Administration, Platform Developer I, and App Builder) with hands-on experience
          in full-stack development across multiple project domains.
        </p>

        <p className='p-4 md:text-xl text-justify text-darkGreyWhite'>
          I specialize in designing sophisticated user-facing components and engineering
          robust backend systems that handle critical operations. At One Community Global,
          I&apos;ve developed full-stack functionality for time-tracking software, community
          portals, listing and bidding platforms, and analytics dashboards. I&apos;ve implemented
          interactive features like availability calendars, geolocation-enabled maps, messaging
          platforms, and comprehensive analytics dashboards for data-driven decision making.
          I excel at developing end-to-end features, integrating REST APIs, optimizing performance,
          and collaborating effectively in team environments. My goal is to build reliable,
          scalable, and impactful software solutions that enhance user experience and drive
          business growth.
        </p>
      </div>
    </div>

  )
}
