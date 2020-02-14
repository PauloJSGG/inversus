import React, { Component } from 'react'
import Fire from '../firebase/Fire'
import LoginForm from '../components/admin/LoginForm'
import Logo from '../assets/img/logo_black_small.png'

export default class LoginContainer extends Component {
  constructor() {
    super()

    this.fire = new Fire('')
    this.state = {logged: false}
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
      await this.fire.login(this.state.Email, this.state.Password);
      this.props.history.replace('/admin')
    } catch(e) {
      alert('❌Failed to login❌')
    }
  }

  render() {
    return (
      <>
        <header className="header-admin">
          <div className="header-container">
            <img className="header__logo" src={Logo} alt="header"/>
          </div>
        </header>
        <LoginForm
          login={this.login}
          emailValue={this.state.email}
          passwordValue={this.state.password}
          handleInputChange={this.handleInputChange}
          />
      </>
    )
  }
}