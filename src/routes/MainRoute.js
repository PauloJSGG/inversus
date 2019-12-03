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
    mainText: "",
    repertoire: []
  }

  componentDidMount() {
    Fire.isInitialized()
      .then(val => this.setState({firebaseInitialized: val}))
      .then(() => Fire.getMainData())
      .then(r => this.setState(r))
  }

  onFormChange(txt) {
    this.setState({
      mainText: txt
    })
  }

  submitMain() {
    Fire.addMainText(this.state.mainText)
  }

  render() {

    const { match: { url } } = this.props

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

// const MainRoute = () => {
//   return(
//     <>
//       <Header/>
//       <Route render={({location}) => (
//         <TransitionGroup>
//           <CSSTransition
//           key={location.key}
//           timeout={300}
//           classNames="fade">
//             <Switch>
//               {/* <Route path='/about-us' component={Social}/>
//               <Route path='/discography' component={Events}/> */}
//               {/* <Route path='/contacts' component={Social}/> */}
//               <Route path='/events' component={Events}/>
//               <Route path='/social' component={Social}/>
//               <Route exact path='/' component={() => <Home text={this.state.mainText}></Home>}/>
//             </Switch>
//           </CSSTransition>
//         </TransitionGroup>
//       )} />
//       <Footer/>
//     </>
//   )
// }


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