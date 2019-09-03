import React from 'react'
import { NavLink, Switch, withRouter, Link  } from "react-router-dom";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import MainEdit from './MainEdit'

const Admin = () => {
  return(
    <>
      <AdminHeader/>
      <Switch>
        <Route exact path='/admin/main' component={MainEdit}/>
        {/* <Route exact path='/admin/songs' component={SongsEdit}/> */}
      </Switch>
    </>
  )}


export default Admin