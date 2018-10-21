import React, { Component } from 'react';
import logo, {ReactComponent as ReactLogo } from './logo.svg';
import './App.scss';

const Content = props => (
  <>
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    Learn React
    </a>
  </>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ReactLogo className="App-logo" />
          <Content />
        </header>
      </div>
    );
  }
}

export default App;
