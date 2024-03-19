import { Container } from '@/components/shared/container'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Usps } from '@/components/usps'
import '@/globals.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className='bg-background'>
          <Hero />
          <Usps />
        </div>
        <Container>
          <div>3 col layout</div>
        </Container>
        <Container>
          <div>Carousel with posters</div>
        </Container>
      </main>
    </>
  )
}
