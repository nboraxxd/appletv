/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import useWindowSize from '@/hooks/useWindowSize'
import { movies, randomMoviesSet1, randomMoviesSet2 } from '@/utils/movies'
import { SmallVideoCarousel } from '@/components/video-carousel'

export default function VideoCarousel() {
  const carouselWrapperRef = useRef<HTMLDivElement>(null)

  const { width, height } = useWindowSize()

  const maximunScale = useMemo(() => {
    const windowYRatio = height / width
    const xScale = 1.6667
    const yScale = xScale * (16 / 9) * windowYRatio

    return Math.max(xScale, yScale)
  }, [height, width])

  const { scrollYProgress } = useScroll({ target: carouselWrapperRef, offset: ['start start', 'end start'] })

  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [maximunScale * 1.1, maximunScale, 1])
  const posterOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1])
  const posterTranslateXLeft = useTransform(scrollYProgress, [0.64, 0.66], [-20, 0])
  const posterTranslateXRight = useTransform(scrollYProgress, [0.64, 0.66], [20, 0])

  return (
    <div className='bg-background pb-8'>
      <div ref={carouselWrapperRef} className='mt-[-100vh] h-[300vh] overflow-clip'>
        <div className='sticky top-0 flex h-screen items-center'>
          <div className='relative left-1/2 mb-5 flex -translate-x-1/2 gap-5'>
            <motion.div
              style={{ opacity: posterOpacity, x: posterTranslateXLeft }}
              className='aspect-video w-[60vw] shrink-0'
            >
              <img
                src={movies[0].poster}
                alt={movies[0].name}
                className='size-full rounded-md object-cover md:rounded-2xl'
              />
            </motion.div>
            <motion.div style={{ scale }} className='z-10 aspect-video w-[60vw] shrink-0'>
              <img
                src={movies[1].poster}
                alt={movies[1].name}
                className='size-full rounded-md object-cover md:rounded-2xl'
              />
            </motion.div>
            <motion.div
              style={{ opacity: posterOpacity, x: posterTranslateXRight }}
              className='aspect-video w-[60vw] shrink-0'
            >
              <img
                src={movies[2].poster}
                alt={movies[2].name}
                className='size-full rounded-md object-cover md:rounded-2xl'
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className='mt-[calc((100vh-(60vw*(9/16)/2))*-1)] space-y-5'>
        <SmallVideoCarousel movies={randomMoviesSet1} wrapperClassName='[--duration:74s] [--carousel-offset:-32px]' />
        <SmallVideoCarousel movies={randomMoviesSet2} />
      </div>
    </div>
  )
}
