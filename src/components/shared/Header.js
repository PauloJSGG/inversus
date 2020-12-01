import React from 'react'
import Logo from '../../assets/img/logo_black_small.png'
import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = (props) => {

  const {links, signOut, currentLanguage} = props
  const nav = links.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))

  return(
    <header className="header">
      <Link to={'/'} className="header__logo"><img src={Logo} alt="logo"></img></Link>
      <nav className='header__nav'>
        <ul className='header-nav-list'>
          {
            nav.map(item => <NavLink exact to={item.to} title="Events" className='m-2'>{item[currentLanguage] ? item[currentLanguage] : item.label}</NavLink>)
          }
          <a className="m-2" href="https://www.facebook.com/inversusfado/events/?ref=page_internal" target="_blank">
            <FontAwesomeIcon
              icon={['fas','calendar-alt']}
              style={{height: '1.5em',  width: '1.5em'}}
             />
          </a>
          <a className="m-2" onClick={signOut}>
            <FontAwesomeIcon
              icon={['fas','sign-out-alt']}
              style={{height: '1.5em',  width: '1.5em'}}
             />
          </a>
        </ul>
      </nav>
      <div className='header__border-bottom'/>
    </header>
  )
}

export default Header