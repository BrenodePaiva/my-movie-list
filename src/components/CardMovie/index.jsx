import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import { useMyList } from '../../hooks/MyListContext'
import { getImage } from '../../utils/getImages'
import Button from '../Button'
import { BoxZoomIn, ContainerPost, Overlay, OverlayBox } from './styles'

function CardMovie({ movie }) {
  const navigate = useNavigate()
  const { myList, putMovieInMyList } = useMyList()

  function detalhesNavigation(id) {
    navigate(`/detalhes/${id}`, {
      state: { movie }
    })
  }

  return (
    <ContainerPost>
      <ul>
        <li>
          <div>
            <BoxZoomIn>
              <img src={getImage(movie.poster_path)} alt="" />
              <Overlay>
                <OverlayBox>
                  {myList.findIndex(mv => movie.id === mv.id) >= 0 ? (
                    <Button green onClick={() => navigate('/minha-lista')}>
                      Adicionado
                    </Button>
                  ) : (
                    <Button onClick={() => putMovieInMyList(movie)}>
                      Adicionar
                    </Button>
                  )}

                  <Button red onClick={() => detalhesNavigation(movie.id)}>
                    Detalhes
                  </Button>
                </OverlayBox>
              </Overlay>
            </BoxZoomIn>
          </div>
          <p style={{ color: '#fff' }}>{movie.title || movie.name}</p>
        </li>
      </ul>
    </ContainerPost>
  )
}

CardMovie.propTypes = {
  movie: PropTypes.object
}

export default CardMovie
