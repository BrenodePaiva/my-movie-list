import Page404 from '../../assets/notfound.png'
import { Container } from './styles'

export function PageNotFound() {
  return (
    <Container>
      <h1 style={{ color: '#fff' }}>Page Not Found</h1>
      <img src={Page404} alt="Page404" />
    </Container>
  )
}
