"use client";
import React from 'react'
import GradientButton from '../GradientButton'
import ish from '@/../public/assets/ish.png';
import ellipse_1 from '@/../public/assets/ellipse-1.png'
import ellipse_2 from '@/../public/assets/ellipse-2.png'
import ellipse_3 from '@/../public/assets/ellipse-3.png'
import ellipse_4 from '@/../public/assets/ellipse-4.png'
import github from '@/../public/assets/github.png'
import linkedin from '@/../public/assets/linkedin.png'
import Image from 'next/image';

export default function About() {

    // Hover Effects
    const handleMouseEnter = () => {

       // id github
        const github = document.getElementById('github');
        // set width 33
        github!.style.width = '33px';
        // transition
        github!.style.transition = 'width 0.3s ease-in-out';
        
    }

    const handleMouseLeave = () => {
        // id github
        const github = document.getElementById('github');
        // remove scale
        github!.style.width = '25px';
        // transition
        github!.style.transition = 'width 0.3s ease-in-out';
    }

    // Hover Effects
    const handleMouseEnter1 = () => {

        // id github
        const github = document.getElementById('linkedin');
         // set width 33
        github!.style.width = '33px';
         // transition
        github!.style.transition = 'width 0.3s ease-in-out';
    
    }

    const handleMouseLeave1 = () => {
         // id github
        const github = document.getElementById('linkedin');
         // remove scale
        github!.style.width = '25px';
         // transition
        github!.style.transition = 'width 0.3s ease-in-out';
    }

    return (
        <div className='container mx-auto border-l-[1px] border-r-[1px] border-black border-opacity-20'>
            <div className='flex justify-center items-center'>
                <div className='flex xl:flex-row justify-center flex-col-reverse items-center lg:h-[50rem] 2xl:h-[50rem]  w-full'>
                    {/* Info Container p-10 */} 
                    <div className='flex xl:text-left ssm:text-center xl:p-10 lg:mb-[3rem] text-center mb-7  flex-col w-[100%]'>
                        <h1 className='xl:text-[4rem] ssm:p-2 text-[2.6rem] xl:leading-[4rem] lg:leading-[3rem] font-extrabold leading-[4rem]'><span className='text-transparent drop-shadow-md bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>Building the web</span> <br/> one line at a time.</h1>
                        <p className='w-[100%] p-3 mt-3 2xl:text-xl text-[#666666]'>Hi! I’m Ish, a web developer based in the Philippines. I create user-friendly web apps for fast-growing startups.</p>
                        <div className='mt-8 xl:ml-[1rem] justify-center xl:justify-start flex'>
                            <GradientButton className='w-[8rem]'>Book A Call</GradientButton>
                            <a href="#" className="mt-1 ml-10 font-extrabold group text-black transition duration-300">
                                Download CV
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                            </a>
                        </div>
                    </div>

                    {/* Image Container */}
                    <div className='relative justify-start items-center flex-grow w-[100%] h-[20%]  flex'>

                        <div className='flex justify-center relative w-[100%] h-auto'>
                            {/* <Image
                                id='github'
                                width={25}
                                src={github}
                                alt='github'
                                className=' absolute left-[6.5%] animate-circular1 w-[6%] bg-black rounded-full p-1'
                            />
                            <Image
                                id='linkedin'
                                width={25}
                                src={linkedin}
                                alt='linkedin'
                                className='absolute left-[94%] w-[6%] animate-circular2 bg-black rounded-full p-1'
                            /> */}
                            <div className='z-[1] h-auto flex ssm:w-[90%] sm:w-[60%] md:w-[55%] lg:w-[45%] xl:w-[70%] relative justify-center items-center'>
                                <Image
                                    src={ish}
                                    alt='ish'
                                    className='z-[1]'
                                />
                                <Image
                                    src={ellipse_1}
                                    alt='ellipse'
                                    className='absolute w-[58%]'
                                />
                                <Image
                                    src={ellipse_2}
                                    alt='ellipse'
                                    className='absolute w-[70%]'
                                />
                                <Image
                                    src={ellipse_3}
                                    alt='ellipse'
                                    className='absolute w-[82%]'
                                />
                                <Image
                                    src={ellipse_4}
                                    alt='ellipse'
                                    className='absolute w-[93%]'
                                />
                                <Image
                                    id='github'
                                    width={25}
                                    src={github}
                                    alt='github'
                                    className=' absolute left-[6.5%] animate-circular1 w-[6%] bg-black rounded-full p-1'
                                />
                                <Image
                                    id='linkedin'
                                    width={25}
                                    src={linkedin}
                                    alt='linkedin'
                                    className='absolute left-[94%] w-[6%] animate-circular2 bg-black rounded-full p-1'
                                />
                            </div>
                        </div>

                        {/* <div className='animate-pulse w-[50%] overflow-hidden flex absolute transform  '>
                            <Image
                                src={ellipse_1}
                                alt='ellipse'
                            />
                        </div> */}

                        {/* <div className='flex animate-pulse overflow-hidden animation-delay-1300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                            <Image
                                src={ellipse_2}
                                alt='ellipse'
                            />
                        </div>

                        <div className='flex animate-pulse overflow-hidden animation-delay-1600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                            <Image
                                src={ellipse_3}
                                alt='ellipse'
                            />
                        </div>

                        <div className='flex animation-delay-1900 overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <Image
                                src={ellipse_4}
                                alt='ellipse'
                            />
                        </div> */}

                        {/* <div className='flex hidden duration-300 absolute animate-circular1 bg-black rounded-full p-1 left-[6.2rem] top-[22rem]  '>
                            <Image
                                id='github'
                                width={25}
                                src={github}
                                alt='github'
                            />
                        </div>

                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='z-[2] flex absolute animate-circular1 p-6 opacity-0 bg-black rounded-full left-[6.2rem] top-[22rem]  '>
                            
                        </div>

                        <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className='z-[2] flex absolute left-[31.9rem] top-[24.5rem] animate-circular2 bg-black rounded-full p-6 opacity-0 '>
                            
                        </div> */}

                        {/* flex absolute  bg-black rounded-full p-1 left-[31.9rem] top-[24.5rem]  */}
                        {/* <div className='flex absolute hidden left-[31.9rem] top-[24.5rem] animate-circular2 bg-black rounded-full p-1'>
                            <Image
                                id='linkedin'
                                width={25}
                                src={linkedin}
                                alt='linkedin'
                            />
                        </div> */}

                        
                    </div>
                </div>
            </div>
        </div>
    )
}
