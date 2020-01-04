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

class MainRoute extends Component {
  state = {
    animate: true,
    muted: false,
    dynamicData: {
      texts: {},
      repertoire: [],
      members: [],
      currentLanguage: 'pt',
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
      name: '',
      lyrics: '',
      imgUrl: '',
      spotifyUrl: ''
    },
    staticData: {},
    videoEnded: true
  }

  componentDidMount() {
    Fire.isInitialized()
      .then(() => {
        if (this.state.dynamicData.currentLanguage.length > 0)
          this.refreshData(Fire.language)
      })
  }

  handleVideoEnded = () => {
    this.setState({videoEnded: true})
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

  handleMute = () => {
    this.setState({muted: !this.state.muted})
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

  render() {
    return(
      <>
        {!this.state.dynamicData.currentLanguage ?
          <div className='flex flex-col justify-center items-center h-full'>
            <img src={LogoUp} alt={'logo'} className='header__logo--up'/>
            <img src={LogoDown} alt={'logo'} className='header__logo--down'/>
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
                    <Route path={'/'} exact component={() => <Home text={this.state.dynamicData.texts.homeText}></Home>}/>
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
