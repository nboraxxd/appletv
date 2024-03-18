import { Container } from '@/components/shared/container'
import { Header } from '@/components/header'
import '@/globals.css'

export default function App() {
  return (
    <>
      <Header />
      <main className='mt-1'>
        <Container>
          <div className='h-[300vh]'>Hero component</div>
        </Container>
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
