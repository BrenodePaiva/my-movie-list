import styled from 'styled-components'

import breakPoints from '../../styles/breakPoints'

export const Title = styled.h4`
  color: #fff;
  font-size: 28px;
  font-weight: 700;
`

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    height: 200px;

    @media ${breakPoints.Xsmall} {
      height: 150px;
    }
  }

  p {
    color: #fff;
  }

  @media ${breakPoints.smallPlus} {
    justify-content: center;
  }
`
