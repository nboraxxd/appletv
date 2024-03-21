import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Usps } from '@/components/usps'
import { VideoCarousel } from '@/components/video-carousel'
import '@/globals.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className='relative z-10 bg-background'>
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
      </main>
    </>
  )
}
