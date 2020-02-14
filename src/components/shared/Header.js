import React from 'react'
import Logo from '../../assets/img/logo_black_small.png'
import { NavLink, Link  } from "react-router-dom";

  const Header = (props) => {

  const {staticData} = props

  return(
    <header className='header'>
      {staticData.repertoire && <Link to={'/'} title="Home" className='header__logo'><img src={Logo} alt={'logo'}></img></Link>}
      <nav className='header__nav'>
        <ul className='header-nav-list'>
          <NavLink exact to={'/repertoire'} title="Events" className='m-2'>{staticData.repertoire}</NavLink>
          <NavLink exact to={'/members'} title="members" className='m-2'>{staticData.members}</NavLink>
          <NavLink exact to={'/albums'} title="albums" className='m-2'>{staticData.albums}</NavLink>
          <NavLink exact to={'/social'} title="Social" className='m-2'>{staticData.social}</NavLink>
        </ul>
      </nav>
      {staticData.repertoire && <div className='header__border-bottom'></div>}
    </header>
  )
}

export default Header