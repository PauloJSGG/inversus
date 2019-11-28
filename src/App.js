import React from 'react';
import logo from './logo.svg';
import './assets/css/index.scss';
import './vendor/css/index.css';

import MainRoute from './routes/MainRoute'
import AdminRoute from './routes/AdminRoute'
import Auth from './containers/AuthContainer'

import LoginContainer from './containers/LoginContainer'

import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <div className="global-container">
      <Router>
        <Route path='/' exact component={MainRoute} />
        <Route path='/login' exact component={LoginContainer} />
        <Route path='/admin' component={AdminRoute} />
      </Router>
    </div>
  );
}

export default App;
