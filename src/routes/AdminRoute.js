
import React, { Component } from 'react'
import MainEdit from '../components/admin/main/MainEdit'
import RepertoireEdit from '../components/admin/repertoire/RepertoireEdit'
import MembersEdit from '../components/admin/members/MembersEdit'
import GalleryEdit from '../components/admin/gallery/GalleryEdit'
import LanguagesEdit from '../components/admin/languages/LanguagesEdit'

import LanguageSelector from '../components/shared/LanguageSelector'
import Header from '../components/shared/Header'

import pt from '../assets/img/pt.svg'
import en from '../assets/img/gb.svg'
import de from '../assets/img/de.svg'

import Fire from '../firebase/Fire'

import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { faThinkPeaks } from '@fortawesome/free-brands-svg-icons'

const headerLinks = [
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
]

class AdminRoute extends Component{
  state = {
    firebaseInitialized: false,
    homeText: '',
    songs: [],
    languages: [],
    texts: {},
    isModalOpen: false,
    members: [],
    currentSong: {
      id: '',
      name: '',
      imageUrl: '',
      spotifyUrl: '',
      songUrl: '',
    },
    currentMember: {
      name: '',
      imgUrl: '',
      text: '',
      image: null,
      active: false,
    },
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
    currentLanguage: 'pt',

    currentGaleryImage: {
      file: {},
      imageUrl: '',
      description: '',
      category: ''
    },
    gallery: [],
    isModalLyricOpen: false,
    isModalSongOpen: false,
    isModalMemberOpen: false, 
    isModalMemberTextOpen: false, 
    isModalLanguageOpen: false, 
  }

  constructor() {
    super()
    this.fire = Fire
    Fire.setLanguage('pt')
    this.rootRepertoire = 'dynamic_values/repertoire'
    this.rootMembers = 'dynamic_values/members'
  }

  updateSongs() {
    this.fire.getSongs()
      .then(data => this.setState({songs: data}))
  }
  updateMembers() {
    this.fire.getMembers()
      .then(data => this.setState({members: data}))
  }

  async componentDidMount() {
    this.refreshData()    
  }

  refreshData = async () => {
    const firebaseInitialized = await this.fire.isInitialized()
    const songs = await Fire.getSongs()
    const members = await Fire.getMembers()
    debugger
    const homeText = await Fire.getHomeText()
    this.setState({firebaseInitialized: firebaseInitialized, songs: songs, members: members, homeText: homeText, currentLanguage: Fire.language})
  }


  login = async () => {
    try {
      await this.fire.login(this.state.Email, this.state.Password);
      this.props.history.replace('/admin')
    } catch(e) {
      console.log(e)
    }
  }

  handleSubmitHomeText = (values) => {
    Fire.updateHomeText(values)
    this.refreshData()
  }

  handleSetLanguage = (language) => {
    this.fire.setLanguage(language)
    this.refreshData()
  }

  handleMemberSubmit = async (values) => {
    await this.fire.addMember(values)
      this.setState({currentMember: {}, isModalMemberOpen: false})
      this.updateMembers()
  }

  handleMemberTextSubmit = async (values) => {
    Fire.updateMember(values)
      .then(this.refreshData)
  }

  cleanState = () => this.setState((prevState) => ({
    currentTrack: {
      name: '',
      lyrics: '',
      imgUrl: '',
      spotifyUrl: '',
      previewUrl: '',
    },
    currentMember: {
      name: '',
      imgUrl: '',
      text: '',
    }
  }))

  handleUpload = val => {
    if(val.target.files[0]){
      const image = val.target.files[0];
      this.setState({image})
    }
  }

  handleModalLyricOpen = (open, val) => {
    if(open)
      return this.setState({ isModalLyricOpen: open, currentSong: val })
    else
      return this.setState({ isModalLyricOpen: open, currentSong: {} })
  }
  
  handleModalMemberTextOpen = (open, val) => {
    if(open)
      return this.setState({ isModalMemberTextOpen: open, currentMember: val })
    else
      return this.setState({ isModalMemberTextOpen: open, currentMember: {} })
  }

  handleModalSongOpen = (open) => this.setState({isModalSongOpen: open})

  handleModalMemberOpen = (open) => this.setState({isModalMemberOpen: open})

  handleModalLanguageOpen = (open) => this.setState({isModalLanguageOpen: open})

  handleSongVisibility = (data) => Fire.updateSong({...data, visibility: !data.visibility}).then(this.refreshData)

  handleSongDelete = (data) => Fire.deleteSong(data.id).then(this.refreshData)

  logout = () => {
    this.fire.logout()
    this.props.history.replace('/login')
  }

  handleRepertoireChange(txt, param) {
    this.setState({
      mainText: txt
    })
  }

  onInputChange = (num) => {
    this.setState({numberOfTracks: num})
  }
  //------------------------------------------


