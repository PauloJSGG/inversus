import React from 'react'
import Logo from '../../assets/img/logo_black_small.png'
import LanguageSelector from '../shared/LanguageSelector'
import { NavLink, Link  } from "react-router-dom";

const Header = (props) => {

  const {staticData} = props

  return(
    <header className='header-main'>
      <div className='header-container'>
        <div className = 'flex w-full justify-center mx-20'>
          <Link to={'/'} title="Home" className='header__logo'><img src={Logo} alt={'logo'}></img></Link>
          <LanguageSelector {...props} />
        </div>
        <nav>
          <ul className='flex justify-center'>
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
