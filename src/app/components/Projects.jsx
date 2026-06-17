'use client'

import React from 'react'
import { Playfair_Display } from 'next/font/google';
import hms from '../images/hms.png'
import Image from 'next/image';
import msg from '../images/msg.png'
import sb from '../images/sb.png'
import senti from '../images/senti.png'
import lds from '../images/shelf.png'
import pred from '../images/pred.png'
import wc4u from '../images/wc4u.png'

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['500', '700'],
});

const projectsData = [
    {
        id: 1,
        title: 'Shelves',
        shortTitle: 'Shelves',
        description: 'Integrated Node.js, Next.js, MongoDB, and others, with features like personalized recommendations and seamless book delivery.',
        fullDescription: 'Our main objective is to offer a convenient platform for accessing physical library books, bypassing the need to visit libraries in person and serving as a learning opportunity for us to explore new technologies hands-on.',
        image: lds,
        tags: ['Next.JS', 'Node', 'MongoDB', 'Tailwind', 'Clerk'],
        link: 'https://github.com/fangedShadow/shelves'
    },
    {
        id: 1,
        title: 'We Care 4 U – Healthcare Management System ',
        shortTitle: 'We Care 4 U',
        description: 'The goal of the platform is to provide a simplified healthcare experience by combining different aspects of healthcare in one place.',
        fullDescription: 'The platform will help users in applying for insurance and managing their current policies. It will also help users in searching for doctors and clinics that accept their insurance, schedule appointments with them, view medical records such as consultation notes, and lab results. ',
        image: wc4u,
        tags: ['TypeScript','Angular', 'Node', 'MySQL', 'Tailwind', 'Express', 'Prisma'],
        link: 'https://github.com/fangedShadow?tab=repositories'
    },
    {
        id: 2,
        title: 'Hotel Management System',
        shortTitle: 'Hotel Management System',
        description: 'Developed a Hotel Feedback Portal featuring user authentication, machine learning powered complaint categorization, and PDF report generation for managers.',
        fullDescription: 'Implemented modular code structure for maintainability and robust error handling, enhancing the overall user experience in the hospitality sector.',
        image: hms,
        tags: ['JavaScript', 'Node', 'Express', 'MongoDB', 'EJS'],
        link: 'https://hotel-feedback-portal.onrender.com'
    },
    {
        id: 3,
        title: 'Messenger',
        shortTitle: 'Messenger',
        description: 'Designed and implemented a secure and feature-rich chat application for robust user authentication, socket programming for real-time communication and an intuitive user interface.',
        fullDescription: 'Achieved seamless message and file transfer functionality within a client-server architecture.',
        image: msg,
        tags: ['Java', 'Java Swing', 'Java Socket', 'MySQL'],
        link: 'https://github.com/fangedShadow/Messenger'
    },
    {
        id: 4,
        title: 'Shadow Bank',
        shortTitle: 'Shadow bank',
        description: 'Developed a Java-based banking system, "Shadow Bank," featuring robust database interactions with MySQL, secure user authentication, and comprehensive management of customer accounts, employee profiles, and approval workflows.',
        image: sb,
        tags: ['Java', 'MySQL'],
        link: 'https://github.com/fangedShadow/Messenger'
    },
    {
        id: 5,
        title: 'Reddit Sentiment Analysis',
        shortTitle: 'Reddit Sentimental Analysis',
        description: 'Conducted sentiment analysis on Reddit data using NLP techniques to gauge public opinion dynamics. Applied TextBlob and VADER for sentiment classification, while implementing extensive data preprocessing.',
        fullDescription: 'Leveraged pullpush.io API for data retrieval and zero-shot classification for topic labeling.',
        image: senti,
        tags: ['Python', 'NLTK', 'VADER', 'TextBlob', 'SeaBorn'],
        link: 'https://github.com/fangedShadow/Reddit-Sentiment-Analysis'
    },
    {
        id: 6,
        title: 'Traffic Prediction',
        shortTitle: 'Traffic Prediction',
        description: 'In the Traffic Prediction Project, I led the analysis of city traffic data using logistic regression, decision tree, and KNN models to predict congestion patterns.',
        fullDescription: 'This involved preprocessing the data, visualizing trends, and developing models that achieved up to 86.83% accuracy.',
        image: pred,
        tags: ['Python', 'Machine Learning', 'SKlearn', 'Pandas', 'SeaBorn'],
        link: 'https://github.com/fangedShadow/Traffic-Prediction-and-Analysis'
    }
]

function ProjectTile({ project }) {
    return (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className='group'>
            <div className='project_tile flex justify-center h-full sm:hover:rounded-lg sm:hover:bg-hoverBlack sm:hover:cursor-pointer sm:hover:animate-enlarge-text transition-all duration-300'>
                <div className='flex flex-col pb-2 pl-1 items-center hover:bg-hoverBlack hover:cursor-pointer hover:rounded-lg sm:hover:none sm:hover:animate-none hover:animate-enlarge-text sm:hidden'>
                    <h1 className='text-lg text-greyWhite font-bold'>
                        {project.shortTitle}
                    </h1>
                    <div className='img flex items-start pt-4'>
                        <Image
                            src={project.image}
                            className='rounded-md p-1 xs:w-[200px] transition-transform duration-300 hover:scale-105'
                            width={300}
                            height={200}
                            alt={project.title}
                        />
                    </div>
                </div>

                <div className='hidden sm:flex w-full h-full sm:hover:rounded-lg sm:hover:bg-hoverBlack transition-all duration-300 pb-1'>
                    <div className='img flex items-center pt-4 px-4 py-4'>
                        <Image
                            src={project.image}
                            className='rounded-md p-1 transition-transform duration-300 group-hover:scale-105'
                            width={300}
                            height={200}
                            alt={project.title}
                        />
                    </div>

                    <div className='w-9/12 flex sm:items-start sm:flex-col pl-4 pt-4 gap-1 hovText'>
                        <h1 className='xl:text-xl text-lg text-greyWhite font-bold group-hover:text-mainRed transition-colors duration-300'>
                            {project.title}
                        </h1>
                        <p className='xl:text-base text-sm text-darkGreyWhite text-justify pr-2'>
                            {project.description}
                            {project.fullDescription && (
                                <span className='hidden lg:inline ml-1'>
                                    {project.fullDescription}
                                </span>
                            )}
                        </p>
                        <div className='flex-row flex-wrap justify-evenly gap-3 hidden md:flex pt-2'>
                            {project.tags.map((tag) => (
                                <div key={tag} className='bg-mainRed rounded-xl py-0.5 px-2 text-center text-xs font-medium hover:bg-opacity-80 transition-all duration-300'>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default function Projects() {

    return (
        <div className={`text-greyWhite ${playfairDisplay.className} sect lg:w-5/6 w-full mt-10 md:mt-0 mb-20`} id='projects'>
            <div className='flex flex-col'>
                <div className='flex flex-row gap-6 mb-10'>
                    <div className='border-solid border-mainRed border-2 md:w-24 w-16 my-auto ml-4 transition-all duration-300 group-hover:shadow-lg'></div>
                    <h1 className='md:text-3xl text-2xl font-bold w-4/6 hover:text-mainRed transition-colors duration-300'>
                        Projects
                    </h1>
                </div>
                <div className='flex justify-around p-2 gap-4 flex-col ml-4'>
                    {projectsData.map((project) => (
                        <div key={project.id}>
                            <ProjectTile project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
