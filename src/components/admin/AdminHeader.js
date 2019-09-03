import React from 'react'
import { NavLink, Switch, withRouter, Link  } from "react-router-dom";
import Logo from '../../assets/img/logo_black_small.png'

const AdminHeader = () => {
  return(
    <header className='fixed'>
      <Link to={'/admin'} title="Home" className='header__logo'><img src={Logo}></img></Link>
      <nav>
        <ul className='flex justify-center'>
          <NavLink to={'/admin/main'} title="Social" className='m-2'>Texto página principal</NavLink>
          <NavLink to={'/admin/discography'} title="Social" className='m-2'>Editar reportorio</NavLink>
        </ul>
      </nav>
      <div className='header__border-bottom'></div>
    </header>
  )
}

export default AdminHeader