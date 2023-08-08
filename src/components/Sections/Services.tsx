"use client";

import { motion, useScroll, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { inView } from "framer-motion/dom";
import {useEffect} from 'react';

export default function Services() {
    const { scrollYProgress } = useScroll();
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const variants = {
        visible: { width: '0%', transition: { duration : 0.3}, },
        hidden: { width: '100%' }
    };
    

    return (
        <div className='border-t-[1px] border-black border-b-[1px] border-opacity-20 w-[100%]'>
            <div className='container flex mx-auto lg:flex-row relative flex-col border-l-[1px] border-r-[1px] h-auto border-opacity-20 border-black'>
                {/* services 1 column */}
                <div className='flex p-6 relative flex-col flex-grow h-[65rem] border-opacity-20 border-black'>
                    {/* services info */}
                    
                        <motion.div>
                            <p className='font-bold text-[1rem] tracking-[0.15rem]'><span className='text-transparent drop-shadow-md bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>SERVICES</span></p>
                        </motion.div>
                        <div className='leading-[2.5rem] sm:leading-[2.8rem] md:leading-[3rem] lg:leading-[3.4rem] xl:leading-[3.7rem] 2xl:leading-[4rem] relative flex flex-col'>
                            
                            <p className='text-[2.1rem] w-[100%] ssm:w-[90%] sm:text-[2.5rem] sm:w-[63%] md:w-[60%] md:text-[2.8rem] lg:text-[3rem] lg:w-[78%] xl:text-[3.4rem] xl:w-[70%] 2xl:w-[58%] flex font-extrabold relative'>Projects that solve 
                                <motion.div
                                    ref={ref}
                                    variants={variants}
                                    animate={inView ? "visible" : "hidden"}
                                    id="box1" className='absolute bg-left-top  w-[100%] flex h-[3.5rem] right-0 rounded-lg bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>

                                </motion.div>
                            </p>

                            <p className='text-[2.1rem] w-[100%]  ssm:w-[93%] sm:text-[2.5rem] sm:w-[65%] md:w-[60%] md:text-[2.8rem] lg:text-[3rem] lg:w-[83%] xl:text-[3.4rem] xl:w-[73%] 2xl:w-[60%] flex font-extrabold relative'>problems one code
                                <motion.div
                                    ref={ref}
                                    variants={variants}
                                    animate={inView ? "visible" : "hidden"}
                                    id="box1" className='absolute bg-left-top  w-[100%] flex h-[3.5rem] rounded-lg bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>

                                </motion.div>
                            </p>

                            <p className='text-[2.1rem] w-[46%]  ssm:w-[40%] sm:text-[2.5rem] sm:w-[33%] md:w-[30%] md:text-[2.8rem] lg:text-[3rem] lg:w-[40%] xl:text-[3.4rem] xl:w-[35%] 2xl:w-[28%] flex font-extrabold relative'>at a time
                                <motion.div
                                    ref={ref}
                                    variants={variants}
                                    animate={inView ? "visible" : "hidden"}
                                    id="box1" className='absolute bg-left-top  w-[100%] flex h-[3.5rem] right-0 rounded-lg bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>

                                </motion.div>
                            </p>
                        </div>  
                </div>

                {/* services 3 columns */}
                <div className='flex flex-col w-[40%]'>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>        
            </div>
        </div>
    )
}
