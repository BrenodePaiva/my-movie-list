import PropTypes from 'prop-types'

import { Container } from './styles'

function SpanGenres({ genres }) {
  return (
    <Container>
      {genres?.map(genre => (
        <span key={genre.id}>{genre.name}</span>
      ))}
    </Container>
  )
}

SpanGenres.propTypes = {
  genres: PropTypes.array
}

export default SpanGenres
