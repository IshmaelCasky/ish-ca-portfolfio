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
            top: '47%',
            left:  '47.3%',
            transform: 'rotate(0deg) translateX(690%) rotate(0deg)'
          },
          '100%' :{
            top: '47%',
            left:  '47.3%',
            transform: 'rotate(360deg) translateX(690%) rotate(-360deg)'
          },
        },
        'circular2' : {
          //left-[6.2rem] top-[22rem] 
          '0%' :{
            top: '47%',
            left:  '47.3%',
            transform: 'rotate(0deg) translateX(770%) rotate(0deg) ',
          },
          '100%' :{
            top: '47%',
            left:  '47.3%',
            transform: 'rotate(-360deg) translateX(770%) rotate(360deg)'
          },
        },
        'circular3': {
           //left-[6.2rem] top-[22rem] 
          '0%' :{
            top: '47%',
            left:  '47.3%',
            transform: 'rotate(0deg) translateX(560%) rotate(0deg) ',
          },
          '100%' :{
            top: '47%',
            left:  '47.3%',
            transform: 'rotate(-360deg) translateX(560%) rotate(360deg)'
          },
        }
      },
      animation : {
        'circular1' : 'circular1 25s linear infinite',
        'circular2' : 'circular2 25s linear infinite',
        'circular3': 'circular3 25s linear infinite'
      },
      screens: {
        'ssm': '400px'
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay")
  ],
}
