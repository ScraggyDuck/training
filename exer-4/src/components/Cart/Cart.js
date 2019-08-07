import React, { Component } from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';

import { Container, Row, Col, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { deleteProductInCart, updateProductInCart } from '../../actions';

class Cart extends Component {
  render() {
    var { cart } = this.props;
    return (
      <Container className="mb-5">
        <Row>
          <h5 className="m-3">Có {cart.length} mặt hàng !</h5>
        </Row>
        <Row>
          <Col md={12}>
            <Table responsive>
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
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <CartResult cart={cart} />
        </Row>
      </Container>
    );
  }

  showCartItem = cart => {
    var result = <tr><td>Không có sản phẩm nào!</td></tr>
    var { onDelete, onUpdate } = this.props;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem item={item} key={index} onDelete={onDelete} onUpdate={onUpdate} />
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