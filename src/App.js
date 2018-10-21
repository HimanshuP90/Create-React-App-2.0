import React, { Component } from 'react';
import logo, {ReactComponent as ReactLogo } from './logo.svg';
import './App.scss';
import Link from "./Link/Link";

const Content = props => (
  <>
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    <Link
      mode="error"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
    Learn React
    </Link>
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
