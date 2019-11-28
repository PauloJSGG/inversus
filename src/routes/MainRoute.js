import React, { Component } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Social from '../containers/SocialContainer'
import Events from '../containers/EventsContainer'
import Home from '../components/home/Home'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'
import Fire from '../firebase/Fire'

import { Route, Switch, Redirect } from 'react-router-dom'

const MainRoute = () => {
  return(
    <>
      <Header/>
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
          key={location.key}
          timeout={300}
          classNames="fade">
            <Switch>
              {/* <Route path='/about-us' component={Social}/>
              <Route path='/discography' component={Events}/> */}
              {/* <Route path='/contacts' component={Social}/> */}
              <Route path='/events' component={Events}/>
              <Route path='/social' component={Social}/>
              <Route exact path='/' component={() => <Home text={this.state.mainText}></Home>}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
      <Footer/>
    </>
  )
}


// class Main extends Component {
  // state = {
  //   mainText: ""
  // }

  // componentDidMount(){
  //   Fire.db().child('mainText').on('value', x => this.setState({mainText: x.val()}))
  // }

//   render() {
//     return (

//     )
//   }
// }

export default MainRoute