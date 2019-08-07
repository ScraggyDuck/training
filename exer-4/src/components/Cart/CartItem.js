import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        var { item } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt={item.product.image} className="z-depth-0" width="100px" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                    <h6>{item.product.description}</h6>
                </td>
                <td>{item.product.price}$</td>
                <td >
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => this.onUpdateCartItem(item.product, item.quantity - 1)}
                        >
                            -
                        </button>
                        <div type="text" className="btn btn-light">{item.quantity}</div>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => this.onUpdateCartItem(item.product, item.quantity + 1)}
                        >
                            +
                        </button>
                    </div>
                </td>
                <td>{this.showTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => this.onDeleteProductInCart(item.product)}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        );
    }

    showTotal = (price, quantity) => {
        return (price * quantity).toFixed(3);
    }

    onDeleteProductInCart = product => {
        this.props.onDelete(product);
    }

    onUpdateCartItem = (product, quantity) => {
        if (quantity > 0) {
            this.props.onUpdate(product, quantity);
        }
    }
}

export default CartItem;