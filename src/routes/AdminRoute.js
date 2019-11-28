import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/admin/AdminHeader'
import Footer from '../components/Footer'
import MainEdit from '../components/admin/MainEdit'
import Events from '../containers/EventsContainer'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'
import Fire from '../firebase/Fire'

import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const AdminRoute = (props) => {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    Fire.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })

  if (firebaseInitialized === false)
    return <h1 style={{color: 'red'}}>LOADIIIINNNGGGGGGG</h1>

	if(!Fire.getCurrentUsername()) {
    debugger
		// not logged in
		alert('Please login first')
		props.history.replace('/login')
		return null
  }

  const { match: { url } } = props

  return(
    <>
      <AdminHeader/>
      <Route render={({location}) => (
        <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="fade">
          <Switch>
            <Route exact path={`${url}/main`} component={MainEdit}/>
            <Route exact path='/discography' component={Events}/>
            {/* <Route exact path='/contacts' component={Social}/> */}
            {/* <Route path='admin/login' component={Login}/>
            <Route exact path='/' component={() => <Home text={this.state.mainText}></Home>}/> */}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      )} />
      <Footer/>
    </>
  )
}

export default withRouter(AdminRoute)