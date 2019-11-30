import React, { Component } from 'react'
import Fire from '../firebase/Fire'
import LoginForm from '../components/admin/LoginForm'
import Logo from '../assets/img/logo_black_small.png'

export default class LoginContainer extends Component {
  state = {
    logged: false
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  login = async () => {
    try {
      await Fire.login(this.state.Email, this.state.Password);
      this.props.history.replace('/admin')
    } catch(e) {
      console.log(e)
    }
  }

  render() {
    return (
      <>
        <header className='fixed'>
          <div className='header__logo'>
            <img src={Logo}></img>
          </div>
        </header>
        <div className="login-container">
          <LoginForm
            login={this.login}
            emailValue={this.state.email}
            passwordValue={this.state.password}
            handleInputChange={this.handleInputChange}
          />
        </div>
      </>
    )
  }
}