import styled from 'styled-components'

import breakPoints from '../../styles/breakPoints'

export const Container = styled.div`
  min-height: 100%;
  margin: 120px auto 0px;
  padding: 0 6%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.medium} {
    img {
      width: 300px;
    }
  }
`
