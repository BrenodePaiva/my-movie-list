import styled from 'styled-components'

import breakPoints from '../../styles/breakPoints'

export const Warp = styled.div`
  @media ${breakPoints.Xbig} {
    div {
      position: fixed;
      top: 0;
      height: 0px;
      width: 0px;
      background-color: rgba(0, 0, 0, 0);
      z-index: 9;
      transition: background-color 0.3s ease-in-out;
    }

    .open {
      height: 100vh;
      width: 100vw;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  height: 85px;
  width: 100%;
  background-color: ${props =>
    props.transparent
      ? props.background
        ? '#0d0d0d'
        : 'transparent'
      : '#0d0d0d'};
  transition: ${props =>
    props.transparent ? 'background-color 0.6s ease-in-out' : ''};

  img {
    width: 350px;
  }

  ul {
    display: flex;
    gap: 50px;
    list-style: none;

    a {
      text-decoration: none;
      color: #fff;
    }
  }

  .nav_toggle {
    display: none;
  }

  @media ${breakPoints.Xbig} {
    padding: 20px 7px;
    background-color: #0d0d0d;

    ul {
      flex-direction: column;
      position: fixed;
      top: 85px;
      right: -300px;
      width: 300px;
      height: 100vh;
      background-color: #0d0d0d;
      box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
      padding: 40px 0 0 10px;
      transition: 0.5s ease-in-out;
    }

    .nav_active {
      right: 0;
    }

    .nav_toggle {
      cursor: pointer;
      display: block;

      div {
        width: 2rem;
        height: 0.2rem;
        margin: 0.4rem;
        background: #fff;
        transition: 0.4s ease-in-out;
      }
    }

    .toggle {
      .line1 {
        transform: rotate(-45deg) translate(-1px, 8px);
      }
      .line2 {
        opacity: 0;
      }
      .line3 {
        transform: rotate(45deg) translate(-5px, -12px);
      }
    }
  }

  @media ${breakPoints.smallPlus} {
    img {
      width: 280px;
    }
  }

  @media ${breakPoints.small} {
    img {
      width: 250px;
    }
  }
`

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 22px;
  position: relative;

  a {
    text-decoration: none;
    color: #fff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${props => (props.isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.4s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`
