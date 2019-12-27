import React from 'react';
// import logo from './logo.svg';
import './assets/css/index.scss';
// import './vendor/css/index.css';

import MainRoute from './routes/MainRoute'
import AdminRoute from './routes/AdminRoute'
// import Auth from './containers/AuthContainer'

import LoginRoute from './routes/LoginRoute'

import { Route, BrowserRouter, Switch } from 'react-router-dom'
// import { Redirect, Switch } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(faPlus, faVolumeMute, faVolumeUp)

function App() {

  return (
    <>
      <div className="global-container">
        <BrowserRouter>
          <Switch>
            <Route path='/admin' component={AdminRoute} />
            <Route path='/login' exact component={LoginRoute} />
            <Route path='/' component={MainRoute} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
