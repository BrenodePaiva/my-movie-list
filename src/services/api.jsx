import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    language: 'pt-BR',
    page: 1
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDE5NTcxYjQxZDhlYjc2NTI2NDYwOTMxYjQyNzgxOCIsInN1YiI6IjY1Nzg5ODcxYWY1OGNiMDBlOTI2NzZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SSWvLx3YGlggt4Ln7a-ESLpKZPmwQqMWBzJ8EAZXwUQ'
  }
})

export default api
