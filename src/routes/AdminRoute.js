import React, { useEffect, useState, Component } from 'react'
import AdminHeader from '../components/admin/AdminHeader'
import LoginForm from '../components/admin/LoginForm'
import Footer from '../components/shared/Footer'
import MainEdit from '../components/admin/MainEdit'
import RepertoireEdit from '../components/admin/RepertoireEdit'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'
import Fire from '../firebase/Fire'

import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class AdminRoute extends Component{
  state = {
    firebaseInitialized: false,
    mainText: "",
    tracks: [],
    isModalOpen: false,
    repertoire: [],
    currentTrack: {}
  }

  componentDidMount() {
    Fire.isInitialized()
      .then(val => {
        this.setState({firebaseInitialized: val})
        Fire.getAdminData().then(r => {
          this.setState(r)
        } )
      })
  }

  login = async () => {
    try {
      await Fire.login(this.state.Email, this.state.Password);
      this.props.history.replace('/admin')
    } catch(e) {
      console.log(e)
    }
  }

  getRepertoire = async() => Fire.getRepertoire()

  submitMain = () => {
    Fire.addMainText(this.state.mainText)
      .then(r => alert('Success'))
      .catch(e => alert('asdfasdf'))
  }

  handleFormChange = (txt) => {
    this.setState({
      mainText: txt
    })
  }


  handleTrackChange = (event) => {
    console.log(this.state.currentTrack)
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      currentTrack: {
        ...this.state.currentTrack,
        [name]: value
      }
    });

  }

  submitTrack = () => {
    Fire.addTrack(this.state.currentTrack)
  }

  //Repertoire edit
  handleRepertoireChange(txt, param) {
    this.setState({
      mainText: txt
    })
  }

  handleModalOpen = (val) => this.setState({isModalOpen: val})

  onInputChange = (num) => {
    this.setState({numberOfTracks: num})
  }
  //------------------------------------------


  render() {
    //waiting for firebase to initiate, otherwise it doesn't work
    if (this.state.firebaseInitialized === false)
      return <h1 style={{color: 'red'}}>LOADIIIINNNGGGGGGG</h1>

    console.log(Fire.getCurrentUsername())

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
          <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="fade">
            <Switch>
              <div className = "content-container">
                <Route
                  exact path = {`${url}/main`}
                  render = {
                    (props) =>
                    <MainEdit
                      submitMain = {this.submitMain}
                      handleFormChange = {this.handleFormChange}
                      formValue = {this.state.mainText}
                    />
                  }
                />
                <Route
                  exact path={`${url}/repertoire`}
                  render = {
                    (props) =>
                    <RepertoireEdit
                      handleTrackChange = {this.handleTrackChange}
                      submitTrack = {this.submitTrack}
                      handleModalOpen = {this.handleModalOpen}
                      isModalOpen = {this.state.isModalOpen}
                      repertoire = {this.state.repertoire}
                      currentTrack = {this.state.currentTrack}
                    />
                  }
                />
              </div>
              {/* <Route exact path='/contacts' component={Social}/> */}
              {/* <Route exact path='/' component={() => <Home text={this.state.mainText}></Home>}/> */}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        )} />
        <Footer/>
      </>
    )
  }
}

export default withRouter(AdminRoute)