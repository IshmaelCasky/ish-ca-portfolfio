import Image from 'next/image'
import '@/styles/globals.css'
import { MainContainer, Navigation } from '@/components'
import { About } from '@/components/Sections'
import Services from '@/components/Sections/Services'
import Projects from '@/components/Sections/Projects'
import Contact from '@/components/Sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className=' font-plus-jakarta-sans'>
      <Navigation />
      <MainContainer>
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </MainContainer>
    </div>
  )
}
