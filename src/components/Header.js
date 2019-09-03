import React from 'react'
import Logo from '../assets/img/logo_black_small.png'
import { NavLink, Switch, Link  } from "react-router-dom";

  const Header = () => {
  return(
    <header className='fixed'>
      <div className='header-container'>
        <Link to={'/'} title="Home" className='header__logo'><img src={Logo} alt={'logo'}></img></Link>
        <nav>
          <ul className='flex justify-center'>
            <NavLink to={'/news'} title="Social" className='m-2'>Sobre nós</NavLink>
            <NavLink to={'/social'} title="Social" className='m-2'>Reportório</NavLink>
            <NavLink to={'/events'} title="Events" className='m-2'>Eventos</NavLink>
            <a href={'https://open.spotify.com/artist/68hqv7bUIw71HHJExldzLZ'} target="_blank" rel="noopener noreferrer" title="Events" className='m-2'>Spotify</a>
            <NavLink to={'/contacts'} title="Events" className='m-2'>Contactos</NavLink>
          </ul>
        </nav>
        <div className='header__border-bottom'></div>
      </div>
    </header>
  )
}

export default Header