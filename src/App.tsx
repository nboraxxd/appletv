import { Container } from '@/components/shared/container'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import '@/globals.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Container>
          <div>usps</div>
        </Container>
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
