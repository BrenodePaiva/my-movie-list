import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo3 from '../../assets/logo5.png'
import { Container, Li } from './styles'

function Header() {
  const { pathname } = useLocation()
  const [changeBackground, setChangeBackground] = useState(false)
  const [isTransparent, setIsTransparent] = useState(true)
  const [navMobile, setNaviMobile] = useState('')
  const [toggleIcon, setToggleIcon] = useState('nav_toggle')

  function navToggle() {
    navMobile === '' ? setNaviMobile('nav_active') : setNaviMobile('')

    toggleIcon === 'nav_toggle'
      ? setToggleIcon('nav_toggle toggle')
      : setToggleIcon('nav_toggle')
  }

  useEffect(() => {
    if (!pathname.includes('detalhes')) {
      setIsTransparent(false)
    } else {
      setIsTransparent(true)
    }
  }, [pathname, isTransparent])

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 150) {
      setChangeBackground(true)
    }
    if (changeBackground && window.pageYOffset <= 150) {
      setChangeBackground(false)
    }
  }

  console.log(toggleIcon)

  return (
    <Container background={changeBackground} transparent={isTransparent}>
      <img src={logo3} alt="logo-dev-movies" />
      <ul className={navMobile}>
        <Link to="/">
          <Li isActive={pathname === '/'}>Filmes</Li>
        </Link>

        <Link to="/series">
          <Li isActive={pathname.includes('series')}>Séries</Li>
        </Link>

        <Link to="/minha-lista">
          <Li isActive={pathname.includes('minha-lista')}>Minha Lista</Li>
        </Link>
      </ul>

      <div className={toggleIcon} onClick={navToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </Container>
  )
}

export default Header
