import React, { Component } from 'react';
import logo from './logo.svg';
// import * as api from './services/api';

import './App.css';

class App extends Component {
  componentDidMount() {
    // api.getCategories().then((res) => console.log(res));
    // api.getProductsFromCategoryAndQuery('MLB1403', 'manteiga').then((res) => console.log(res));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>Edit src/App.js and save to reload.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
