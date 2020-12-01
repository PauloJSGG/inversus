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

const headerLinks = [
  {
    to: '/admin',
    label: 'logo',
  },
  {
    to: '/admin',
    label: 'Texto principal',
  },
  {
    to: '/admin/repertoire',
    label: 'Repertório',
  },  
  {
    to: '/admin/members',
    label: 'Membros',
  },
  {
    to: '/admin/gallery',
    label: 'Galeria',
  },
  // {
  //   to: '/admin/languages',
  //   label: 'Linguas',
  // },
]

const defaultState = {
  animate: true,
  muted: false,
  homeText: '',
  songs: [],
  dynamicData: {
    repertoire: [],
    members: [],
    homeText: '',
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

  currentSong: {
    name: '',
    lyrics: '',
    imgUrl: '',
    spotifyUrl: ''
  },
  links: [],
  videoEnded: false,
}

class MainRoute extends Component {
  constructor(props) {
    super(props)
    this.state = sessionStorage.getItem("appState") ? JSON.parse(sessionStorage.getItem("appState")) : defaultState;
    this.fire = Fire
  }

  // componentDidMount() {
  //   this.fire.isInitialized()
  //     .then(() => {
  //       Fire.getSongs().then(data => this.setState({songs: data}))
  //     })
  // }

  handleVideoEnded = () => {
    this.setState({videoEnded: true})
  }

  refreshData = async () => {
    const songs = await Fire.getSongs()
    const members = await Fire.getMembers()
    const links = await Fire.getLinks()
    const homeText = await Fire.getHomeText()
    this.setState({songs: songs, members: members, links: links, currentLanguage: this.fire.language, homeText: homeText})
    // let state = {currentLanguage: this.fire.language}
    // this.fire.getDynamicData()
    //   .then(result => (state = {...state, dynamicData: result, songs: result.songs}))
    //   .then(() => this.fire.getStaticData())
    //   .then(result => (state = {...state, headerLinks: result.header_links}))
    //   .then(() => this.setState(state))
  }

  handleSetLanguage = (language) => {
    Fire.setLanguage(language)
    this.refreshData()
  }

  handleMute = () => {
    this.setState({muted: !this.state.muted})
  }

  handleSelectTrack = (id) => {
    const track = this.state.songs.filter(item => item.id === id)[0]

    this.setState({
      ...this.state,
      isModalOpen: true,
      currentSong: track
    })
  }

  handleModalOpen = (val) => this.setState({isModalOpen: val})

  render() {
    sessionStorage.setItem('appState', JSON.stringify(this.state))
    return(
      <>
        {!this.state.currentLanguage ?
          <div className='initial'>
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
                  links={this.state.links}
                  signOut={() => this.setState({currentLanguage: ""})}
                  currentLanguage={this.state.currentLanguage}
                />
                <Route render={({location}) => (
                  <AnimatedSwitch location={location}>
                    <Route
                      path={'/repertoire'}
                      render={ () => <Repertoire
                        {...this.state}
                        currentLanguage={this.fire.language}
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
                    <Route path={'/'} exact component={() => <Home homeText={this.state.homeText} currentLanguage={this.state.currentLanguage}></Home>}/>
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
