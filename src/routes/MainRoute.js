import React, { Component } from 'react'
import Header from '../components/shared/Header'
import Social from '../components/main/social'
import Repertoire from '../components/main/repertoire'
import Members from '../components/main/members'
import Albums from '../components/main/albums'
import Contacts from '../components/main/contacts'
import Galleries from '../components/main/galleries'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
import { faBoxTissue } from '@fortawesome/free-solid-svg-icons'
import { faThinkPeaks } from '@fortawesome/free-brands-svg-icons'

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
  currentGallery: [],
  currentGalleryImageIndex: 0,
  links: [],
  videoEnded: false,

  isGalleryModalOpen: false
}

class MainRoute extends Component {
  constructor(props) {
    super(props)
    this.state = defaultState
    if(sessionStorage.getItem("appState")){
      this.state = JSON.parse(sessionStorage.getItem("appState")) 
      Fire.setLanguage(this.state.currentLanguage)  
    }
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

  // refreshStorage = async () => {
  //   sessionStorage.setItem('appState', JSON.stringify(this.state))
  // }

  refreshData = async () => {
    const songs = await Fire.getSongs()
    const members = await Fire.getMembers()
    const links = await Fire.getLinks()
    const homeText = await Fire.getHomeText()
    const galleryCategories = await Fire.getGalleryCategories()

    this.setState({
      songs: songs,
      members: members,
      links: links,
      homeText: homeText,
      galleryCategories: galleryCategories
    },
      this.refreshStorage)    
  }

  handleGalleryModalOpen = async (open, category) => {
    if(!open) {
      return this.setState({isGalleryModalOpen: false, gallery: [], currentGalleryImage: {}})
    }
    const gallery = await Fire.getGallery(category)
    debugger
    this.setState({currentGallery: gallery, isGalleryModalOpen: open})
  }
  handleGalleryNext = async () => {
    debugger
    if(this.state.currentGallery.length - 1 > this.state.currentGalleryImageIndex)
      return this.setState({currentGalleryImageIndex: this.state.currentGalleryImageIndex + 1})
    else
      return this.setState({currentGalleryImageIndex: 0})
  }
  handleGalleryBack = async () => {
    if(0 < this.state.currentGalleryImageIndex)
      this.setState({currentGalleryImageIndex: this.state.currentGalleryImageIndex - 1})
    else
      this.setState({currentGalleryImageIndex: this.state.currentGallery.length -1})
  }

  handleSetLanguage = (language) => {
    Fire.setLanguage(language)
    this.setState({currentLanguage: language}, this.refreshData)

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
                        currentLanguage={this.state.currentLanguage}
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
                    <Route path={'/contacts'} component={Contacts}/>
                    <Route path={'/social'} component={Social}/>
                    <Route path={'/gallery'} component={() => 
                      <Galleries 
                        galleryCategories={this.state.galleryCategories}
                        currentLanguage={this.state.currentLanguage}
                        onModalOpen={this.handleGalleryModalOpen}
                        onGalleryNext={this.handleGalleryNext}
                        onGalleryBack={this.handleGalleryBack}
                        isModalOpen={this.state.isGalleryModalOpen}
                        currentGallery={this.state.currentGallery}
                        currentGalleryImageIndex={this.state.currentGalleryImageIndex}
                        onNext={this.handleGalleryImageNext}
                      />
                      }/>
                    <Route path={'/'} exact component={() => <Home homeText={this.state.homeText} currentLanguage={this.state.currentLanguage}></Home>}/>
                  </AnimatedSwitch>
                )} />
                <div className="main-footer" style={{display: 'flex', width: '100%', justifyContent: 'center', position: 'fixed', zIndex: '200'}}>
                  <a
                    href="https://www.facebook.com/inversusfado/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={['fab','facebook']}
                      style={{height: '1em',  width: '1rem', margin:'5px', color: 'white'}}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/inversusfado/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={['fab','instagram']}
                      style={{height: '1em',  width: '1rem', margin:'5px', color: 'white'}}
                    />
                  </a>
                  <a
                    href="https://open.spotify.com/artist/68hqv7bUIw71HHJExldzLZ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={['fab','spotify']}
                      style={{height: '1em',  width: '1rem', margin:'5px', color: 'white' }}
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCbYgNYLv-PDjDbsMqLdu5eA"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="white"
                  >
                    <FontAwesomeIcon
                      icon={['fab','youtube']}
                      style={{height: '1em',  width: '1rem', margin:'5px', color: 'white'}}
                    />
                  </a>
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
