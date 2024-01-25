import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import { useMyList } from '../../hooks/MyListContext'
import { getImage } from '../../utils/getImages'
import {
  Container,
  DetailIconStyles,
  Img,
  Title,
  TrashIconStyles
} from './styles'

function CardList({ movieList }) {
  const navigate = useNavigate()
  const { deleteMovieInMyList } = useMyList()

  function detalhesNavigation(id) {
    navigate(`/detalhes/${id}`, {
      state: { movie: movieList }
    })
  }

  return (
    <>
      <Container>
        <img src={getImage(movieList.poster_path)} />
        <Title>{movieList.title || movieList.name}</Title>
        <div>
          <DetailIconStyles onClick={() => detalhesNavigation(movieList.id)} />
          <TrashIconStyles onClick={() => deleteMovieInMyList(movieList.id)} />
        </div>
      </Container>
    </>
  )
}

CardList.propTypes = {
  movieList: PropTypes.array
}

export default CardList
