import { useAutocomplete } from '@mui/base/useAutocomplete'
import PropTypes from 'prop-types'
import { useEffect, useMemo, useState } from 'react'

import CardList from '../CardList'
import CardMovie from '../CardMovie'
import {
  Busca,
  Container,
  ContainerPost,
  Input,
  InputContainer,
  Listbox,
  PaginationStyle,
  SearchStyled
} from './styles'

function Pagination({ array, title, ...rest }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(12)
  const [search, setSearch] = useState('')

  const lastPostIndex = currentPage * postPerPage
  const fristPostIndex = lastPostIndex - postPerPage

  const arrayFilter = useMemo(() => {
    const lowerSearch = search.toLowerCase()
    let searchItem

    if (search.length > 1) {
      searchItem = array.filter(item =>
        item.name
          ? item.name.toLowerCase().includes(lowerSearch)
          : item.title.toLowerCase().includes(lowerSearch)
      )
    } else {
      searchItem = array
    }

    return searchItem
  }, [search, array])

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: arrayFilter,
    getOptionLabel: option => option.title || option.name
  })

  const currentPost = arrayFilter.slice(fristPostIndex, lastPostIndex)

  function handleChange(e, p) {
    setCurrentPage(p)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    currentPost.length === 0 && setCurrentPage(1)
  }, [currentPost.length])

  return (
    <Container>
      <Busca>
        <h2 style={{ color: '#fff' }}>{title}</h2> <br />
        <InputContainer>
          <div>
            <div {...getRootProps()}>
              <Input
                {...getInputProps()}
                value={search}
                onChange={ev => setSearch(ev.target.value)}
                placeholder="Buscar..."
              />
              <SearchStyled />
            </div>
            {groupedOptions.length > 0 ? (
              <Listbox {...getListboxProps()}>
                {groupedOptions.map((option, index) => (
                  <li key={index} {...getOptionProps({ option, index })}>
                    <div onClick={() => setSearch(option.title || option.name)}>
                      {option.title || option.name}
                    </div>
                  </li>
                ))}
              </Listbox>
            ) : null}
          </div>
        </InputContainer>
      </Busca>

      <ContainerPost {...rest}>
        {currentPost && (
          <>
            <ul>
              {currentPost?.map(item => (
                <li key={item.id}>
                  {rest.list ? (
                    <CardList movieList={item} />
                  ) : (
                    <CardMovie movie={item} />
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </ContainerPost>

      {arrayFilter.length > postPerPage && (
        <PaginationStyle
          count={Math.ceil(arrayFilter.length / postPerPage)}
          variant="outlined"
          color="primary"
          page={currentPage}
          onChange={handleChange}
        />
      )}
    </Container>
  )
}

Pagination.propTypes = {
  array: PropTypes.array,
  title: PropTypes.string,
  list: PropTypes.bool
}

export default Pagination
