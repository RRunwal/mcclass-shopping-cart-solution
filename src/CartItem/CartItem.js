import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({itemDetails}) => (
  <div className="list-group-item">
    <div className="row">
      <div className="col-md-8">{itemDetails.product.name}</div>
      <div className="col-md-2">${(itemDetails.product.priceInCents / 100).toFixed(2)}</div>
      <div className="col-md-2">{itemDetails.quantity}</div>
    </div>
  </div>
)

CartItem.propTypes = {
  itemDetails: PropTypes.object
}

export default CartItem;