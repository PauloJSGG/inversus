
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
    tracks: [],
    texts: {},
    isModalOpen: false,
    repertoire: [],
    members: [],
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
      image: null,
      url: '',
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
    gallery: []
  }

  constructor() {
    super()
    this.fire = Fire
    Fire.setLanguage('pt')
    this.rootRepertoire = 'dynamic_values/repertoire'
    this.rootMembers = 'dynamic_values/members'
  }

  componentDidMount() {
    this.fire.isInitialized()
      .then(val => this.setState({firebaseInitialized: val}))
      .then(() => this.fire.getDynamicData())
      .then(r => this.setState(r))
  }

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

  handleDataChange = (event, key) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;


    this.setState((prevState) => ({
      [key]: {
        ...prevState[key],
        [name]: value
      },
    }))
  }

  handleSetLanguage = (language) => {
    this.fire.setLanguage(language)
    this.fire.getDynamicData()
      .then(r => this.setState(r))
  }

  // handleUploadImage = e => {
  //   const { image } = this.state
  //   const uploadTask = this.fire.storage.ref(`images/${image.name}`).put(image)

  //   uploadTask.on('state_change', snapshot => console.log('progress'),
  //                                 error => console.log(error),
  //                                 () => {
  //                                   this.fire.storage.ref('images').child(image.name).getDownloadURL().then(url => console.log(url))
  //                                 }
  //   )
  // }

  handleAddDocument = (path, data) => {



    if (data.id) {

      this.fire.updateDocument(path, data)
        .then(() =>  alert('✔️Success✔️'))
        .then(() => this.fire.getDynamicData())
        .then(r => this.setState(r))
        .catch((e) => alert('❌Error❌'))
        .finally(() => this.handleModalOpen(false))
    }
    else {
      let imgUrl = ''
      const { image } = this.state
      const uploadTask = this.fire.storage.ref(`images/${image.name}`).put(image)

      uploadTask.on('state_changed', snapshot => console.log('progress'),
                                     error => alert(error),
                                     () => {
                                       this.fire.storage.ref('images').child(image.name).getDownloadURL().then(url => imgUrl = url)
                                                                                                         .then(() => this.fire.addToCollection(path, {...data, imgUrl}))
                                                                                                         .then(() =>  alert('✔️Success✔️'))
                                                                                                         .then(() => this.fire.getDynamicData())
                                                                                                         .then(r => this.setState(r))
                                                                                                         .catch((e) => alert('❌Error❌'))
                                                                                                         .finally(() => this.handleModalOpen(false))
                                     }
      )
    }
  }

  handleDeleteDocument = (path, trackId) => {
    this.fire.deleteDocument(`${path}/${trackId}`)
      .then((e) => alert('✅Success✅'))
      .then(() => this.fire.getDynamicData())
      .then(r => this.setState(r))
      .catch((e) => alert(e))
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

  handleModalOpen = val => {
    if (!val)
      this.cleanState()

    this.setState({isModalOpen: val})
  }

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

  handleGallerySubmit = () => {
    let imgUrl = ''
    const { currentGaleryImage } = this.state
    debugger
    const uploadTask = this.fire.storage.ref(`gallery/${currentGaleryImage.name}`).put(currentGaleryImage)

    uploadTask.on('state_changed', snapshot => console.log('progress'),
                                    error => alert(error),
                                    () => {
                                      this.fire.storage.ref('gallery').child(currentGaleryImage.name).getDownloadURL()
                                        .then(url => imgUrl = url)
                                        .then(() => this.fire.addGalleryImages(this.state.currentGaleryImage))
                                        .then(() =>  alert('✔️Success✔️'))
                                        .then(() => this.fire.getGalleryImages())
                                        .then(r => this.setState(r))
                                        .catch((e) => alert(e.message))
                                        .finally(() => this.handleModalOpen(false))
                                    })
  }


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
                    handleEditClick = {this.handleEditClick}
                    handleChange = {(e) => this.handleDataChange(e, 'currentTrack')}
                    handleModalOpen = {this.handleModalOpen}
                    handleSubmit = {() => this.handleAddDocument(this.rootRepertoire, this.state.currentTrack)}
                    handleDelete = {(id) => this.handleDeleteDocument(this.rootRepertoire, id)}

                    isModalOpen = {this.state.isModalOpen}
                    repertoire = {this.state.repertoire}
                    currentTrack = {this.state.currentTrack}
                  />
                }
              />
              <Route
                exact path={`${url}/members`}
                render = {
                  (props) =>
                  <MembersEdit
                    handleEditClick = {this.handleEditClick}
                    handleUpload = {this.handleUpload}
                    handleChange = {(e) => this.handleDataChange(e, 'currentMember')}
                    handleSubmit = {() => this.handleAddDocument(this.rootMembers, this.state.currentMember)}
                    handleDelete = {(id) => this.handleDeleteDocument(this.rootMembers, id)}
                    handleModalOpen = {this.handleModalOpen}

                    currentMember = {this.state.currentMember}
                    members = {this.state.members}
                    isModalOpen = {this.state.isModalOpen}
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