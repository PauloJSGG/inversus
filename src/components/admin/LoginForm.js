import React from 'react'

const LoginForm = (props) => {
  const {login, emailValue, passwordValue, handleInputChange} = props
  return (
    <div className="login-form-container">
      {/* <form onSubmit={e => e.preventDefault() && false}> */}
      <div>
        <label className="login-form__label">
          Email
        </label>
        <input
            className="login-form__input"
            style={{color: 'black'}}
            value={emailValue}
            name="Email"
            onChange={handleInputChange}
          />
      </div>

      <div>
        <label className="login-form__label">
          Password
        </label>
        <input
            className="login-form__input"
            style={{color: 'black'}}
            value={passwordValue}
            name="Password"
            onChange={handleInputChange}
            type="password"
          />
      </div>
      <button type="submit" className="shared-button--second" onClick={login}>submit</button>
      {/* </form> */}
    </div>
  )
}

export default LoginForm