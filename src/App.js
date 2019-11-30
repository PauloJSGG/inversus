import React from 'react';
import logo from './logo.svg';
import './assets/css/index.scss';
import './vendor/css/index.css';

import MainRoute from './routes/MainRoute'
import AdminRoute from './routes/AdminRoute'
import Auth from './containers/AuthContainer'

import LoginContainer from './containers/LoginContainer'


import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

// import '@fortawesome/fontawesome'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-brands-svg-icons'

// fontawesome.library.add(regular)
// fontawesome.library.add(solid)
// fontawesome.library.add(brands)

function App() {

  return (
    <div className="global-container">
      <Router>
        {/* <Redirect from="/" exact to="/main" /> */}
        <Route path='/admin' component={AdminRoute} />
        <Route path='/login' exact component={LoginContainer} />
        <Route path='/main' component={MainRoute} />
      </Router>
    </div>
  );
}

export default App;
