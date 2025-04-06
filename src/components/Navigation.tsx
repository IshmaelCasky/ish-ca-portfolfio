import React from 'react'

export default function Navigation() {
    return (
        <div className='border-black border-opacity-20 border-b-[1px] z-[3] flex'>
            <div className='flex justify-center border-l-[1px] p-[3rem] pb-[3.5rem] pt-[2.3rem] border-r-[1px] border-black border-opacity-20 items-center container mx-auto h-[5rem]'>
                <p className='font-extrabold text-xl'>Maeng<span className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'>.</span></p>
                <div className='flex-grow'>
                    {/* navigation : about, experience, projects, let's Talk*/}
                    <ul className='md:flex hidden font-bold justify-end'>
                        <li className='mr-6 cursor-pointer'><a href="#about">About</a></li>
                        {/* <li className='mr-6 cursor-pointer'>Experience</li> */}
                        <li className='mr-6 cursor-auto'><a href="#projects">Projects</a></li>
                        <li className='mr-6 cursor-auto text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B]'><a href="#letstalk">{"Let's"} Talk</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
