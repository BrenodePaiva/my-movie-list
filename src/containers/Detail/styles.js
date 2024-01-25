import styled, { keyframes } from 'styled-components'

import breakPoints from '../../styles/breakPoints'

const scale = keyframes`
    from{
        transform: scale(0);
    }
    to{
        transform: scale(1);
    }
`

export const Background = styled.div`
  height: 50vh;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media ${breakPoints.Xbig} {
    margin-top: 85px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -80px;

  @media ${breakPoints.Xbig} {
    flex-direction: column;
    align-items: center;
  }
`

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  z-index: 3;

  button {
    margin-top: 10px;
    width: 100%;
  }

  img {
    width: 400px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;

    @media ${breakPoints.medium} {
      width: 300px;
    }

    @media ${breakPoints.Xsmall} {
      width: 290px;
    }
  }
`

export const Info = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  z-index: 3;
  width: 50%;

  h2 {
    font-size: 45px;
    font-weight: 700;
    color: #fff;

    @media ${breakPoints.medium} {
      font-size: 35px;
    }
  }

  p {
    color: #fff;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  @media ${breakPoints.Xbig} {
    width: 100%;
  }
`

export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    width: 100%;
    max-width: 1000px;
  }

  h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  iframe {
    border: none;
  }
`
