import React from 'react'

const LoginForm = (props) => {
  const {login, emailValue, passwordValue, handleInputChange} = props
  return (
    <div>
      <form onSubmit={e => e.preventDefault() && false}>

        <label>
          Email
          <input
            style={{color: 'black'}}
            value={emailValue}
            name="Email"
            onChange={handleInputChange}
          />
        </label>

        <label>
          Password
          <input
            style={{color: 'black'}}
            value={passwordValue}
            name="Password"
            onChange={handleInputChange}
            type="password"
          />
        </label>

        <button type="submit" onClick={login}>submit</button>
      </form>
    </div>
  )
}

export default LoginForm
