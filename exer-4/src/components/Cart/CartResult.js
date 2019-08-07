import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';

class CartResult extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Col md={{ span: 8, offset: 8 }}>
                <strong>Tổng Tiền: {this.showTotalAmount(cart)}$</strong>
                <Button type="button" className="btn btn-secondary waves-effect waves-light ml-5">
                    Complete Purchase
                </Button>
            </Col>
        );
    }

    showTotalAmount = cart => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++)
                total += cart[i].product.price * cart[i].quantity
        }
        return total.toFixed(3);
    }
}

export default CartResult;