import React, { Component } from 'react';
import logo from '../images/headgehog.jpg';

class HeaderApp extends Component {
  render() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Fruits!!!
            </p>
            <hr/>
            
        </header>
    );
  }
}

export default HeaderApp;
