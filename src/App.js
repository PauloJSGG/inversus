import React from 'react';

import MainRoute from './routes/MainRoute'
import AdminRoute from './routes/AdminRoute'

import LoginRoute from './routes/LoginRoute'

import { Route, BrowserRouter, Switch } from 'react-router-dom'

import './assets/css/index.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faVolumeMute, faVolumeUp, faWindowClose, faSignOutAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faSpotify, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

console.log('111')

library.add(
  faPlus,
  faVolumeMute,
  faVolumeUp,
  faSignOutAlt,
  faSpotify,
  faWindowClose,
  faFacebook,
  faInstagram,
  faYoutube,
  faCalendarAlt
)

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
