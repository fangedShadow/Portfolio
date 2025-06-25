import React from 'react'
import { Playfair_Display } from 'next/font/google';


const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['500', '700'], // You can customize the weights as needed
});


function WorkExperience() {

    return (
        <div className={`text-greyWhite ${playfairDisplay.className} sect lg:w-5/6 w-full mt-10 md:mt-0 mb-20`} id='projects'>
            <div className='flex flex-col'>
                <div className='flex flex-row gap-6 mb-10'>
                    <div className=' border-solid border-mainRed border-2 md:w-24 w-16 my-auto ml-4'></div>
                    <h1 className='md:text-3xl text-2xl font-bold w-4/6 hover:text-mainRed'>
                        Work Experience
                    </h1>
                </div>
                <div className='flex justify-around p-2 gap-4 flex-col ml-4'>
                    <div>
                        <div className='project_tile flex justify-center h-full sm:hover:rounded-lg sm:hover:bg-hoverBlack sm:hover:cursor-pointer sm:hover:animate-enlarge-text'>
                            <div className='flex flex-col pb-2 pl-1 items-center hovText hover:bg-hoverBlack hover:cursor-pointer hover:rounded-lg sm:hover:none sm:hover:animate-none hover:animate-enlarge-text'>
                                <h1 className='sm:hidden text-lg text-greyWhite font-bold '>
                                    One Community Global
                                </h1>
                                <div className='img flex sm:items-end items-center pt-4 sm:flex-row flex-col'>
                                    <h3 className='text-lg text-greyWhite font-bold'>Jan 2025 - Present</h3>
                                    <span className='sm:hidden text-small text-darkGreyWhite text-justify'>
                                        At One Community Global, I contribute to the Highest Good Network project,
                                        and its other related platform, where I help in development of new features, fixed bugs,
                                        and participate in detailed pull request reviews using React.js, MongoDB,
                                        Express, and Node.js. I built a listing overview feature to improve data
                                        presentation and user experience, and designed an interactive map with geolocation
                                        integration for better navigation and engagement.
                                    </span>
                                </div>
                                <div className='flex-row flex-wrap justify-evenly gap-3 sm:hidden flex'>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> React </div>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> Node </div>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> MongoDB </div>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> Express </div>
                                </div>
                            </div>
                            <div className='w-9/12 hidden sm:flex sm:items-start sm:flex-col pl-4 pt-4 gap-1 hovText'>
                                <h1 className='xl:text-xl text-lg text-greyWhite font-bold'>
                                    One Community Global
                                </h1>
                                <p className='xl:text-base text-sm text-darkGreyWhite text-justify pr-2'>
                                    At One Community Global, I contribute to the Highest Good Network project,
                                    and its other related platform, where I help in development of new features, fixed bugs,
                                    and participate in detailed pull request reviews using React.js, MongoDB,
                                    Express, and Node.js. I built a listing overview feature to improve data
                                    presentation and user experience, and designed an interactive map with geolocation
                                    integration for better navigation and engagement.
                                    <span className='hidden lg:inline ml-1'>
                                        I also developed the backend for a Wishlist feature, ensuring smooth data flow and
                                        intuitive user interaction. In addition to building features, I resolved critical
                                        bugs and hotfix issues to enhance overall system stability and performance, while
                                        maintaining high code quality through consistent PR reviews and adherence to best practices.
                                    </span>
                                </p>
                                <div className='flex-row flex-wrap justify-evenly gap-3 hidden sm:flex'>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> React </div>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> Node </div>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> MongoDB </div>
                                    <div className='bg-mainRed rounded-xl py-0.5 px-2 text-center'> Express </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience