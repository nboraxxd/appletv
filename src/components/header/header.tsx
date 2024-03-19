import { Button } from '@/components/shared/button'
import { Container } from '@/components/shared/container'
import { Logo } from '@/components/shared/logo'

export default function Header() {
  return (
    <>
      <header className='relative z-10 bg-backgroundContrast text-white'>
        <Container className='flex min-h-[--header-row-height] items-center pl-4'>
          <a href='/' className='relative inline-block fill-[rgba(255,255,255,0.8)] px-2 transition hover:fill-white'>
            <Logo /> <span className='sr-only'>Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className='sticky top-0 z-20 bg-backgroundContrast text-white'>
        <Container className='flex min-h-[--header-row-height] items-center justify-between'>
          <p className='text-xl font-semibold'>Apple TV</p>
          <Button size='small'>Xem ngay</Button>
        </Container>
      </div>
    </>
  )
}
