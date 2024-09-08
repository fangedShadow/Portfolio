'use client'
import React from 'react'
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '700'], // You can customize the weights as needed
});


export default function AboutMe() {
  return (
    <div className={`text-greyWhite ${playfairDisplay.className} sect lg:w-5/6 w-11/12 mt-10 md:mt-0 mb-20`} id='about-me'>
        <div className='flex flex-col'>
            <div className='flex flex-row gap-6'>
                <div className=' border-solid border-mainRed border-2 md:w-24 w-16 my-auto ml-4'></div>
                <h1 className='md:text-3xl font-bold text-2xl w-4/6 hover:text-mainRed'>
                    About ME
                </h1>
            </div>
            <p className='p-4 md:text-xl text-justify text-darkGreyWhite'>
                I am senior at NYIT and about to graduate this fall. I have strong expertise in 
                programming languages like Java, Python, and JavaScript, along with hands-on experience
                in MongoDB, MySQL, and Node.js. I enjoy building dynamic web applications using modern 
                frameworks like React, Express, and Next.js. 
            </p>
            <p className='p-4 md:text-xl text-justify text-darkGreyWhite' >
                Currently, I&#39;m focused on expanding my skills in cloud computing, AI technologies, and building a better stronger foundation. 
                I thrive on solving complex problems and love creating innovative solutions that blend cutting-edge technologies 
                with practical applications. Whether it&#39;s developing interactive front-end experiences or optimizing back-end functionality, 
                I&#39;m always excited to learn and grow as a developer.
            </p>
        </div>
    </div>
    
  )
}
