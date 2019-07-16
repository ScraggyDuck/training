import React, { Component } from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';

import { connect } from 'react-redux';
import { deleteProductInCart, updateProductInCart } from '../actions';

class Cart extends Component {
  render() {
    var { cart } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-3">
            <h5>Có {cart.length} mặt hàng !</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table product-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Số Lượng</th>
                    <th>Tổng Cộng</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.showCartItem(cart)}
                  <CartResult cart={cart} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  showCartItem = cart => {
    var result = <tr><td>Không có sản phẩm nào!</td></tr>
    var { onDelete, onUpdate } = this.props;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem item={item} key={index} onDelete={onDelete} onUpdate={onUpdate}/>
      })
    }
    return result;
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  onDelete: product => dispatch(deleteProductInCart(product)),
  onUpdate: (product, quantity) => dispatch(updateProductInCart(product, quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);