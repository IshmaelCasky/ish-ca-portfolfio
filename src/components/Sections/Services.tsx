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
        hidden: { width: '110%' }
    };
    

    return (
        <div className='border-t-[1px] border-black border-b-[1px] border-opacity-20 w-[100%]'>
            <div className='container flex mx-auto border-l-[1px] border-r-[1px] h-auto border-opacity-20 border-black'>
                {/* services 1 column */}
                <div className='flex p-14 flex-col flex-grow h-[65rem] border-r-[1px] border-opacity-20 border-black'>
                    {/* services info */}
                    
                        <motion.div>
                            <p className='font-bold text-[1.3rem] tracking-[0.15rem]'><span className='text-transparent drop-shadow-md bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>SERVICES</span></p>
                        </motion.div>
                        <div className='leading-[3.3rem] w-full relative flex flex-col'>

                            <div className="relative w-[55%] bg-black ">
                                <motion.div
                                ref={ref}
                                variants={variants}
                                animate={inView ? "visible" : "hidden"}
                                id="box1" className='absolute bg-left-top w-[100%] flex top-0 right-0 h-[3.5rem] rounded-lg bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>

                                </motion.div>
                            </div>

                            <p className='text-[3rem] font-extrabold'>Projects that solve </p>
                            <div className="relative w-[55%] bg-black ">
                                <motion.div
                                ref={ref}
                                variants={variants}
                                animate={inView ? "visible" : "hidden"}
                                id="box1" className='absolute bg-left-top w-[100%] flex h-[3.5rem] rounded-lg bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>

                                </motion.div>
                            </div>
                            <p className='text-[3rem] font-extrabold'>problems one code</p>
                            <div className="relative w-[25%] bg-black ">
                                <motion.div
                                ref={ref}
                                variants={variants}
                                animate={inView ? "visible" : "hidden"}
                                id="box1" className='absolute bg-left-top w-[100%] flex top-0 right-0 h-[3.5rem] rounded-lg bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>

                                </motion.div>
                            </div>
                            <p className='text-[3rem] font-extrabold'>at a time</p>
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
