import React, { Component } from 'react';
import './App.css';
import './Process.css';
import logo from './assets/logo.svg';
import WhiteButtom from './components/WhiteButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          // home
        }
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
          {
            // nav bar
          }
          <div className="homeNavbar">
            <div>
              <img src={logo} alt="logo" />
            </div>
          </div>
          {
            // Blue jumbotron
          }
          <div className="blueJumbotron">
            <div>
              <h1>Uniting the common good in the world.</h1>
              <WhiteButtom text="See how" />
            </div>
          </div>
          {
            // background image
          }
          <div className="backgroundImage" />


        </div>
        {
          // Process
        }
        <div className="process">
          <h3>Our Approach</h3>
          <h2>Here's how it works</h2>

        </div>
      </div>
    );
  }
}

export default App;
