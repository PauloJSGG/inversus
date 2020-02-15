import React from 'react'
import Logo from '../../assets/img/logo_black_small.png'
import { NavLink, Link } from "react-router-dom";

  const Header = (props) => {

  const {links} = props

  return(
    <header className="header">
      <Link to={links[0].to} title={links[0].title} className="header__logo"><img src={Logo} alt="logo"></img></Link>
      <nav className='header__nav'>
        <ul className='header-nav-list'>
          {
            links.map(item => <NavLink exact to={item.to} title="Events" className='m-2'>{links.text}</NavLink>)
          }
          {/* <NavLink exact to={'/repertoire'} title="Events" className='m-2'>{staticData.repertoire}</NavLink>
          <NavLink exact to={'/members'} title="members" className='m-2'>{staticData.members}</NavLink>
          <NavLink exact to={'/albums'} title="albums" className='m-2'>{staticData.albums}</NavLink>
          <NavLink exact to={'/social'} title="Social" className='m-2'>{staticData.social}</NavLink> */}
        </ul>
      </nav>
      <div className='header__border-bottom'/>
    </header>
  )
}

export default Header