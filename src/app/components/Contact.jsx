'use client'

import React from 'react'
import { Playfair_Display } from 'next/font/google';
import linked from '../images/linked.png'
import git from '../images/git.png'
import email from '../images/email.png'
import Image from 'next/image';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '700'], // You can customize the weights as needed
});

export default function Contact() {
  return (
    <div className={`text-greyWhite ${playfairDisplay.className} sect lg:w-5/6 w-11/12 mt-10 md:mt-0 mb-20`} id='contact'>
        <div className='flex flex-col'>
            <div className='flex flex-row gap-6'>
                <div className=' border-solid border-mainRed border-2 md:w-24 w-16 my-auto ml-4'></div>
                <h1 className='md:text-3xl font-bold text-2xl w-4/6 hover:text-mainRed'>
                    Contact Me
                </h1>
            </div>
            <div className='flex flex-row flex-wrap gap-5 mt-5'>
                <a href="https://www.linkedin.com/in/bhavpreet--singh/" target="_blank" rel="noopener noreferrer">
                    <div className='hover:hue-rotate-30 hover:animate-enlarge-text'>
                        <Image 
                            src={linked}
                            width={50}
                            alt='linkedIn'
                        />
                    </div>
                </a>
                <a href="https://github.com/fangedShadow" target="_blank" rel="noopener noreferrer">
                    <div className='hover:hue-rotate-30 hover:animate-enlarge-text'>
                        <Image 
                            src={git}
                            width={50}
                            alt='github'
                        />
                    </div>
                </a>
                <a href="mailto:bghotra2002@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className='hover:hue-rotate-30 hover:animate-enlarge-text'>
                        <Image 
                            src={email}
                            width={50}
                            alt='email'
                        />
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}
