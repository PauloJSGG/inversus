import React, { Component } from 'react'
import { Route } from "react-router-dom";
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom'
import Fire from '../firebase/Fire';

export class Auth extends Component {
  state = {
    firebaseInitialized: null,
    currentUsername: null
  }

  currentUsername = () => Fire.getCurrentUsername()

  // componentDidMount() {
  //   Fire.isInitialized()
  //   .then(val => {
  //     debugger
  //     this.setState({
  //       firebaseInitialized: val,
  //       currentUsername: Fire.getCurrentUsername()
  //     })
  //   })
  // }

  render() {
    const {component: Component, ...rest} = this.props;

    if(!Fire.getCurrentUsername()) {
      debugger
      // not logged in
      alert('Please login first')
      this.props.history.replace('/login')
      return null
    }

    return(<Component {...this.props}/>)

    // return(
    //   <Route {...rest} render={(props) => {
    //     return this.currentUsername == null ?
    //       <Redirect to={`/login`} /> //user is authenticathed
    //       :
    //       <Component {...props}/> //user to authenticate
    //   }} />
    // );
  }
}

export default Auth
