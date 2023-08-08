"use client";

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import service1 from "@/../public/assets/service1.png"
import service2 from "@/../public/assets/service2.png"
import service3 from "@/../public/assets/service3.png"
import ellipse_1 from '@/../public/assets/ellipse-1.png'
import ellipse_2 from '@/../public/assets/ellipse-2.png'
import ellipse_3 from '@/../public/assets/ellipse-3.png'
import ellipse_4 from '@/../public/assets/ellipse-4.png'
import vibrant from '@/../public/assets/vibrant.png'
import ish from '@/../public/assets/ish.png'
import Image from "next/image"

export default function Services() {
    const [ref, inView] = useInView();

    const variants = {
        visible: { width: '0%', transition: { duration : 0.3}, },
        hidden: { width: '100%' }
    };
    

    return (
        <div className='border-t-[1px] border-black border-b-[1px] border-opacity-20 h-[100%] w-[100%]'>
            <div className='container flex mx-auto xl:flex-row relative flex-col overflow-hidden border-l-[1px] border-r-[1px] h-auto border-opacity-20 border-black'>
                {/* services 1 column */}
                <div className='flex p-[2.5%] overflow-hidden mt-[2rem] relative flex-col w-auto flex-grow h-[65rem] border-opacity-20 border-black'>
                    {/* services info */}
                    
                    <motion.div>
                        <p className='font-bold text-[1rem]  tracking-[0.15rem]'><span className='text-transparent drop-shadow-md bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>SERVICES</span></p>
                    </motion.div>
                    <div className="flex w-auto">
                        <div className='leading-[2.5rem] sm:leading-[2.8rem] md:leading-[3rem] lg:leading-[3.4rem] xl:leading-[3.7rem] 2xl:leading-[4rem] w-auto relative flex flex-col'>
                                
                            <div className='text-[2.1rem] w-[100%] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] xl:text-[3.4rem] flex font-extrabold relative'><p>Projects that solve </p>
                                <motion.div
                                    ref={ref}
                                    variants={variants}
                                    animate={inView ? "visible" : "hidden"}
                                    id="box1" className='absolute bg-left-top  w-[100%] flex h-[100%] right-0 rounded-lg bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>

                                </motion.div>
                            </div>
                            <div className='text-[2.1rem] w-[100%] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] xl:text-[3.4rem] flex font-extrabold relative'><p>problems on code</p>
                                <motion.div
                                    ref={ref}
                                    variants={variants}
                                    animate={inView ? "visible" : "hidden"}
                                    id="box1" className='absolute bg-left-top  w-[100%] flex h-[100%] rounded-lg bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>

                                </motion.div>
                            </div>
                            <div className='text-[2.1rem] w-[50%] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] xl:text-[3.4rem] flex font-extrabold relative'><p>at a time</p>
                                <motion.div
                                    ref={ref}
                                    variants={variants}
                                    animate={inView ? "visible" : "hidden"}
                                    id="box1" className='absolute bg-left-top  w-[100%] flex h-[100%] right-0 rounded-lg bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>

                                </motion.div>
                            </div>
                        </div>  
                    </div>
                    {/* circle  */}
                    <div className="absolute -left-[85%] top-[20%] ssm:top-[25%] ssm:-left-[80%] 2xl:-left-[48%] 2xl:top-[30%] xl:-left-[57%] xl:top-[25%] lg:-left-[65%] lg:top-[25%] md:-left-[68%] md:top-[25%] sm:-left-[68%] sm:top-[25%]">
                        <div className='relative justify-start items-center flex-grow w-[100%] h-[20%]  flex'>
                            <div className='flex justify-center relative w-[100%] h-auto'>
                                <div className='z-[1] h-auto flex ssm:w-[90%] sm:w-[60%] md:w-[55%] lg:w-[45%] xl:w-[70%] relative justify-center items-center'>
                                    <Image
                                        src={ish}
                                        alt='ish'
                                        className='z-[1] opacity-0 2xl:w-[60rem] xl:w-[60rem]  lg:w-[90rem]  md:w-[70rem] sm:w-[60rem] w-[40rem]'
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
                                        id='service1'
                                        width={25}
                                        src={service1}
                                        alt='service1'
                                        className=' absolute left-[6.5%] animate-circular1 w-[6%] rounded-full p-1'
                                    />
                                
                                    <Image
                                        id='service2'
                                        width={25}
                                        src={service2}
                                        alt='service2'
                                        className='absolute left-[94%] w-[6%] animate-circular2 rounded-full p-1'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                
                    <div className="relative -top-[20%]">
                        <Image src={vibrant} alt="vibrant" className="absolute left-[50%]"/>
                    </div>
                    
                </div>

                {/* services 3 columns */}
                <div className='flex flex-col 2xl:w-[40%] h-[100%]  xl:border-l-[1px] border-l-[0px] border-black border-opacity-20 lg:w-[100%] xl:w-[40%]'>
                    <div className="h-[25rem] flex w-full border-b-[1px] justify-center border-t-[1px] 2xl:border-t-[0px] xl:border-t-[0px]  lg:border-t-[1px] content-center border-black border-opacity-20">
                        <div className="flex justify-center items-center w-[80%]">
                            <div className="flex h-[50%] p-2 pr-10 items-start">
                                <Image src={service1} className="w-[6rem] " alt="service1" />
                            </div>
                            <div>
                                <h2 className="text-[1.5rem] font-bold">What I can do for you</h2>
                                <p className="mt-4 mb-7 w-[90%] text-[1.1rem] opacity-75">Faster, better, products that your users will love. Here`s all the services that I provide :</p>
                                <ul className="list-disc">
                                    <li className="font-bold py-1">Web Development</li>
                                    <li className="font-bold py-1">Web Design</li>
                                    <li className="font-bold py-1">Comissions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="h-[25rem] flex w-full border-b-[1px] justify-center content-center border-black border-opacity-20">
                        <div className="flex justify-center items-center w-[80%]">
                            <div className="flex h-[50%] p-2 pr-10 items-start">
                                <Image src={service3} className="w-[6rem] " alt="service3" />
                            </div>
                            <div>
                                <h2 className="text-[1.5rem] font-bold">What I can do for you</h2>
                                <p className="mt-4 mb-7 w-[90%] text-[1.1rem] opacity-75">Faster, better, products that your users will love. Here`s all the services that I provide :</p>
                                <ul className="list-disc">
                                    <li className="font-bold py-1">Web Development</li>
                                    <li className="font-bold py-1">Web Design</li>
                                    <li className="font-bold py-1">Comissions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="h-[25rem] flex w-full border-b-[1px] justify-center content-center border-black border-opacity-20">
                        <div className="flex justify-center items-center w-[80%]">
                            <div className="flex h-[50%] p-2 pr-10 items-start">
                                <Image src={service2} className="w-[6rem] " alt="service2" />
                            </div>
                            <div>
                                <h2 className="text-[1.5rem] font-bold">What I can do for you</h2>
                                <p className="mt-4 mb-7 w-[90%] text-[1.1rem] opacity-75">Faster, better, products that your users will love. Here`s all the services that I provide :</p>
                                <ul className="list-disc">
                                    <li className="font-bold py-1">Web Development</li>
                                    <li className="font-bold py-1">Web Design</li>
                                    <li className="font-bold py-1">Comissions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    )
}
