

import React from 'react';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export default function GradientButton({ children, className = '', ...props }: GradientButtonProps) {
    return (
       // inset button with background gradient
       <div className={'bg-gradient-to-r from-[#B16CEA] via-[#FF6765] to-[#FFA84B] ' + className} >
       {/* lets add props */}
       <button className={'p-3 transition-transform duration-300 -translate-y-2 -translate-x-2 hover:translate-y-0 text-white hover:translate-x-0 hover:text-white bg-black ' + className} {...props}>
           <p>{children}</p>
       </button>
   </div>
    );
}
