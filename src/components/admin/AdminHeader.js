import React from 'react'
import { NavLink, Switch, withRouter, Link  } from "react-router-dom";
import Logo from '../../assets/img/logo_black_small.png'

const AdminHeader = () => {
  return(
    <header className='header-main'>
      <div className='header-container'>
      <div className='w-full justify-center flex'>
        <Link to={'/admin'} title="Home" className='header__logo'><img src={Logo}></img></Link>
      </div>
      <nav>
        <ul className='flex justify-center'>
          <NavLink to={'/admin/'} title="Social" className='m-2'>Texto página principal</NavLink>
          <NavLink to={'/admin/repertoire'} title="Social" className='m-2'>Editar reportorio</NavLink>
        </ul>
      </nav>
      <div className='header__border-bottom'></div>
      </div>
    </header>
  )
}

export default AdminHeader