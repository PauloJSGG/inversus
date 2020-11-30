
import React, { Component } from 'react'
import MainEdit from '../components/admin/main/MainEdit'
import RepertoireEdit from '../components/admin/repertoire/RepertoireEdit'
import MembersEdit from '../components/admin/members/MembersEdit'
import GalleryEdit from '../components/admin/gallery/GalleryEdit'

import LanguageSelector from '../components/shared/LanguageSelector'
import Header from '../components/shared/Header'

import pt from '../assets/img/pt.svg'
import en from '../assets/img/gb.svg'
import de from '../assets/img/de.svg'

import Fire from '../firebase/Fire'

import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

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
]

class AdminRoute extends Component{
  state = {
    firebaseInitialized: false,
    homeText: '',
    songs: [],
    texts: {},
    isModalOpen: false,
    repertoire: [],
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

  componentDidMount() {
    this.fire.isInitialized()
      .then(val => this.setState({firebaseInitialized: val}))
      .then(() => Fire.getSongs())
      .then(r => {
        this.setState({songs: r})
      })
      .then(Fire.getMembers)
      .then(r => this.setState({members: r}))
  }

  // componentDidUpdate() {
  //   this.fire.getSongs()
  //     .then(data => this.setState({songs: data}))
  // }
 
  login = async () => {
    try {
      await this.fire.login(this.state.Email, this.state.Password);
      this.props.history.replace('/admin')
    } catch(e) {
      console.log(e)
    }
  }

  handleSubmitHomeText = () => {
    this.fire.addOrEditDocument('dynamic_values', {homeText: this.state.homeText})
    .then(r => alert('✅Success✅'))
    .catch(e => alert(e))
  }

  handleFormChange = (txt) => {
    this.setState({
      homeText: txt
    })
  }

  handleEditClick = (key, object) => {
    this.setState({
      ...this.state,
      isModalOpen: true,
      [key]: {
        ...object
      }
    })
  }


  handleSetLanguage = (language) => {
    this.fire.setLanguage(language)
    this.fire.getDynamicData()
      .then(r => this.setState(r))
  }

  handleMemberSubmit = async (values) => {
    debugger
    await this.fire.addMember(values)
      this.setState({currentMember: {}, isModalMemberOpen: false})
      this.updateMembers()
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
      return this.setState({ isModalLyricOpen: open, currentLyric: {} })
  }

  handleModalSongOpen = (open) => this.setState({isModalSongOpen: open})

  handleModalMemberOpen = (open) => this.setState({isModalMemberOpen: open})

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
    
  handleLyricSubmit = (values) => this.fire.addSongLyric(values)

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
                languageList = {this.state.languageList}
                currentLanguage = {this.state.currentLanguage}
                handleSetLanguage = {this.handleSetLanguage}
                isAdmin = {true}
              />
              <Route
                exact path = {`${url}`}
                render = {
                  (props) =>
                  <MainEdit
                    handleSubmitHomeText = {this.handleSubmitHomeText}
                    handleFormChange = {this.handleFormChange}
                    handleSetLanguage = {this.handleSetLanguage}
                    languageList = {this.state.languageList}
                    currentLanguage = {this.state.currentLanguage}
                    formValue = {this.state.homeText}
                  />
                }
              />
              <Route
                exact path={`${url}/repertoire`}
                render = {
                  (props) =>
                  <RepertoireEdit
                    submitSongForm = { this.handleSongSubmit }
                    submitLyricForm = { this.handleLyricSubmit }
                    handleEditClick = { this.handleEditClick }
                    handleChange = { (e) => this.handleDataChange(e, 'currentTrack') }
                    handleModalLyricOpen = { this.handleModalLyricOpen }
                    handleModalSongOpen = { this.handleModalSongOpen }
                    handleSubmit = { () => this.handleAddDocument(this.rootRepertoire, this.state.currentTrack) }
                    handleDelete = { (id) => this.handleDeleteDocument(this.rootRepertoire, id) }

                    isModalLyricOpen = { this.state.isModalLyricOpen }
                    isModalSongOpen = { this.state.isModalSongOpen }

                    repertoire = { this.state.songs }
                    currentSong = { this.state.currentSong }
                  />
                }
              />
              <Route
                exact path={`${url}/members`}
                render = {
                  (props) =>
                  <MembersEdit
                    handleModalMemberOpen = {this.handleModalMemberOpen}
                    handleEditClick = {this.handleEditClick}
                    handleUpload = {this.handleUpload}
                    handleChange = {(e) => this.handleDataChange(e, 'currentMember')}
                    handleSubmit = {this.handleMemberSubmit}
                    handleDelete = {(id) => this.handleDeleteDocument(this.rootMembers, id)}
                    handleModalOpen = {this.handleModalOpen}

                    values = {this.state.currentMember}
                    currentMember = {this.state.currentMember}
                    members = {this.state.members}
                    isModalMemberOpen = {this.state.isModalMemberOpen}
                    currentLanguage = {this.state.currentLanguage}
                  />
                }
              />
              <Route
                exact path={`${url}/gallery`}
                render = {
                  (props) =>
                  <GalleryEdit
                    handleEditClick = {this.handleEditClick}
                    handleGalleryUpload = {this.handleGalleryUpload}
                    handleChange = {(e) => this.handleDataChange(e, 'currentMember')}
                    handleGallerySubmit = {() => this.handleGallerySubmit()}
                    handleDelete = {(id) => this.handleDeleteDocument(this.rootMembers, id)}
                    handleModalOpen = {this.handleModalOpen}
                    handleCategoryChange = {this.handleCategoryChange}

                    currentMember = {this.state.currentMember}
                    members = {this.state.members}
                    isModalOpen = {this.state.isModalOpen}
                    gallery = {this.state.gallery}
                  />
                }
              />
            </div>
          </Switch>
        )}/>
      </>
    )
  }
}

export default withRouter(AdminRoute)