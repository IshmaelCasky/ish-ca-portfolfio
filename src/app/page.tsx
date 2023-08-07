import Image from 'next/image'
import '@/styles/globals.css'
import { MainContainer, Navigation } from '@/components'
import { About } from '@/components/Sections'

export default function Home() {
  return (
    <div className='lg:h-[200vh] font-plus-jakarta-sans'>
      <Navigation />
      <MainContainer>
        <About />
      </MainContainer>
    </div>
  )
}
