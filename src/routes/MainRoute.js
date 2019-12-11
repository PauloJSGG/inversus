import React, { Component } from 'react'
import Header from '../components/shared/Header'
import Body from '../components/shared/Body'
import Footer from '../components/shared/Footer'
import Social from '../components/main/social'
import Events from '../components/main/events'
import Repertoire from '../components/main/repertoire'

import asdf from '../routes/AdminRoute'

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
import AdminRoute from '../routes/AdminRoute'

class MainRoute extends Component {
  state = {
    dynamicData: {
      homeText: "",
      repertoire: []
    },
    isModalOpen: false,

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

    currentTrack: {
      data: {
        name: '',
        lyrics: '',
        imgUrl: '',
        spotifyUrl: ''
      }
    },

    staticData: {},
    currentLanguage: '',
  }

  componentDidMount() {
    Fire.isInitialized()
      .then(this.refreshData(Fire.language))
  }

  refreshData = (language) => {
    let dynamicData = {}
    Fire.setLanguage(language)
    Fire.getDynamicData()
      .then(() => Fire.getDynamicData())
      .then(r => {
        dynamicData = r
        return null
      })
      .then(() => Fire.getStaticData())
      .then(r => this.setState({dynamicData, staticData: r}))
  }

  handleSetLanguage = (language) => {
    this.refreshData(language)
  }

  handleSelectTrack = (id) => {
    const track = this.state.dynamicData.repertoire.filter(item => item.id === id)[0]

    this.setState({
      ...this.state,
      isModalOpen: true,
      currentTrack: track.data
    })
  }

  handleModalOpen = (val) => this.setState({isModalOpen: val})

  submitMain() {
    Fire.addMainText(this.state.mainText)
  }


  render() {

    console.log('estado',this.state)
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
                <div className = 'content-container'>
                  <Route
                    path={'/repertoire'}
                    render={ () => <Repertoire
                      {...this.state}
                      handleSelectTrack = {this.handleSelectTrack}
                      handleModalOpen = {this.handleModalOpen}
                    />}
                  />
                  <Route path={'/events'} component={Events}/>
                  <Route path={'/social'} component={Social}/>
                  <Route path={'/'} exact component={() => <Home text={this.state.dynamicData.homeText}></Home>}/>
                </div>
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
