import React from 'react'
import { NavLink, Switch, withRouter, Link  } from "react-router-dom";
import Logo from '../../assets/img/logo_black_small.png'

const AdminHeader = (props) => {
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
          <NavLink to={'/admin/members'} title="Social" className='m-2'>Editar membros</NavLink>
          <button onClick={props.logout} title="Sair" className='m-2'>Sair</button>
        </ul>
      </nav>
      <div className='header__border-bottom'></div>
      </div>
    </header>
  )
}

export default AdminHeader