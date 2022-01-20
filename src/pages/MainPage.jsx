import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Button from '../components/Button';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      searchProduct: '',
      selectCategory: '',
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
      const categoriesID = await getCategories();
      this.setState({
        categories: categoriesID });
    } catch (error) {
      console.log(error);
    }
  }

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  onSubmitClick = (e) => {
    e.preventDefault();
    const { searchProduct } = this.state;
    getProductsFromCategoryAndQuery(null, searchProduct).then(({ results }) => (
      this.setState({ products: results })
    ));
  }

  selectCategory = async ({ target: { innerHTML } }) => {
    const { categories } = this.state;
    const selectCategory = categories.find(({ name }) => name === innerHTML).id;
    const productsList = await getProductsFromCategoryAndQuery(selectCategory, null)
      .then((response) => response.results);
    this.setState({ products: productsList });
  }

  render() {
    const { categories, products, searchProduct, selectCategory } = this.state;
    console.log(categories);
    return (
      <div>
        <Button
          onClick={ this.onButtonClick }
          dataTestid="shopping-cart-button"
          name="Carrinho de compras"
        />
        <br />
        {/* {só pra ficar visivel, sem css ta muito feio kkk} */}
        <br />
        <br />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <form>
          <label htmlFor="searchProduct">
            <input
              data-testid="query-input"
              type="search"
              id="searchProduct"
              name="searchProduct"
              value={ searchProduct }
              onChange={ this.handleInputChange }
            />
          </label>
          <button
            data-testid="query-button"
            type="submit"
            onClick={ this.onSubmitClick }
          >
            Pesquisar
          </button>
        </form>
        <br />
        {/* {só pra ficar visivel, sem css ta muito feio kkk} */}
        <br />
        <br />
        <div>
          {categories.map((category) => (
            <Button
              key={ category.id }
              onClick={ this.selectCategory }
              name={ category.name }
              value={ selectCategory }
              dataTestid="category"
            />
          ))}
        </div>
        <div>
          {products.map((product) => (
            <div key={ product.id } data-testid="product">
              <img src={ product.thumbnail } alt={ product.title } />
              <h3>{ product.title }</h3>
              <h2>{ `R$ ${product.price}` }</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;

MainPage.propTypes = {
  history: PropTypes.string.isRequired,
};
