import React from 'react'
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import java from '../images/java.png'
import python from '../images/python.png'
import js from '../images/java-script.png'
import html from '../images/html.png'
import css from '../images/social.png'
import ejs from '../images/ejs.png'
import node from '../images/node.png'
import exp from '../images/exp.png'
import react from '../images/react.png'
import bs from '../images/BS.png'
import red from '../images/red.png'
import next from '../images/nextjs.png'
import tailwind from '../images/tailwind.png'
import MDB from '../images/mdb.png'
import mong from '../images/mong.png'
import sql from '../images/sql.png'
import dock from '../images/dock.png'
import ts from '../images/ts.png'
import prisma from '../images/prisma.png'
import sadmin from '../images/sadmin.png'
import ap from '../images/ap.png'
import pd1 from '../images/pd1.png'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '700'],
});

const techStack = [
  { id: 1, name: 'Java', image: java, bgColor: 'bg-neutral-950', textColor: 'text-orange-500', hoverBg: 'hover:bg-neutral-900' },
  { id: 2, name: 'Python', image: python, bgColor: 'bg-slate-900', textColor: 'text-yellow-200', hoverBg: 'hover:bg-slate-950' },
  { id: 3, name: 'JavaScript', image: js, bgColor: 'bg-yellow-400', textColor: 'text-black', hoverBg: 'hover:bg-yellow-500' },
  { id: 4, name: 'TypeScript', image: ts, bgColor: 'bg-slate-600', textColor: 'text-white', hoverBg: 'hover:bg-blue-700' },
  { id: 5, name: 'HTML', image: html, bgColor: 'bg-slate-50', textColor: 'text-orange-500', hoverBg: 'hover:bg-slate-300' },
  { id: 6, name: 'CSS', image: css, bgColor: 'bg-slate-50', textColor: 'text-sky-500', hoverBg: 'hover:bg-slate-300' },
  { id: 7, name: 'EJS', image: ejs, bgColor: 'bg-zinc-800', textColor: 'text-white', hoverBg: 'hover:bg-zinc-900' },
  { id: 8, name: 'Node.JS', image: node, bgColor: 'bg-green-600', textColor: 'text-white', hoverBg: 'hover:bg-green-700' },
  { id: 9, name: 'Express.JS', image: exp, bgColor: 'bg-purple-700', textColor: 'text-black', hoverBg: 'hover:bg-purple-800' },
  { id: 10, name: 'React', image: react, bgColor: 'bg-slate-700', textColor: 'text-cyan-400', hoverBg: 'hover:bg-slate-800' },
  { id: 11, name: 'Bootstrap', image: bs, bgColor: 'bg-neutral-50', textColor: 'text-violet-600', hoverBg: 'hover:bg-neutral-300' },
  { id: 12, name: 'Redux', image: red, bgColor: 'bg-neutral-50', textColor: 'text-purple-700', hoverBg: 'hover:bg-neutral-300' },
  { id: 13, name: 'Next.JS', image: next, bgColor: 'bg-stone-900', textColor: 'text-greyWhite', hoverBg: 'hover:bg-stone-950' },
  { id: 14, name: 'Tailwind', image: tailwind, bgColor: 'bg-stone-900', textColor: 'text-greyWhite', hoverBg: 'hover:bg-stone-950' },
  { id: 15, name: 'MongoDB', image: MDB, bgColor: 'bg-stone-800', textColor: 'text-green-500', hoverBg: 'hover:bg-stone-900' },
  { id: 16, name: 'Mongoose', image: mong, bgColor: 'bg-neutral-50', textColor: 'text-red-900', hoverBg: 'hover:bg-neutral-300' },
  { id: 17, name: 'MySQL', image: sql, bgColor: 'bg-neutral-50', textColor: 'text-cyan-700', hoverBg: 'hover:bg-neutral-300' },
  { id: 18, name: 'Prisma', image: prisma, bgColor: 'bg-gray-700', textColor: 'text-slate-300', hoverBg: 'hover:bg-gray-800'},
  { id: 19, name: 'Docker', image: dock, bgColor: 'bg-blue-700', textColor: 'text-white', hoverBg: 'hover:bg-blue-800' },
  { id: 20, name: 'Salesforce Admin', image: sadmin, bgColor: 'bg-blue-400', textColor: 'text-greyWhite', hoverBg: 'hover:bg-blue-800' },
  { id: 21, name: 'Salesforce App Builder', image: ap, bgColor: 'bg-blue-400', textColor: 'text-greyWhite', hoverBg: 'hover:bg-blue-800' },
  { id: 22, name: 'Salesforce Platform Dev I', image: pd1, bgColor: 'bg-blue-400', textColor: 'text-greyWhite', hoverBg: 'hover:bg-blue-800' },
]

function TechTile({ tech }) {
  return (
    <div className={`tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold ${tech.bgColor} ${tech.textColor} rounded-2xl text-xs md:text-lg ${tech.hoverBg} cursor-pointer transition-all duration-300 group`}>
      <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
        {tech.isText ? (
          <span className='text-sm md:text-lg font-bold'>{tech.name}</span>
        ) : (
          <Image
            src={tech.image}
            alt={tech.name}
            width={100}
            className='transition-transform duration-300 group-hover:scale-110 '
          />
        )}
      </div>
      <div className='hidden sm:block text-center'>{tech.name}</div>
    </div>
  )
}

export default function TechStack() {
  return (
    <div className={`text-greyWhite ${playfairDisplay.className} sect lg:w-5/6 w-11/12 mt-10 md:mt-0 mb-20`} id='tech-stack'>
        <div className='flex flex-col'>
            <div className='flex flex-row gap-6 mb-10'>
                <div className='border-solid border-mainRed border-2 md:w-24 w-16 my-auto ml-4 transition-all duration-300 group-hover:shadow-lg'></div>
                <h1 className='md:text-3xl font-bold text-2xl w-4/6 hover:text-mainRed transition-colors duration-300'>
                    Skills & Certifications
                </h1>
            </div>
            <div className='flex justify-evenly flex-wrap gap-2 flex-row ml-4'>
              {techStack.map((tech) => (
                <TechTile key={tech.id} tech={tech} />
              ))}
            </div>
        </div>
    </div>
  )
}
