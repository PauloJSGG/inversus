import React from 'react'
import Logo from '../../assets/img/logo_black_small.png'
import { NavLink, Link } from "react-router-dom";

const Header = (props) => {

  const {links} = props
  const logo = links.filter(item => item.label === 'logo')[0]
  const nav = links.filter(item => item.label !== 'logo')

  return(
    <header className="header">
      <Link to={logo.to} title={logo.label} className="header__logo"><img src={Logo} alt="logo"></img></Link>
      <nav className='header__nav'>
        <ul className='header-nav-list'>
          {
            nav.map(item => <NavLink exact to={item.to} title="Events" className='m-2'>{item.label}</NavLink>)
          }
        </ul>
      </nav>
      <div className='header__border-bottom'/>
    </header>
  )
}

export default Header