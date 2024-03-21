import { cn } from '@/utils'
import { Movie } from '@/utils/movies'

interface Props {
  movies: Movie[]
  wrapperClassName?: string
}
export default function SmallVideoCarousel({ movies, wrapperClassName }: Props) {
  return (
    <div className='overflow-hidden'>
      <div
        className={cn('relative flex gap-3 animate-carousel-move left-[var(--carousel-offset,0px)]', wrapperClassName)}
      >
        {movies.map((movie, index) => (
          <div key={index} className='aspect-video w-[23vw] shrink-0'>
            <img src={movie.poster} alt={movie.name} className='size-full rounded-[4px] object-cover md:rounded-xl' />
          </div>
        ))}
      </div>
    </div>
  )
}
