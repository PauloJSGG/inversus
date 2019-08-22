import React from 'react'
import Logo from '../assets/img/logo_black_small.png'
import { NavLink, Switch, withRouter } from "react-router-dom";

  const Header = () => {
  return(
    <div className='header'>
      <div className='header__logo'>
        <img src={ Logo }/>
      </div>
      <ul className='flex justify-center'>
        <NavLink to={'/news'} title="Social" className='m-2'>News</NavLink>
        <NavLink to={'/social'} title="Social" className='m-2'>Social</NavLink>
        <NavLink to={'/events'} title="Events" className='m-2'>Events</NavLink>
        <NavLink to={'/contacts'} title="Events" className='m-2'>Contacts</NavLink>
      </ul>
    </div>
  )
}

export default Header