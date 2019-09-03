import React from 'react';
import logo from './logo.svg';
import './assets/css/index.scss';
import './vendor/css/index.css';

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Social from './components/social/Social'
import Main from './components/Main'
import Admin from './components/admin'

import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="global-container">
      <Router>
        <Route path='/' component={Main} />
        <Route exact path='/admin' component={Admin} />
      </Router>
    </div>
  );
}

export default App;
