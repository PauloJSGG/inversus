import React, { Component } from 'react'
import Header from '../components/shared/Header'
import Body from '../components/shared/Body'
import Footer from '../components/shared/Footer'
import Social from '../components/main/social'
import Events from '../components/main/events'
import Repertoire from '../components/main/repertoire'

import Video from '../components/shared/Video'
import audio from '../assets/img/intro website.mp3'

import LanguageSelector from '../components/shared/LanguageSelector'

import SwitchWithFade from '../components/shared/SwitchWithFade'

import LogoUp from '../assets/img/inversus-logo-up.png'
import LogoDown from '../assets/img/inversus-logo-down.png'

import pt from '../assets/img/pt.svg'
import en from '../assets/img/gb.svg'
import de from '../assets/img/de.svg'

import Home from '../components/main/'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'
import Fire from '../firebase/Fire'

import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import AdminRoute from '../routes/AdminRoute'
import AnimatedSwitch from '../components/shared/AnimatedSwitch.js'

class MainRoute extends Component {
  state = {
    animate: true,
    muted: false,
    dynamicData: {
      homeText: '',
      repertoire: [],
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
      data: {
        name: '',
        lyrics: '',
        imgUrl: '',
        spotifyUrl: ''
      }
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

      // if (this.state.dynamicData.currentLanguage.length > 0){
      //   console.log('wtf')
      //   document.getElementById('myVideo').play()
      // }
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

  submitMain() {
    Fire.addMainText(this.state.mainText)
  }


  render() {
    return(
      <>
        {!this.state.dynamicData.currentLanguage ?

          <div className='flex flex-col justify-center items-center h-full'>

            {/* <img src={Logo} alt={'logo'} className='header__logo'/> */}
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
            {/* <audio loop autoplay id="myAudio">
              <source src={audio} type="audio/mpeg"/>
            </audio> */}
            {!this.state.videoEnded ? <Video handleVideoEnded={this.handleVideoEnded} /> :
             (

               <div className = 'main'>
                <Header
                  handleSetLanguage = {this.handleSetLanguage}
                  languageList = {this.state.languageList}
                  currentLanguage = {this.state.dynamicData.currentLanguage}
                  staticData = {this.state.staticData}
                />


                  <div className = 'content-container'>
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
                      <Route path={'/events'} component={Events}/>
                      <Route path={'/social'} component={Social}/>
                      <Route path={'/'} exact component={() => <Home text={this.state.dynamicData.homeText}></Home>}/>
                    </AnimatedSwitch>
                  )} />
                  </div>


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
