import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'

const MyListContext = createContext({})

export const MyListProvaider = ({ children }) => {
  const [myList, setMyList] = useState([])

  const updateLocalStorage = async movies => {
    await localStorage.setItem('MyMoviesList:MovieList', JSON.stringify(movies))
  }

  const putMovieInMyList = async movies => {
    const listIndex = myList.findIndex(item => movies.id === item.id)
    let newList = []

    if (listIndex >= 0) {
      newList = myList
    } else {
      newList = [...myList, movies]
    }

    setMyList(newList)
    await updateLocalStorage(newList)
  }

  const deleteMovieInMyList = async movieId => {
    const newList = myList.filter(movie => movieId !== movie.id)
    setMyList(newList)
    await updateLocalStorage(newList)
  }

  useEffect(() => {
    const loadListItens = async () => {
      const myListData = await localStorage.getItem('MyMoviesList:MovieList')

      if (myListData) {
        setMyList(JSON.parse(myListData))
      }
    }

    loadListItens()
  }, [])

  return (
    <MyListContext.Provider
      value={{ myList, putMovieInMyList, deleteMovieInMyList }}
    >
      {children}
    </MyListContext.Provider>
  )
}

MyListProvaider.propTypes = {
  children: PropTypes.node
}

export const useMyList = () => {
  const context = useContext(MyListContext)

  if (!context) {
    throw new Error('useMyList most be used with MyListContext')
  }

  return context
}
