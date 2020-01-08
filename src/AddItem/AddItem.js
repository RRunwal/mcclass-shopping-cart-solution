import React from 'react';
import PropTypes from 'prop-types';

let newProductId = 4;

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      productId: null
    }
  }

  setQuantity = (e) => {
    this.setState({
      quantity: Number(e.target.value)
    })
  }

  setProductId = (e) => {
    this.setState({
      productId: e.target.value
    })
  }

  handleAddToCart = (e) => {
    e.preventDefault();
    if(this.state.productId === -1 || this.state.quantity < 1) return;

    let productToAdd = this.props.products.filter((product) => product.id === Number(this.state.productId))[0]

    const itemToAdd = {
      id: newProductId++,
      product: productToAdd,
      quantity: this.state.quantity
    }
    
    this.props.handleSubmit(itemToAdd);
  }

  render() {
    return (
      <form onSubmit={this.handleAddToCart}>
        <label>
          Quantity
          <input onChange={this.setQuantity} type="text"></input>
        </label>
        <label>
          Product
          <select onChange={this.setProductId}>
            <option value="-1" > -- Select -- </option>
            {
              this.props.products.map((product) => (<option key={product.id} value={product.id}>{product.name}</option>)) 
            }
          </select>
        </label>
        <input type="submit" />
      </form>
    )
  }
}

AddItem.propTypes = {
  products: PropTypes.array,
  handleSubmit: PropTypes.func
}

export default AddItem;