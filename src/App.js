import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Navbar from './components/Navbar';
import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact';
import Attractions from './pages/Attractions'


import './styles/App.css';
import './styles/Home.css';

export default class App extends Component {
    render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/Attractions' component={Attractions} />
        </Router>
      </div>
    );
  }
  }