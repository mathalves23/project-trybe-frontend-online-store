import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import Button from '../components/Button';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  onButtonClick = () => {
    const { history } = this.props;
    history.push('/carrinhodecompras');
  }

fetchCategories = async () => {
  try {
    const { match: { params: { id } } } = this.props;
    const categoriesID = await getCategories(id);
    this.setState({
      categories: categoriesID });
  } catch (error) {
    console.log(error);
  }
}

render() {
  const { categories } = this.state;
  console.log(categories);
  return (
    <div>
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
      <Button
        onClick={ this.onButtonClick }
        dataTestid="shopping-cart-button"
        name="Carrinho de compras"
      />
      <br />
      {/* {só pra ficar visivel, sem css ta muito feio kkk} */}
      <br />
      <br />
      <div>
        {categories.map((category) => (
          <Button key={ category.id } name={ category.name } dataTestid="category" />
        ))}
      </div>
    </div>
  );
}
}

export default MainPage;

MainPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.string.isRequired,
};
