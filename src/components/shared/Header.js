import React from 'react'
import Logo from '../../assets/img/logo_black_small.png'
import { NavLink, Link  } from "react-router-dom";

  const Header = (props) => {

  const {staticData} = props

  return(
    <header className='header-main'>
      <div className='header-container'>
        <Link to={'/'} title="Home" className='header__logo'><img src={Logo} alt={'logo'}></img></Link>
        <nav>
          <ul className='flex justify-center'>
            {/* <NavLink to={'/news'} title="Social" className='m-2'>Sobre nós</NavLink>
            <NavLink to={'/discography'} title="Reportório" className='m-2'>Reportório</NavLink> */}
            {/* <a href={'https://open.spotify.com/artist/68hqv7bUIw71HHJExldzLZ'} target="_blank" rel="noopener noreferrer" title="Events" className='m-2'>Spotify</a> */}
            <NavLink exact to={'/repertoire'} title="Events" className='m-2'>{staticData.repertoire}</NavLink>
            <NavLink exact to={'/events'} title="Events" className='m-2'>{staticData.events}</NavLink>
            <NavLink exact to={'/social'} title="Social" className='m-2'>{staticData.social}</NavLink>
          </ul>
        </nav>
        <div className='header__border-bottom'></div>
      </div>
    </header>
  )
}

export default Header