import { useEffect, useState } from 'react'

import Pagination from '../../components/Pagination'
import {
  getComingMovies,
  getPopularMovies,
  getPlayingMovies,
  getTopMovies
} from '../../services/getData'
import { duplicateData } from '../../utils/duplicateData'
import { Container } from './styles'

export function Movies() {
  const [movies, setMovie] = useState([])

  useEffect(() => {
    function listMovies() {
      Promise.all([
        getTopMovies(),
        getPlayingMovies(),
        getPopularMovies(),
        getComingMovies()
      ])
        .then(([topMovie, playMovie, popularMovie, comeMovie]) => {
          setMovie(topMovie.concat(playMovie, popularMovie, comeMovie))
        })
        .catch(err => console.error(err))
    }

    listMovies()
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <Pagination array={duplicateData(movies)} title="Filmes" />
    </Container>
  )
}

// export default Movies
