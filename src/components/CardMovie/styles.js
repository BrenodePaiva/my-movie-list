import styled from 'styled-components'

import breakPoints from '../../styles/breakPoints'

export const ContainerPost = styled.div`
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 80px;
  }
  li {
    width: 200px;
    /* margin: 0px 0; */
  }

  img {
    width: 100%;
    scale: 1;
    transition: scale 0.5s ease;
  }
`

export const BoxZoomIn = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  float: left;
  border-radius: 6px;
  border: 4px #242424 solid;
  transition-duration: 800ms;

  &:hover {
    border: 4px #9f7e4b solid;
    transition-duration: 800ms;
  }

  &:hover img {
    scale: 1.3;
  }

  @media ${breakPoints.mediumPlus} {
    &:hover img {
      scale: 1;
    }
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(0, 0, 0, 0.7);

  &:hover {
    opacity: 1;
  }

  @media (pointer: coarse) {
    height: 27%;
    top: 73%;
    opacity: 1;
  }

  @media ${breakPoints.mediumPlus} {
    height: 23%;
    top: 77%;
    opacity: 1;
  }
`
export const OverlayBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;

  button {
    font-size: 15px;
    padding: 10px 15px;
    margin-top: 20px;
  }

  @media (pointer: coarse) {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 12px;
    top: 41%;
    left: 50%;
  }

  @media ${breakPoints.mediumPlus} {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 32px;
    top: 45%;
  }
`
