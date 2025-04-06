"use client";
import React from 'react';
import GradientButton from '../GradientButton';
import ish from '../../../public/assets/ish.png';
import ellipse_1 from '../../../public/assets/ellipse-1.png';
import ellipse_2 from '../../../public/assets/ellipse-2.png';
import ellipse_3 from '../../../public/assets/ellipse-3.png';
import ellipse_4 from '../../../public/assets/ellipse-4.png';
import github from '../../../public/assets/github.png';
import linkedin from '../../../public/assets/linkedin.png';
import Image from 'next/image';
import { motion } from 'framer-motion';


export default function Contact() {
  return (
    <div className="relative container mx-auto border-l-[1px] xl:h-[40rem] h-[80rem] overflow-x-hidden border-r-[1px] border-black border-opacity-20">
      <div className="flex flex-col justify-center overflow-hidden z-10 h-full items-center relative">
        <div className="flex xl:flex-row justify-start flex-col-reverse items-center h-full  lg:h-[80rem] 2xl:h-[80rem] w-full">
          {/* Info Container */}
          <div className="flex xl:text-left ssm:text-center xl:p-10 lg:mb-[3rem] text-center mb-7 flex-col w-full z-10">
            <div className='ml-3'>
                <p className='font-bold text-[1rem]  tracking-[0.15rem]'><span className='text-transparent drop-shadow-md bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>SEND ME AN EMAIL</span></p>
            </div>
            <p className="w-full xl:max-w-[40%] p-3 mt-3 2xl:text-xl text-black">
              Currently, I am looking for opportunities and accepting freelance projects. If you think I am a good asset, kindly send me a message.
            </p>
            <div className="mt-8 xl:ml-[1rem] justify-center xl:justify-start flex">
             <GradientButton className='w-[20rem]'>Ishmaelcascabel@gmail.com</GradientButton>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute top-10 left-10 w-12 h-12"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="w-full h-full bg-gradient-to-br from-pink-500 to-orange-400 transform rotate-45"></div>
        </motion.div>

        {/* Right-side Circle - Half Hidden */}
        <div className="absolute ssm:-right-[70%] -right-[80%] xl:-right-[20%] md:-right-[30%] sm:-right-[20%] lg:-right-[29%] top-1/2 transform -translate-y-1/2 w-[40rem] h-[40rem] pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative z-[1] flex justify-center items-center w-full h-full">
              <Image
                src={ish}
                alt="ish"
                className="z-[1] opacity-0 w-full"
              />
              <Image
                src={ellipse_1}
                alt="ellipse"
                className="absolute w-[58%]"
              />
              <Image
                src={ellipse_2}
                alt="ellipse"
                className="absolute w-[70%]"
              />
              <Image
                src={ellipse_3}
                alt="ellipse"
                className="absolute w-[82%]"
              />
              <Image
                src={ellipse_4}
                alt="ellipse"
                className="absolute w-[93%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}