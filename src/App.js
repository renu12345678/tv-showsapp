import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Routes from './Components/Routes/Routes'
import './App.css';

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    )
  }
}
