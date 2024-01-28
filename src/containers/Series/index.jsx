import { Title } from '@mui/icons-material'
import { useEffect, useState } from 'react'

import Pagination from '../../components/Pagination'
import {
  getOnAirSeries,
  getPopularSeries,
  getTodaySeries,
  getTopSeries
} from '../../services/getData'
import { duplicateData } from '../../utils/duplicateData'
import { Container } from './styles'

export function Series() {
  const [series, setSeries] = useState([])

  useEffect(() => {
    function listSeries() {
      Promise.all([
        getTopSeries(),
        getPopularSeries(),
        getOnAirSeries(),
        getTodaySeries()
      ])
        .then(([topSeries, popularSeries, airSeries, todaySeries]) => {
          setSeries(topSeries.concat(popularSeries, airSeries, todaySeries))
        })
        .catch(err => console.error(err))
    }

    listSeries()
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <Pagination array={duplicateData(series)} title="Séries" />
    </Container>
  )
}

export default Series
