import PropTypes from 'prop-types'

import { getImage } from '../../utils/getImages'
import { Container, Title } from './styles'

function Credits({ credits }) {
  return (
    <>
      <Title>Créditos</Title>

      <Container>
        {credits?.slice(0, 5).map(artist => (
          <div key={artist.id}>
            <img src={getImage(artist.profile_path)} alt="artist_image" />
            <p>{artist.original_name}</p>
          </div>
        ))}
      </Container>
    </>
  )
}

Credits.propTypes = {
  credits: PropTypes.array
}

export default Credits
