import React from 'react'
import Logo from '../assets/img/logo_black_small.png'
import { NavLink, Switch, withRouter, Link  } from "react-router-dom";

  const Header = () => {
  return(
    <header className='fixed'>
      <Link to={'/'} title="Home" className='header__logo'><img src={Logo}></img></Link>
      <nav>
        <ul className='flex justify-center'>
          <NavLink to={'/news'} title="Social" className='m-2'>News</NavLink>
          <NavLink to={'/social'} title="Social" className='m-2'>Social</NavLink>
          <NavLink to={'/events'} title="Events" className='m-2'>Events</NavLink>
          <NavLink to={'/contacts'} title="Events" className='m-2'>Contacts</NavLink>
        </ul>
      </nav>
      <div className='header__border-bottom'></div>
    </header>
  )
}

export default Header