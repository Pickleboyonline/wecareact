import React, { Component } from 'react';
import './App.css';
import './Process.css';
import './Work.css'
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
          <h3>{"Our Approach".toUpperCase()}</h3>
          <h2>Here's how it works</h2>
          <div className="process-diagram">
            <div className="process-diagram-cards">
              <div></div>
              <h3>Step 1</h3>
              <p>
                Get Nazar and Imran on the project
              </p>
            </div>
            <div className="process-diagram-cards">
              <div></div>
              <h3>Step 2</h3>
              <p>
                Use child labor
              </p>
            </div>
            <div className="process-diagram-cards">
              <div></div>
              <h3>Step 3</h3>
              <p>
                Launch
              </p>
            </div>
          </div>
        </div>
        <div className="process work">
          <h3>{"Our work".toUpperCase()}</h3>
          <h2>See what we've made possible</h2>
        </div>

      </div>
    );
  }
}

export default App;
