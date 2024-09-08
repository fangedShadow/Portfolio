'use client'

import React from 'react'
import { Playfair_Display } from 'next/font/google';
import main2 from '../images/main2.png'
import Image from 'next/image';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '700'], // You can customize the weights as needed
});

export default function Hero() {
  return (
    <div className={`flex flex-col-reverse md:justify-around items-center mt-10 gap-x-2 md:pt-24 md:pb-32 pb-20 ${playfairDisplay.className} p-12 md:flex-row`}>
        <div className='flex flex-col justify-center text-center md:text-left md:w-3/5 w-1/2'>
            <h1 className='text-greyWhite md:text-4xl  hidden md:block mx-24'>Hi,</h1>
            <h1 className='text-greyWhite md:text-5xl  hidden md:block mx-24'> I am <span className='text-mainRed'>Bhavpreet Singh</span></h1>
            <h2 className='text-darkGreyWhite  md:text-xl hidden md:block md:text-left text-center text-lg mx-24'>
                Full Stack Devloper
            </h2>
            <h1 className='text-greyWhite text-3xl md:hidden block text-center'>Hi, I am </h1>
            <span className=' text-3xl md:hidden block text-center text-mainRed'>Bhavpreet Singh</span>
            <h2 className='text-darkGreyWhite text-base md:hidden block md:text-left text-center'>
                Full Stack Devloper
            </h2>
        </div>
        <div className='md:w-2/5 w-1/2 flex flex-col items-center justify-center h-96'>
              <Image
                src={main2} 
                alt='Me'
                className='min-w-56 w-3/5 h-5/6 rounded-3xl backdrop-hue-rotate-90'
              />
        </div>
    </div>
  )
}
