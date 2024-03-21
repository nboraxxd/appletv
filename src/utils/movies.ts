export type Movie = {
  poster: string
  name: string
}

export const movies = [
  { poster: '/images/posters/airplane.webp', name: 'Airplane' },
  {
    poster: '/images/posters/family-man.webp',
    name: 'Family man'
  },
  {
    poster: '/images/posters/laboratory.webp',
    name: 'Laboratory'
  },
  { poster: '/images/posters/napoleon.webp', name: 'Napoleon' },
  {
    poster: '/images/posters/person-in-darkness.webp',
    name: 'Person in Darkness'
  },
  {
    poster: '/images/posters/scary-building.webp',
    name: 'Scary Building'
  },
  { poster: '/images/posters/stars.webp', name: 'Stars' }
]

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5)
