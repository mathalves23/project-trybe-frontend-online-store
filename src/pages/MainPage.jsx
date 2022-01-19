import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainPage extends Component {
  onButtonClick = () => {
    const { history } = this.props;
    history.push('/carrinhodecompras');
  }

  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <button
          onClick={ this.onButtonClick }
          type="button"
          data-testid="shopping-cart-button"
        >
          Carrinho de compras
        </button>
      </div>
    );
  }
}

export default MainPage;

MainPage.propTypes = {
  history: PropTypes.string.isRequired,
};
