import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, name, dataTestid, onClick } = this.props;
    return (
      <label htmlFor={ dataTestid }>
        {label}
        <button
          onClick={ onClick }
          type="button"
          data-testid={ dataTestid }
        >
          {name}
        </button>
      </label>
    );
  }
}

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
};
