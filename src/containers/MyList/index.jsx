import { useEffect } from 'react'

import Pagination from '../../components/Pagination'
import { useMyList } from '../../hooks/MyListContext'
import { Container } from './styles'

export function MyList() {
  const { myList } = useMyList()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <Pagination array={myList} title={'Minha Lista'} list />
    </Container>
  )
}
