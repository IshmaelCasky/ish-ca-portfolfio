import React from 'react'

export default function MainContainer({
        children,
    }: {
        children: React.ReactNode
    }) {

    return (
        
        <div className=''>
            {children}
        </div>  
    )

}
