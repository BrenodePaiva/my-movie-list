import Page404 from '../../assets/page404.png'
import { Container } from './styles'

export function PageNotFound() {
  return (
    <Container>
      <h1 style={{ color: '#fff' }}>Page Not Found</h1>
      <img src={Page404} />
    </Container>
  )
}
