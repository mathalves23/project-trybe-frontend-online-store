import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras';
import MainPage from './pages/MainPage';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/carrinhodecompras" component={ CarrinhoDeCompras } />
          <Route exact path="/" component={ MainPage } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
