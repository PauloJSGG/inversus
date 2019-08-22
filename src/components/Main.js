import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Social from './social/Social'

import { Route, Switch } from 'react-router-dom'

class Main extends Component {

  render() {
    return (
      <>
        <Header/>
        <Switch>
          <Route path='/social' component={Social}/>
          <Route path='/events'/>
          <Route path='/social'/>
        </Switch>
        <Footer/>
      </>
    )
  }
}

export default Main