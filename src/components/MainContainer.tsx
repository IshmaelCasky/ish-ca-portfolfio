import React from 'react'

export default function MainContainer({
        children,
    }: {
        children: React.ReactNode
    }) {

    return (
        
        <div className='container mx-auto border-l-[1px] border-r-[1px] border-black border-opacity-20'>
            {children}
        </div>  
    )

}