  // GALLERY
  handleGalleryUpload = val => {
    if(val.target.files){
      const image = val.target.files[0];
      this.setState(prevState => ({
        currentGaleryImage: {
          ...prevState["currentGaleryImage"],
          file: image
        }
      }))
    }
    else {
      const description = val.target.value
      this.setState(prevState => ({
        ...prevState["currentGaleryImage"],
        currentGaleryImage: {
          description: description
        }
      }))
    }
  }

  handleCategoryChange = val => {
    const category = val.target.value
    this.setState(prevState => ({
      ...prevState["currentGaleryImage"],
      currentGaleryImage: {
        category: category
      }
    }))
  }

  handleSongSubmit = async (values) => {
    await this.fire.addSong(values)
    this.setState({currentSong: {}, isModalSongOpen: false})
    this.updateSongs()
  }
    
  handleLyricSubmit = (values) => this.fire.updateSong(values).then(this.refreshData)

  render() {
    //waiting for firebase to initiate, otherwise it doesn't work
    if (this.state.firebaseInitialized === false)
      return null

    if(!this.fire.getCurrentUsername()) {
      // not logged in
      this.props.history.replace('/login')
      return null
    }

    const { match: { url } } = this.props

    return(
      <>
        <Header
          links={headerLinks}
          // logout={this.logout}
        />
        <Route render={({location}) => (
          <Switch>
            <div className = "">
              <LanguageSelector
                handleSetLanguage = {this.handleSetLanguage}
                languageList = {this.state.languageList}
                currentLanguage = {this.state.currentLanguage}
                isAdmin = {true}
              />
              <Route
                exact path = {`${url}`}
                render = {
                  (props) =>
                  <MainEdit
                    onSubmit = {this.handleSubmitHomeText}
                    currentLanguage = {this.state.currentLanguage}

                    values = {this.state.homeText}
                  />
                }
              />
              <Route
                exact path={`${url}/repertoire`}
                render = {
                  (props) =>
                  <RepertoireEdit
                    onSubmitSongForm = { this.handleSongSubmit }
                    onSubmitLyricForm = { this.handleLyricSubmit }
                    onEditClick = { this.handleEditClick }
                    onChange = { (e) => this.handleDataChange(e, 'currentTrack') }
                    onModalLyricOpen = { this.handleModalLyricOpen }
                    onModalSongOpen = { this.handleModalSongOpen }
                    onSubmit = { () => this.handleAddDocument(this.rootRepertoire, this.state.currentTrack) }
                    onDelete = { this.handleSongDelete }
                    onVisibility = { this.handleSongVisibility }

                    isModalLyricOpen = { this.state.isModalLyricOpen }
                    isModalSongOpen = { this.state.isModalSongOpen }

                    repertoire = { this.state.songs }
                    currentSong = { this.state.currentSong }
                    currentLanguage = { this.state.currentLanguage }
                  />
                }
              />
              <Route
                exact path={`${url}/members`}
                render = {
                  (props) =>
                  <MembersEdit
                    onModalMemberOpen = {this.handleModalMemberOpen}
                    onModalMemberTextOpen = {this.handleModalMemberTextOpen}
                    onEditClick = {this.handleEditClick}
                    onUpload = {this.handleUpload}
                    onChange = {(e) => this.handleDataChange(e, 'currentMember')}
                    onSubmitModalMember = {this.handleMemberSubmit}
                    onSubmitModalMemberText = {this.handleMemberTextSubmit}
                    onDelete = {(id) => this.handleDeleteDocument(this.rootMembers, id)}

                    isModalMemberOpen = {this.state.isModalMemberOpen}
                    isModalMemberTextOpen = {this.state.isModalMemberTextOpen}

                    values = {this.state.currentMember}
                    currentMember = {this.state.currentMember}
                    members = {this.state.members}
                    currentLanguage = {this.state.currentLanguage}
                  />
                }
              />
              <Route
                exact path={`${url}/gallery`}
                render = {
                  (props) =>
                  <GalleryEdit
                    onEditClick = {this.handleEditClick}
                    onGalleryUpload = {this.handleGalleryUpload}
                    onChange = {(e) => this.handleDataChange(e, 'currentMember')}
                    onGallerySubmit = {() => this.handleGallerySubmit()}
                    onDelete = {(id) => this.handleDeleteDocument(this.rootMembers, id)}
                    onModalOpen = {this.handleModalOpen}
                    onCategoryChange = {this.handleCategoryChange}

                    isModalOpen = {this.state.isModalOpen}

                    currentMember = {this.state.currentMember}
                    members = {this.state.members}
                    gallery = {this.state.gallery}
                  />
                }
              />
              {/* <Route
                exact path={`${url}/languages`}
                render = {
                  (props) =>
                  <LanguagesEdit
                    languages = {this.state.languages}
                    onModalOpen = {this.handleModalLanguageOpen}
                    isModalOpen = {this.state.isModalLanguageOpen}
                  />
                }
              /> */}
            </div>
          </Switch>
        )}/>
      </>
    )
  }
}

export default withRouter(AdminRoute)