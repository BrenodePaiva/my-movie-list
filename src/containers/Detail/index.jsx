import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import Button from '../../components/Button'
import Credits from '../../components/Credits'
import SpanGenres from '../../components/SpanGenres'
import { useMyList } from '../../hooks/MyListContext'
import {
  getMovieVideos,
  getMovieCredit,
  getMovieDetils,
  getSeriesVideos,
  getSeriesDetils,
  getSeriesCredits
} from '../../services/getData'
import { getImage } from '../../utils/getImages'
import { Background, Container, ContainerMovies, Cover, Info } from './styles'

export function Detail() {
  const { id } = useParams()
  const { myList, putMovieInMyList } = useMyList()
  const navigate = useNavigate()
  const location = useLocation()
  const [movieVideos, setMovieVideos] = useState()
  const [movieDetils, setMovieDetails] = useState()
  const [movieCredit, setMovieCredit] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all(
        location.state.movie.name
          ? [getSeriesVideos(id), getSeriesDetils(id), getSeriesCredits(id)]
          : [getMovieVideos(id), getMovieDetils(id), getMovieCredit(id)]
      )

        .then(([videos, detils, credit]) => {
          setMovieVideos(videos)
          setMovieDetails(detils)
          setMovieCredit(credit)
        })
        .catch(err => console.error(err))
    }

    getAllData()
  }, [])

  return (
    <>
      <Background image={getImage(movieDetils?.backdrop_path)} />
      <Container>
        <Cover>
          <img src={getImage(movieDetils?.poster_path)} alt="" />
          {movieDetils && (
            <>
              {myList.findIndex(mv => parseInt(id) === mv.id) >= 0 ? (
                <Button green onClick={() => navigate('/minha-lista')}>
                  Adicionado
                </Button>
              ) : (
                <Button onClick={() => putMovieInMyList(location.state?.movie)}>
                  Adicionar
                </Button>
              )}
            </>
          )}
        </Cover>
        <Info>
          <h2>{movieDetils?.title || movieDetils?.name}</h2>

          <SpanGenres genres={movieDetils?.genres} />

          <p>{movieDetils?.overview}</p>

          {movieCredit && <Credits credits={movieCredit} />}
        </Info>
      </Container>

      <ContainerMovies>
        {movieVideos?.map(videos => (
          <div key={videos.id}>
            <h4>{videos.name}</h4>

            <iframe
              src={`https://www.youtube.com/embed/${videos?.key}`}
              title="Youtube Video Player"
              height="500px"
              width="100%"
            ></iframe>
          </div>
        ))}
      </ContainerMovies>
    </>
  )
}
