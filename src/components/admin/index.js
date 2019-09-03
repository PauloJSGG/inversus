import React from 'react'
import { NavLink, Switch, withRouter, Link  } from "react-router-dom";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import MainEdit from './MainEdit'
import DiscographyEdit from './DiscographyEdit'

const Admin = () => {
  return(
    <>
      <AdminHeader/>
      <Switch>
        <Route path='/admin/main' component={MainEdit}/>
        <Route path='/admin/discography' component={DiscographyEdit}/>
        {/* <Route exact path='/admin/songs' component={SongsEdit}/> */}
      </Switch>
    </>
  )}


export default Admin