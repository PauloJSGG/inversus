import React, { useEffect, useState, Component } from 'react'
import AdminHeader from '../components/admin/AdminHeader'
import MainEdit from '../components/admin/MainEdit'
import RepertoireEdit from '../components/admin/RepertoireEdit'

import LanguageSelector from '../components/shared/LanguageSelector'

import pt from '../assets/img/pt.svg'
import en from '../assets/img/gb.svg'
import de from '../assets/img/de.svg'

import Fire from '../firebase/Fire'

import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class AdminRoute extends Component{
  state = {
    firebaseInitialized: false,
    homeText: '',
    tracks: [],
    isModalOpen: false,
    repertoire: [],
    currentTrack: {
      data: {
        name: '',
        lyrics: '',
        imgUrl: '',
        spotifyUrl: ''
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

  handleEditClick = (id) => {
    const track = this.state.repertoire.filter(item => item.id === id)[0]

    this.setState({
      ...this.state,
      isModalOpen: true,
      currentTrack: track.data
    })
  }

  handleTrackChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      currentTrack: {
        ...this.state.currentTrack.id,

        data: {
          ...this.state.currentTrack.data,
          [name]: value
        }
      }
    });
  }

  handleSetLanguage = (language) => {
    Fire.setLanguage(language)
    Fire.getDynamicData()
      .then(r => this.setState(r))
  }

  handleSubmitTrack = () => {
    Fire.addTrack(this.state.currentTrack)
      .then(() =>  alert('✔️Success✔️'))
      .then(() => Fire.getDynamicData())
      .then(r => this.setState(r))
      .catch((e) => alert('❌Error❌'))
      .finally(() => this.handleModalOpen(false))
  }

  handleRemoveTrack = (trackId) => {
    Fire.removeTrack(trackId)
      .then((e) => alert('✅Success✅'))
      .then(() => Fire.getDynamicData())
      .then(r => this.setState(r))
      .catch((e) => alert('❌Error❌'))
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
                      handleTrackChange = {this.handleTrackChange}
                      handleModalOpen = {this.handleModalOpen}
                      handleSubmitTrack = {this.handleSubmitTrack}
                      handleRemoveTrack = {this.handleRemoveTrack}

                      handleSetLanguage = {this.handleSetLanguage}
                      languageList = {this.state.languageList}
                      currentLanguage = {this.state.currentLanguage}

                      isModalOpen = {this.state.isModalOpen}
                      repertoire = {this.state.repertoire}
                      currentTrack = {this.state.currentTrack}
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