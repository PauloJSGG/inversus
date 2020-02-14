import React from 'react'
import { NavLink, Link } from "react-router-dom";
import Logo from '../../assets/img/logo_black_small.png'

const AdminHeader = (props) => {
  return(
    <header className="header">
      <div className="header-container">
      <div className="w-full justify-center flex">
        <Link to={'/admin'} title="Home" className="header__logo">
          <img src={Logo} alt="logo"/>
        </Link>
      </div>
      <nav header__nav>
        <ul className="header-nav-list">
          <NavLink to="/admin/" title="Social" className="m-2">Texto página principal</NavLink>
          <NavLink to="/admin/repertoire" title="Social" className="m-2">Editar reportorio</NavLink>
          <NavLink to={'/admin/members'} title="Social" className="m-2">Editar membros</NavLink>
          <button onClick={props.logout} title="Sair" className="m-2" style={{color: 'white'}}>Sair</button>
        </ul>
      </nav>
      <div className="header__border-bottom"></div>
      </div>
    </header>
  )
}

export default AdminHeader