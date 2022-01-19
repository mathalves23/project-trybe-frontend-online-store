import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';

// import * as api from './services/api';

class App extends Component {
  // componentDidMount() {
  //   // api.getCategories().then((res) => console.log(res));
  //   // api.getProductsFromCategoryAndQuery('MLB1403', 'manteiga')
  //   //   .then((res) => console.log(res));
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
