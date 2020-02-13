import React, { Component } from 'react'
import Header from '../components/shared/Header'
import Social from '../components/main/social'
import Repertoire from '../components/main/repertoire'
import Members from '../components/main/members'
import Albums from '../components/main/albums'

import Video from '../components/shared/Video'

import LanguageSelector from '../components/shared/LanguageSelector'

import LogoUp from '../assets/img/inversus-logo-up.png'
import LogoDown from '../assets/img/inversus-logo-down.png'

import pt from '../assets/img/pt.svg'
import en from '../assets/img/gb.svg'
import de from '../assets/img/de.svg'

import Home from '../components/main/'

import Fire from '../firebase/Fire'

import { Route } from 'react-router-dom'
import AnimatedSwitch from '../components/shared/AnimatedSwitch.js'

const defaultState = {
  animate: true,
  muted: false,
  dynamicData: {
    repertoire: [],
    members: [],
  },
  currentLanguage: '',
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
    name: '',
    lyrics: '',
    imgUrl: '',
    spotifyUrl: ''
  },
  staticData: {},
  videoEnded: true,
}
class MainRoute extends Component {

  constructor(props) {
    super(props)
    this.state = sessionStorage.getItem("appState") ? JSON.parse(sessionStorage.getItem("appState")) : defaultState;
    this.fire = new Fire(this.state.currentLanguage)
  }

  componentDidMount() {
    this.fire.isInitialized()
      .then(() => {
        if (this.state.currentLanguage.length > 0)
          this.refreshData(this.state.currentLanguage)
      })
  }

  handleVideoEnded = () => {
    this.setState({videoEnded: true})
  }

  refreshData = () => {
    let dynamicData = {}
    this.fire.getDynamicData()
      .then(r => {
        dynamicData = r
        return null
      })
      .then(() => this.fire.getStaticData())
      .then(r => this.setState({dynamicData, staticData: r,}))
  }

  handleSetLanguage = (language) => {
    this.fire.setLanguage(language)
    this.setState({currentLanguage: language})
    this.refreshData()
  }

  handleMute = () => {
    this.setState({muted: !this.state.muted})
  }

  handleSelectTrack = (id) => {
    const track = this.state.dynamicData.repertoire.filter(item => item.id === id)[0]

    this.setState({
      ...this.state,
      isModalOpen: true,
      currentTrack: track
    })
  }

  handleModalOpen = (val) => this.setState({isModalOpen: val})

  render() {
    sessionStorage.setItem('appState', JSON.stringify(this.state))
    return(
      <>
        {!this.state.currentLanguage ?
          <div className='header-container'>
            <img src={LogoUp} alt={'logo'} className='header__image--up'/>
            <img src={LogoDown} alt={'logo'} className='header__image--down'/>
            <LanguageSelector
              isAdmin = {false}
              handleSetLanguage = {this.handleSetLanguage}
              {...this.state}
            />
          </div>
          :
          <>
            {!this.state.videoEnded ? <Video handleVideoEnded={this.handleVideoEnded} /> :
            (
              <div className = 'main'>
              <Header
                staticData = {this.state.staticData}
              />
                <Route render={({location}) => (
                  <AnimatedSwitch location={location}>
                    <Route
                      path={'/repertoire'}
                      render={ () => <Repertoire
                        {...this.state}
                        handleSelectTrack = {this.handleSelectTrack}
                        handleModalOpen = {this.handleModalOpen}
                        handleMute = {this.handleMute}
                      />}
                    />
                    <Route
                      path={'/members'}
                      render = {() => <Members
                        {...this.state}
                      />}
                    />
                    <Route path={'/albums'} component={Albums}/>
                    <Route path={'/social'} component={Social}/>
                    <Route path={'/'} exact component={() => <Home text={this.state.dynamicData.homeText}></Home>}/>
                  </AnimatedSwitch>
                )} />
              </div>
            )
            }
          </>
        }

      </>
  )
  }
}

export default MainRoute
