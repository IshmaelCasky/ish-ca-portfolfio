import Image from 'next/image'
import '@/styles/globals.css'
import { MainContainer, Navigation } from '@/components'
import { About } from '@/components/Sections'
import Services from '@/components/Sections/Services'

export default function Home() {
  return (
    <div className=' font-plus-jakarta-sans'>
      <Navigation />
      <MainContainer>
        <About />
        <Services />
      </MainContainer>
    </div>
  )
}
