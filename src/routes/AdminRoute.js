import React, { useEffect, useState, Component } from 'react'
import AdminHeader from '../components/admin/AdminHeader'
import MainEdit from '../components/admin/MainEdit'
import RepertoireEdit from '../components/admin/RepertoireEdit'
import MembersEdit from '../components/admin/MembersEdit'

import LanguageSelector from '../components/shared/LanguageSelector'

import pt from '../assets/img/pt.svg'
import en from '../assets/img/gb.svg'
import de from '../assets/img/de.svg'

import Fire from '../firebase/Fire'
// import {getRepertoire, addTrack, updateTrack, deleteTrack} from '../firebase/repertoire'
// import addTrack from '../firebase/repertoire'
// import updateTrack from '../firebase/repertoire'
// import deleteTrack from '../firebase/repertoire'

import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class AdminRoute extends Component{
  state = {
    firebaseInitialized: false,
    homeText: '',
    tracks: [],
    isModalOpen: false,
    repertoire: [],
    members: [],
    currentTrack: {
      id: '',
      data: {
        name: '',
        lyrics: '',
        imgUrl: '',
        spotifyUrl: '',
        previewUrl: '',
      }
    },
    currentMember: {
      id: '',
      data: {
        name: '',
        imgUrl: '',
        text: '',
      }
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
    currentLanguage: ''
  }

  constructor() {
    super()
    this.rootRepertoire = 'dynamic_values/repertoire'
    this.rootMembers = 'dynamic_values/members'
  }

  componentDidMount() {
    Fire.isInitialized()
    .then(val => this.setState({firebaseInitialized: val}))
    .then(() => Fire.getDynamicData())
    .then(r => this.setState(r))
  }

  login = async () => {
    try {
      await Fire.login(this.state.Email, this.state.Password);
      this.props.history.replace('/admin')
    } catch(e) {
      console.log(e)
    }
  }

  handleSubmitHomeText = () => {
    Fire.addMainText(this.state.homeText)
    .then(r => alert('✅Success✅'))
    .catch(e => alert('❌Error❌'))
  }

  handleFormChange = (txt) => {
    this.setState({
      homeText: txt
    })
  }

  handleEditClick = (key, object) => {
    debugger

    this.setState({
      ...this.state,
      isModalOpen: true,
      [key]: {
        id: object.id,
        data: object.data
      }
    })
  }

  handleDataChange = (event, key) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState) => ({
      [key]: {
        id: this.state.currentTrack.id,
        data: {
          ...prevState[key].data,
          [name]: value
        }
      },
    }))
  }

  handleSetLanguage = (language) => {
    Fire.setLanguage(language)
    Fire.getDynamicData()
      .then(r => this.setState(r))
  }

  handleAddDocument = (path, data) => {
    if (this.state.currentTrack.id.length > 0) {
      Fire.updateDocument(path, data)
        .then(() =>  alert('✔️Success✔️'))
        .then(() => Fire.getDynamicData())
        .then(r => this.setState(r))
        .catch((e) => alert('❌Error❌'))
        .finally(() => this.handleModalOpen(false))
    }
    else {
      Fire.addToCollection(path, data)
        .then(() =>  alert('✔️Success✔️'))
        .then(() => Fire.getDynamicData())
        .then(r => this.setState(r))
        .catch((e) => alert('❌Error❌'))
        .finally(() => this.handleModalOpen(false))
    }
  }

  // handleSubmitMember = () => {
  //   if (this.state.currentMember.id.length > 0) {
  //     Fire.editMember(this.state.currentMember)
  //       .then(() =>  alert('✔️Success✔️'))
  //       .then(() => Fire.getDynamicData())
  //       .then(r => this.setState(r))
  //       .catch((e) => alert('❌Error❌'))
  //       .finally(() => this.handleModalOpen(false))
  //   }
  //   else {
  //     Fire.addMember(this.state.currentMember)
  //       .then(() =>  alert('✔️Success✔️'))
  //       .then(() => Fire.getDynamicData())
  //       .then(r => this.setState(r))
  //       .catch((e) => alert('❌Error❌'))
  //       .finally(() => this.handleModalOpen(false))
  //   }
  // }

  handleDeleteDocument = (path, trackId) => {
    Fire.deleteDocument(`${path}/${trackId}`)
      .then((e) => alert('✅Success✅'))
      .then(() => Fire.getDynamicData())
      .then(r => this.setState(r))
      .catch((e) => alert(e))
  }

  handleModalOpen = (val) => {
    if (!val)
    this.setState({currentTrack: {
      data: {
        name: '',
        lyrics: '',
        imgUrl: '',
        spotifyUrl: ''
      }
    }})

    this.setState({isModalOpen: val})
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

  render() {
    //waiting for firebase to initiate, otherwise it doesn't work
    if (this.state.firebaseInitialized === false)
    return <h1 style={{color: 'red'}}>LOADIIIINNNGGGGGGG</h1>

    if(!Fire.getCurrentUsername()) {
      // not logged in
      this.props.history.replace('/login')
      return null
    }

    const { match: { url } } = this.props

    console.log('estado', this.state)

    return(
      <>
        <AdminHeader/>
        <Route render={({location}) => (
            <Switch>
              <div className = "content-container flex-col">
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
                      handleChange = {(e) => this.handleDataChange(e, 'currentMember')}
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
              </div>
            </Switch>
        )} />
      </>
    )
  }
}

export default withRouter(AdminRoute)