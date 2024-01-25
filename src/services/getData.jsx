import api from './api'

export async function getMovieVideos(movieId) {
  const {
    data: { results }
  } = await api.get(`movie/${movieId}/videos`)

  return results
}

export async function getMovieDetils(movieId) {
  const { data } = await api.get(`movie/${movieId}`)

  return data
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results }
  } = await api.get(`movie/${movieId}/similar`)

  return results
}

export async function getMovieCredit(movieId) {
  const {
    data: { cast }
  } = await api.get(`movie/${movieId}/credits`)

  return cast
}

export async function getMovies() {
  const {
    data: { results }
  } = await api.get('movie/popular')

  return results[1]
}

export async function getPopularMovies() {
  const {
    data: { results }
  } = await api.get('movie/popular')

  return results
}

export async function getPlayingMovies() {
  const {
    data: { results }
  } = await api.get('movie/now_playing')

  return results
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('movie/top_rated')

  return results
}

export async function getComingMovies() {
  const {
    data: { results }
  } = await api.get('movie/upcoming')

  return results
}

export async function getSeriesVideos(serieId) {
  const {
    data: { results }
  } = await api.get(`tv/${serieId}/videos`)

  return results
}

export async function getSeriesDetils(serieId) {
  const { data } = await api.get(`tv/${serieId}`)

  return data
}

export async function getSeriesCredits(serieId) {
  const {
    data: { cast }
  } = await api.get(`tv/${serieId}/credits`)

  return cast
}

export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('tv/top_rated')

  return results
}

export async function getPopularSeries() {
  const {
    data: { results }
  } = await api.get('tv/popular')

  return results
}

export async function getOnAirSeries() {
  const {
    data: { results }
  } = await api.get('tv/on_the_air')

  return results
}

export async function getTodaySeries() {
  const {
    data: { results }
  } = await api.get('/tv/airing_today')

  return results
}

export async function getTopArtist() {
  const {
    data: { results }
  } = await api.get('person/popular')

  return results
}
