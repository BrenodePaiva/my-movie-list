import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Pagination } from '@mui/material'
import styled from 'styled-components'

import breakPoints from '../../styles/breakPoints'

export const Container = styled.div`
  margin-bottom: 30px;
`

export const Busca = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media ${breakPoints.Xsmall} {
    flex-direction: column;
  }
`

export const Label = styled.label`
  display: 'block';
`

export const Input = styled.input`
  width: 200px;
  border: 1px solid #088;
  border-radius: 3px;
  height: 40px;
  font-size: 15px;
  padding: 0px 36px 0px 10px;
`

export const SearchStyled = styled(SearchOutlinedIcon)`
  position: absolute;
  right: 10px;
  top: 10px;
`

export const Listbox = styled.ul`
  width: 200px;
  margin: 0;
  padding: 0;
  z-index: 1;
  font-size: 15px;
  position: absolute;
  right: 0;
  list-style: 'none';
  background-color: #fff;
  overflow: auto;
  max-height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  li:first-child {
    margin-top: 5px;
  }

  li {
    padding: 8px 10px;
  }

  &:hover li.Mui-focused {
    background-color: #f2f2f2;
    color: #000;
    cursor: pointer;
  }
`

export const InputContainer = styled.div`
  position: relative;
`

export const ContainerPost = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-direction: ${props => (props.list ? 'column' : 'row')};
    justify-content: center;
    align-items: ${props => props.list && 'center'};
    flex-wrap: wrap;
    gap: 80px;
  }

  li {
    width: ${props => (props.list ? '600px' : '200px')};
  }

  img {
    width: ${props => (props.list ? '150px' : '100%')};
    scale: 1;
    transition: scale 0.5s ease;
  }

  @media (pointer: coarse) {
    ul {
      gap: 50px;
    }

    li {
      width: ${props => (props.list ? '600px' : '260px')};
    }
  }

  @media ${breakPoints.big} {
    li {
      width: ${props => props.list && '100%'};
    }
  }

  @media ${breakPoints.mediumPlus} {
    ul {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }

    li {
      width: ${props => (props.list ? '100%' : '330px')};
    }

    img {
      width: ${props => props.list && '90px'};
    }
  }

  @media ${breakPoints.Xsmall} {
    li {
      width: 260px;
    }
  }
`

export const PaginationStyle = styled(Pagination)`
  margin: 20px 0;
  display: flex;
  justify-content: center;

  button {
    color: #fff;
  }

  div {
    color: #fff;
  }
`
