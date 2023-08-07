/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      keyframes : {
        'circular1' : {
          '0%' :{
            //left-[6.2rem] top-[22rem] 
          
            transform: 'rotate(0deg) translateX(239px) rotate(0deg)'
          },
          '100%' :{
          
            transform: 'rotate(-360deg) translateX(239px) rotate(360deg)'
          },
        },
        'circular2' : {
          //left-[6.2rem] top-[22rem] 
          '0%' :{
          
            transform: 'rotate(0deg) translateX(213px) rotate(0deg) ',
          },
          '100%' :{
          
            transform: 'rotate(360deg) translateX(213px) rotate(-360deg)'
          },
        }
      },
      animation : {
        'circular1' : 'circular1 25s linear infinite',
        'circular2' : 'circular2 25s linear infinite'
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay")
  ],
}
