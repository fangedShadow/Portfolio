'use client'

import React from 'react'
import { Playfair_Display } from 'next/font/google';



const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['500', '700'], // You can customize the weights as needed
  });

  
export default function Footer() {
  return (
    <footer className={`text-center mb-5 text-darkRed ${playfairDisplay.className} text-bold`}>
        Made By Yours Truly
        on Next,js and Tailwind
    </footer>
  )
}
