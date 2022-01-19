import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

class Routes extends Component {
  render() {
    return (
      <Route path="/" component={ MainPage } />
    );
  }
}

export default Routes;
