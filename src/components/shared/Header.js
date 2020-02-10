import React from 'react'
import Logo from '../../assets/img/logo_black_small.png'
import { NavLink, Link  } from "react-router-dom";

  const Header = (props) => {

  const {staticData} = props

  console.log('static',staticData)

  return(
    <header className='header-main'>
      <div className='header-container'>
        <div className='w-full justify-center flex'>
          {staticData.repertoire && <Link to={'/'} title="Home" className='header__logo'><img style={{maxWidth: '100%'}} src={Logo} alt={'logo'}></img></Link>}
        </div>
        <nav>
          <ul className='flex justify-center'>
            <NavLink exact to={'/repertoire'} title="Events" className='m-2'>{staticData.repertoire}</NavLink>
            <NavLink exact to={'/members'} title="members" className='m-2'>{staticData.members}</NavLink>
            <NavLink exact to={'/albums'} title="albums" className='m-2'>{staticData.albums}</NavLink>
            <NavLink exact to={'/social'} title="Social" className='m-2'>{staticData.social}</NavLink>
          </ul>
        </nav>
        {staticData.repertoire && <div className='header__border-bottom'></div>}
      </div>
    </header>
  )
}

export default Header