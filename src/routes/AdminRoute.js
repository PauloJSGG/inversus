import React, { Component } from 'react'
import AdminHeader from '../components/admin/AdminHeader'
import MainEdit from '../components/admin/MainEdit'
import RepertoireEdit from '../components/admin/RepertoireEdit'
import MembersEdit from '../components/admin/MembersEdit'

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
    .then(val => this.handleSetLanguage('pt'))
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
    Fire.addOrEditDocument('dynamic_values', {homeText: this.state.homeText})
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
    Fire.setLanguage(language)
    Fire.getDynamicData()
      .then(r => this.setState(r))
  }

  handleAddDocument = (path, data) => {
    debugger
    if (data.id) {
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

  handleDeleteDocument = (path, trackId) => {
    Fire.deleteDocument(`${path}/${trackId}`)
      .then((e) => alert('✅Success✅'))
      .then(() => Fire.getDynamicData())
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

  handleModalOpen = val => {
    if (!val)
      this.cleanState()

    this.setState({isModalOpen: val})
  }

  logout = () => {
    Fire.logout()
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

  render() {
    //waiting for firebase to initiate, otherwise it doesn't work
    if (this.state.firebaseInitialized === false)
      return null

    if(!Fire.getCurrentUsername()) {
      // not logged in
      this.props.history.replace('/login')
      return null
    }

    const { match: { url } } = this.props

    console.log('estado', this.state)

    return(
      <>
        <AdminHeader logout={this.logout}/>
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