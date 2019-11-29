import React, { useEffect, useState, Component } from 'react'
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

class AdminRoute extends Component{
  state = {
    firebaseInitialized: false,
    mainText: ""
  }

  componentDidMount() {
    Fire.isInitialized()
      .then(val => {
        this.setState({firebaseInitialized: val})
        Fire.getMainText().then(r => {
          this.setState({mainText: r})
        } )
      })
  }

  submitMain = () => {
    Fire.addMainText(this.state.mainText)
      .then(r => alert('Success'))
      .catch(e => alert('asdfasdf'))
  }

  handleFormChange = (txt) => {
    this.setState({
      mainText: txt
    })
  }

  render() {
    //waiting for firebase to initiate, otherwise it doesn't work
    if (this.state.firebaseInitialized === false)
      return <h1 style={{color: 'red'}}>LOADIIIINNNGGGGGGG</h1>

    if(!Fire.getCurrentUsername()) {
      // not logged in
      this.props.history.replace('/login')
      return null
    }

  const { match: { url } } = this.props

  console.log('estado', this.state)
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
              <Route
                exact path = {`${url}/main`}
                render = {
                  (props) => <MainEdit
                    submitMain = {this.submitMain}
                    handleFormChange = {this.handleFormChange}
                    formValue = {this.state.mainText}
                  />
                }
              />
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
}

export default withRouter(AdminRoute)