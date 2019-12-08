import React, { Component } from 'react'
import Header from '../components/shared/Header'
import Body from '../components/shared/Body'
import Footer from '../components/shared/Footer'
import Social from '../components/main/social'
import Events from '../components/main/events'
import Repertoire from '../components/main/repertoire'
import Home from '../components/main/'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'
import Fire from '../firebase/Fire'

import { Route, Switch, Redirect } from 'react-router-dom'

class MainRoute extends Component {
  state = {
    homeText: "",
    repertoire: []
  }

  componentDidMount() {
    Fire.isInitialized()
      .then(val => this.setState({firebaseInitialized: val}))
      .then(() => Fire.getDynamicData())
      .then(r => this.setState(r))
  }

  handleSetLanguage = (language) => {
    Fire.setLanguage(language)
    Fire.getDynamicData()
      .then(r => this.setState(r))
  }

  // onFormChange(txt) {
  //   this.setState({
  //     mainText: txt
  //   })
  // }

  submitMain() {
    Fire.addMainText(this.state.mainText)
  }

  render() {

    console.log('state: ', this.state)

    const { match: { url } } = this.props

      return(
        <>
          <Header handleSetLanguage = {this.handleSetLanguage}/>
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
              key={location.pathname}
              timeout={300}
              classNames="fade">
                <Switch>
                  {/* <Route path='/about-us' component={Social}/>
                  <Route path='/discography' component={Events}/> */}
                  <Route
                    path={`${url}/repertoire`}
                    render={ () => <Repertoire repertoire = {this.state.repertoire}/>}
                  />
                  <Route path={`${url}/events`} component={Events}/>
                  <Route path={`${url}/social`} component={Social}/>
                  <Route path={`${url}`} component={() => <Home text={this.state.mainText}></Home>}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
          <Footer/>
        </>
    )
  }
}

export default MainRoute
