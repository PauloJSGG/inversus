import React, { Component } from 'react'
import Header from '../components/shared/Header'
import Body from '../components/shared/Body'
import Footer from '../components/shared/Footer'
import Social from '../components/main/social'
import Events from '../components/main/events'
import Repertoire from '../components/main/repertoire'

import pt from '../assets/img/pt.svg'
import en from '../assets/img/gb.svg'
import de from '../assets/img/de.svg'

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
    repertoire: [],
    languageList: [
      {
        language: 'pt',
        imgSrc: pt
      },
      {
        language: 'en',
        imgSrc: en
      },
      {
        language: 'de',
        imgSrc: de
      },
    ],
    currentLanguage: '',
    staticData: {}
  }

  componentDidMount() {
    Fire.isInitialized()
    this.refreshData(Fire.language)
  }

  refreshData = (language) => {
    let data = {}
    Fire.setLanguage(language)
    Fire.getDynamicData()
      .then(() => Fire.getDynamicData())
      .then(r => {
        data = r
        return null
      })
      .then(() => Fire.getStaticData())
      .then(r => this.setState({data, staticData: r}))
  }

  handleSetLanguage = (language) => {
    this.refreshData(language)
  }


  submitMain() {
    Fire.addMainText(this.state.mainText)
  }

  render() {
    const { match: { url } } = this.props

      return(
        <>
          <Header
            handleSetLanguage = {this.handleSetLanguage}
            languageList = {this.state.languageList}
            currentLanguage = {this.state.currentLanguage}
            staticData = {this.state.staticData}
          />
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
