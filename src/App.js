import React from 'react';
import logo from './logo.svg';
import './assets/css/index.scss';
// import './vendor/css/index.css';

import MainRoute from './routes/MainRoute'
import AdminRoute from './routes/AdminRoute'
import Auth from './containers/AuthContainer'

import LoginContainer from './containers/LoginContainer'

import { Route, BrowserRouter, Switch } from 'react-router-dom'
// import { Redirect, Switch } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas)

function App() {

  return (
    <>
      <div className="global-container">
        <h1>WTF m8</h1>
        <BrowserRouter basename = {process.env.PUBLIC_URL}>
          {/* <Redirect from="/" exact to="/main" /> */}
          <Switch>
            <Route path='/admin' component={AdminRoute} />
            <Route path='/login' exact component={LoginContainer} />
            <Route path='/' component={MainRoute} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
