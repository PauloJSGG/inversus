import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Social from './social/Social'
import Events from './events/Events'
import Home from './home/Home'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'
import db from '../db'

import { Route, Switch } from 'react-router-dom'

class Main extends Component {
  state = {
    mainText: ""
  }

  componentDidMount(){
    db().child('mainText').on('value', x => x.forEach(y=> this.setState({mainText: y.val()})))
    console.log(this.state.mainText)
  }

  render() {
    return (
      <>
        <Header/>
        <Route render={({location}) => (
          <TransitionGroup>
           <CSSTransition
            key={location.key}
            timeout={300}
            classNames="fade">
             <Switch>
               <Route path='/social' component={Social}/>
               <Route path='/events' component={Events}/>
               <Route path='/social' component={Social}/>
               <Route path='/' component={() => <Home text={this.state.mainText}></Home>}/>
             </Switch>
           </CSSTransition>
         </TransitionGroup>
        )} />
        <Footer/>
      </>
    )
  }
}

export default Main