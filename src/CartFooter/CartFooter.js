import React from 'react';
import PropTypes from 'prop-types';

const CartFooter = ({copyright}) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">&copy; { copyright }</a>
  </nav>
)

CartFooter.propTypes = {
  copyright: PropTypes.string
}

export default CartFooter;