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


const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '700'], // You can customize the weights as needed
});

export default function TechStack() {
  return (
    <div className={`text-greyWhite ${playfairDisplay.className} sect lg:w-5/6 w-11/12 mt-10 md:mt-0 mb-20`} id='tech-stack'>
        <div className='flex flex-col'>
            <div className='flex flex-row gap-6 mb-10'>
                <div className=' border-solid border-mainRed border-2 md:w-24 w-16 my-auto ml-4'></div>
                <h1 className='md:text-3xl font-bold text-2xl w-4/6 hover:text-mainRed'>
                    Tech Stack
                </h1>
            </div>
            <div className='flex justify-evenly flex-wrap gap-2 flex-row ml-4'>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-neutral-950 text-orange-500 rounded-2xl text-xs md:text-lg hover:bg-neutral-900 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={java}
                  alt="java"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>Java</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-slate-900 text-yellow-200 rounded-2xl text-xs md:text-lg hover:bg-slate-950 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={python}
                  alt="java"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>Python</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-yellow-400 text-black rounded-2xl text-xs md:text-lg hover:bg-yellow-500 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={js}
                  alt="java"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>JavaScript</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-slate-50 text-orange-500 rounded-2xl text-xs md:text-lg hover:bg-slate-300 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={html}
                  alt="html"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>HTML</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-slate-50 text-sky-500 rounded-2xl text-xs md:text-lg hover:bg-slate-300 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={css}
                  alt="css"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>CSS</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-zinc-800 text-white rounded-2xl text-xs md:text-lg hover:bg-zinc-900 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={ejs}
                  alt="ejs"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>EJS</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-green-600 text-white rounded-2xl text-xs md:text-lg hover:bg-green-700 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={node}
                  alt="Node"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>Node.JS</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-purple-700 text-black rounded-2xl text-xs md:text-lg hover:bg-purple-800 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={exp}
                  alt="exprerss"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>Express.JS</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-slate-700 text-cyan-400 rounded-2xl text-xs md:text-lg hover:bg-slate-800 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={react}
                  alt="react"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>React</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-neutral-50 text-violet-600 rounded-2xl text-xs md:text-lg hover:bg-neutral-300 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={bs}
                  alt="Bootstrap"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>Bootstrap</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-neutral-50 text-purple-700 rounded-2xl text-xs md:text-lg hover:bg-neutral-300 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={red}
                  alt="Redux"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>Redux</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-stone-900 text-greyWhite rounded-2xl text-xs md:text-lg hover:bg-stone-950 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={next}
                  alt="Nextjs"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>Next.JS</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-stone-900 text-greyWhite rounded-2xl text-xs md:text-lg hover:bg-stone-950 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={tailwind}
                  alt="Tailwind"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>Tailwind</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-stone-800 text-green-500 rounded-2xl text-xs md:text-lg hover:bg-stone-900 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={MDB}
                  alt="MongoDB"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>MongoDB</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-neutral-50 text-red-900 rounded-2xl text-xs md:text-lg hover:bg-neutral-300 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={mong}
                  alt="MongoDB"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>Mongoose</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-neutral-50 text-cyan-700 rounded-2xl text-xs md:text-lg hover:bg-neutral-300 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={sql}
                  alt="MySQL"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>MySQL</div>
              </div>
              <div className='tile flex flex-col items-center gap-1 justify-center hover:animate-enlarge-text font-bold bg-blue-700 text-white rounded-2xl text-xs md:text-lg hover:bg-blue-800 cursor-pointer'>
                <div className='sm:mt-2 w-3/4 sm:w-1/2 mx-auto flex justify-center'>
                  <Image
                  src={dock}
                  alt="Docker"
                  width={100}
                  className=''
                />
                </div>
                <div className='hidden sm:block'>Docker</div>
              </div>
            </div>
        </div>
    </div>
  )
}
