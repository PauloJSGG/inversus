import React from 'react'

const LoginForm = (props) => {
  const {login, emailValue, passwordValue, handleInputChange} = props
  return (
    <div className="content-container">
      <div className="login">
        {/* <div className="login-container"> */}
          <div class="login__row">
            <label className="login__label">
              Email
            </label>
            <input
                className="login__input"
                style={{color: 'black'}}
                value={emailValue}
                name="Email"
                onChange={handleInputChange}
              />
          </div>

          <div className="login__row">
            <label className="login__label">
              Password
            </label>
            <input
                className="login__input"
                style={{color: 'black'}}
                value={passwordValue}
                name="Password"
                onChange={handleInputChange}
                type="password"
              />
          </div>
          <button type="submit" className="login__button" onClick={login}>submit</button>
        {/* </div> */}
      </div>
    </div>
  )
}

export default LoginForm
