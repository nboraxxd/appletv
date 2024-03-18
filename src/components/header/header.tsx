import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Logo } from '@/components/logo'

export default function Header() {
  return (
    <>
      <header className='min-h-11 bg-backgroundContrast text-white'>
        <Container className='flex items-center pl-4'>
          <a href='/' className='relative inline-block px-2'>
            <Logo /> <span className='sr-only'>Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className='sticky top-0 bg-backgroundContrast text-white'>
        <Container className='flex min-h-[3.25rem] items-center justify-between'>
          <p className='text-xl font-semibold'>Apple TV</p>
          <Button size='small'>Stream now</Button>
        </Container>
      </div>
    </>
  )
}
