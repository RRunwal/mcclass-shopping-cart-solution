import React from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem/CartItem'


const CartItems = ({items}) => (
  <div className="container">
    <h1>Items</h1>
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">Name</div>
        <div className="col-md-2">Price</div>
        <div className="col-md-2">Quantity</div>
      </div>
    </div>
    {
      items.map((item) => (<CartItem key={item.id} itemDetails={item} />))
    }
    <div>Total Price: ${ 
      items.reduce((acc, currentItem) => {
        const totalPriceOfItems = currentItem.product.priceInCents * currentItem.quantity
        const totalPriceOfItemsInDollars = totalPriceOfItems / 100;
        return acc + totalPriceOfItemsInDollars
      }, 0).toFixed(2)
      }</div>
  </div>
)

CartItems.propTypes = {
  items: PropTypes.array
}

export default CartItems;