import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import FeedIcon from '@mui/icons-material/Feed'
import styled from 'styled-components'

import breakPoints from '../../styles/breakPoints'

export const Container = styled.div`
  width: 100%;
  border-radius: 6px;
  border: 4px #242424 solid;
  transition-duration: 800ms;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 10px;

  &:hover {
    border: 4px #9f7e4b solid;
    transition-duration: 800ms;
  }

  div {
    display: flex;
    gap: 15px;
  }

  @media ${breakPoints.small} {
    padding: 10px;
  }
`

export const Img = styled.div`
  width: 70px;
  height: 100px;
  background-color: #fff;
`
export const Title = styled.h3`
  color: #fff;

  @media ${breakPoints.small} {
    font-size: 13px;
  }
`

export const DetailIconStyles = styled(FeedIcon)`
  color: #189b20;
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }
`
export const TrashIconStyles = styled(DeleteForeverIcon)`
  color: #ff0000;
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }
`
