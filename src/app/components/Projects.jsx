'use client'

import React from 'react'
import { Playfair_Display } from 'next/font/google';
import hms from '../images/hms.png'
import Image from 'next/image';
import msg from '../images/msg.png'
import sb from '../images/sb.png'
import senti from '../images/senti.png'
import pred from '../images/pred.png'

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['500', '700'], // You can customize the weights as needed
  });


export default function Projects() {

  return (
    <div className={`text-greyWhite ${playfairDisplay.className} sect lg:w-5/6 w-full mt-10 md:mt-0 mb-20`} id='projects'>
        <div className='flex flex-col'>
            <div className='flex flex-row gap-6 mb-10'>
                <div className=' border-solid border-mainRed border-2 md:w-24 w-16 my-auto ml-4'></div>
                <h1 className='md:text-3xl text-2xl font-bold w-4/6 hover:text-mainRed'>
                    Projects
                </h1>
            </div>
            <div className='flex justify-around p-2 gap-4 flex-col ml-4'>
                <div>
                    <a href="https://github.com/fangedShadow/SE_Project" target="_blank" rel="noopener noreferrer">
                        <div className='project_tile flex h-full sm:hover:rounded-lg sm:hover:bg-hoverBlack sm:hover:cursor-pointer sm:hover:animate-enlarge-text'>
                            <div className='flex flex-col pb-2 pl-1 items-center hover:bg-hoverBlack hover:cursor-pointer hover:rounded-lg sm:hover:none sm:hover:animate-none hover:animate-enlarge-text'>
                                <h1 className='sm:hidden text-lg text-greyWhite font-bold'>
                                        Hotel Management System
                                </h1>
                                <div className='img flex items-start pt-4'>
                                    <Image 
                                        src={hms}
                                        className='rounded-md p-1'
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </div>
                            
                            <div className='w-9/12 hidden sm:flex sm:items-start sm:flex-col pl-4 pt-4 gap-1 hovText'>
                                <h1 className='xl:text-xl text-lg text-greyWhite font-bold'>
                                    Hotel Management System
                                </h1>
                                <p className='xl:text-base text-sm text-darkGreyWhite text-justify pr-2'>
                                    Developed a Hotel Feedback Portal featuring user authentication, machine learning powered complaint categorization, 
                                    and PDF report generation for managers. 
                                    <span className='hidden lg:inline ml-1'>
                                        Implemented modular code structure for maintainability and 
                                        robust error handling, enhancing the overall user experience in the hospitality sector
                                    </span>
                                </p>
                                <div className='flex-row flex-wrap justify-evenly gap-3 hidden md:flex'>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> JavaScript </div>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> Node </div>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> Express </div>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> MongoDB </div>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> EJS </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/fangedShadow/Messenger" target="_blank" rel="noopener noreferrer">
                        <div className='project_tile flex h-full sm:hover:rounded-lg sm:hover:bg-hoverBlack sm:hover:cursor-pointer sm:hover:animate-enlarge-text'>
                            <div className='flex flex-col pb-2 pl-1 items-center hover:bg-hoverBlack hover:cursor-pointer hover:rounded-lg sm:hover:none sm:hover:animate-none hover:animate-enlarge-text'>
                                <h1 className='sm:hidden text-lg text-greyWhite font-bold'>
                                        Messenger
                                </h1>
                                <div className='img flex items-start pt-4'>
                                    <Image 
                                        src={msg}
                                        className='rounded-md p-1'
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </div>
                            
                            <div className='w-9/12 hidden sm:flex sm:items-start sm:flex-col pl-4 pt-4 gap-1 hovText'>
                                <h1 className='xl:text-xl text-lg text-greyWhite font-bold'>
                                    Messenger
                                </h1>
                                <p className='xl:text-base text-sm text-darkGreyWhite text-pretty mr-2'>
                                Designed and implemented a secure and feature-rich chat application for robust user authentication,
                                socket programming for real-time communication and an intuitive user interface. 

                                    <span className='hidden lg:inline ml-1'>
                                        Achieved seamless message and file transfer 
                                        functionality within a client-server architecture.
                                    </span>
                                </p>
                                <div className='flex-row flex-wrap justify-evenly gap-3 hidden md:flex'>
                                    <div className='bg-mainRed rounded-xl px-2 py-0.5 text-center'> Java </div>
                                    <div className='bg-mainRed rounded-xl px-2 py-0.5 text-center'> Java Swing </div>
                                    <div className='bg-mainRed rounded-xl px-2 py-0.5 text-center'> Java Socket </div>
                                    <div className='bg-mainRed rounded-xl px-2 py-0.5 text-center'> MySQL </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>      
                <div>
                    <a href="https://github.com/fangedShadow/Messenger" target="_blank" rel="noopener noreferrer">
                        <div className='project_tile flex h-full sm:hover:rounded-lg sm:hover:bg-hoverBlack sm:hover:cursor-pointer sm:hover:animate-enlarge-text'>
                            <div className='flex flex-col pb-2 pl-1 items-center hover:bg-hoverBlack hover:cursor-pointer hover:rounded-lg sm:hover:none sm:hover:animate-none hover:animate-enlarge-text'>
                                <h1 className='sm:hidden text-lg text-greyWhite font-bold'>
                                        Shadow Bank
                                </h1>
                                <div className='img flex items-start pt-4'>
                                    <Image 
                                        src={sb}
                                        className='rounded-md p-1'
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </div>
                            
                            <div className='w-9/12 hidden sm:flex sm:items-start sm:flex-col pl-4 pt-4 gap-1 hovText'>
                                <h1 className='xl:text-xl text-lg text-greyWhite font-bold'>
                                    Shadow bank
                                </h1>
                                <p className='xl:text-base text-sm text-darkGreyWhite text-pretty mr-2'>
                                Developed a Java-based banking system, "Shadow Bank," featuring robust database interactions with 
                                MySQL, secure user authentication, and comprehensive management of customer accounts, 
                                employee profiles, and approval workflows.
                                </p>
                                <div className='flex-row flex-wrap justify-evenly gap-3 hidden md:flex'>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> Java </div>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> MySQL </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>      
                <div>
                    <a href="https://github.com/fangedShadow/Reddit-Sentiment-Analysis" target="_blank" rel="noopener noreferrer">
                        <div className='project_tile flex h-full sm:hover:rounded-lg sm:hover:bg-hoverBlack sm:hover:cursor-pointer sm:hover:animate-enlarge-text'>
                            <div className='flex flex-col pb-2 pl-1 items-center hover:bg-hoverBlack hover:cursor-pointer hover:rounded-lg sm:hover:none sm:hover:animate-none hover:animate-enlarge-text'>
                                <h1 className='sm:hidden text-lg text-greyWhite font-bold'>
                                        Reddit Sentimental Analysis
                                </h1>
                                <div className='img flex items-start pt-4'>
                                    <Image 
                                        src={senti}
                                        className='rounded-md p-1'
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </div>
                            
                            <div className='w-9/12 hidden sm:flex sm:items-start sm:flex-col pl-4 pt-4 gap-1 hovText'>
                                <h1 className='xl:text-xl text-lg text-greyWhite font-bold'>
                                Reddit Sentimental Analysis
                                </h1>
                                <p className='xl:text-base text-sm text-darkGreyWhite mr-2 text-pretty'>
                                Conducted sentiment analysis on Reddit data using NLP techniques to gauge public opinion dynamics. 
                                Applied TextBlob and VADER for sentiment classification, while implementing extensive data preprocessing. 
                                    <span className='hidden lg:inline ml-1'>
                                        Leveraged pullpush.io API for data retrieval and zero-shot classification for topic labeling.
                                    </span>
                                </p>
                                <div className='flex-row flex-wrap justify-evenly gap-3 hidden md:flex'>
                                    <div className='bg-mainRed rounded-xl px-2 py-0.5 text-center'> Python </div>
                                    <div className='bg-mainRed rounded-xl px-2 py-0.5 text-center'> NLTK </div>
                                    <div className='bg-mainRed rounded-xl px-2 py-0.5 text-center'> VADER </div>
                                    <div className='bg-mainRed rounded-xl px-2 py-0.5 text-center'> TextBlob </div>
                                    <div className='bg-mainRed rounded-xl px-2 py-0.5 text-center'> SeaBorn </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/fangedShadow/Traffic-Prediction-and-Analysis" target="_blank" rel="noopener noreferrer">
                        <div className='project_tile flex h-full sm:hover:rounded-lg sm:hover:bg-hoverBlack sm:hover:cursor-pointer sm:hover:animate-enlarge-text'>
                            <div className='flex flex-col pb-2 pl-1 items-center hover:bg-hoverBlack hover:cursor-pointer hover:rounded-lg sm:hover:none sm:hover:animate-none hover:animate-enlarge-text'>
                                <h1 className='sm:hidden text-lg text-greyWhite font-bold'>
                                    Traffic Prediction
                                </h1>
                                <div className='img flex items-start pt-4'>
                                    <Image 
                                        src={pred}
                                        className='rounded-md p-1'
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </div>
                            
                            <div className='w-9/12 hidden sm:flex sm:items-start sm:flex-col pl-4 pt-4 gap-1 hovText'>
                                <h1 className='xl:text-xl text-lg text-greyWhite font-bold'>
                                    Traffic Prediction
                                </h1>
                                <p className='xl:text-base text-sm text-darkGreyWhite mr-2 text-pretty'>
                                    In the Traffic Prediction Project, I led the analysis of city traffic data using 
                                    logistic regression, decision tree, and KNN models to predict congestion patterns. 
                                    <span className='hidden lg:inline ml-1'>
                                        This involved preprocessing the data, visualizing trends, and developing models
                                        that achieved up to 86.83% accuracy.
                                    </span>
                                </p>
                                <div className='flex-row flex-wrap justify-evenly gap-3 hidden md:flex'>
                                    <div className='bg-mainRed rounded-xl px-2 py-0.5 text-center'> Python </div>
                                    <div className='bg-mainRed rounded-xl px-2 py-0.5 text-center'> Machine Learning </div>
                                    <div className='bg-mainRed rounded-xl px-2 py-0.5 text-center'> SKlearn </div>
                                    <div className='bg-mainRed rounded-xl px-2 py-0.5 text-center'> Pandas  </div>
                                    <div className='bg-mainRed rounded-xl px-2 py-0.5 text-center'> SeaBorn </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>      

            </div>
        </div>
    </div>
  )
}
