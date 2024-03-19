/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Button } from '@/components/shared/button'
import { Container } from '@/components/shared/container'

export default function Hero() {
  const MotionButton = motion(Button)

  const posterContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: posterContainerRef,
    offset: ['start start', 'end end']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])

  return (
    <div className='relative bg-background text-white'>
      <motion.div
        ref={posterContainerRef}
        style={{ opacity }}
        className='absolute -top-[var(--header-height)] left-0 h-[200vh] w-full'
      >
        <img
          src='images/posters/hero-poster.webp'
          alt='Movie postter'
          className='sticky top-0 h-screen w-full object-cover'
        />
      </motion.div>
      <Container className='relative z-10 h-[--hero-height] pb-7'>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          whileInView='visible'
          exit='hidden'
          animate='hidden'
          viewport={{ amount: 0.98 }}
          className='flex h-full flex-col items-start justify-between'
        >
          <div className='flex flex-1 flex-col items-start justify-center'>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, opacity: { duration: 0.8 } }}
              className='mb-10 text-3xl font-bold xs:text-4xl sm:text-5xl'
            >
              Tất cả nội dung Apple&nbsp;Originals. <br />
              Chỉ có trên Apple&nbsp;TV.
            </motion.h1>
            <MotionButton
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, opacity: { duration: 0.8, delay: 0.5 } }}
              size='large'
              className='mb-16'
            >
              Xem ngay
            </MotionButton>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, opacity: { duration: 0.8, delay: 0.5 } }}
            className='flex cursor-default items-center gap-1 text-lg font-semibold'
          >
            Xem trên ứng dụng{' '}
            <img
              src='/images/icons/apple_tv_app_icon.png'
              alt='App TV App'
              className='aspect-square size-10 object-cover'
            />
          </motion.p>
        </motion.div>
      </Container>
    </div>
  )
}
