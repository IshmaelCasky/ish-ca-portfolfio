import React from 'react'

export default function GradientButton({
    children, className
}: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        // inset button with background gradient
        <div className={'bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B] ' + className} >
            <button className={'p-3 transition-transform duration-300 -translate-y-2 -translate-x-2 hover:translate-y-0 hover:translate-x-0 hover: text-white bg-black ' + className}>
                <p>{children}</p>
            </button>
        </div>
    )
}
