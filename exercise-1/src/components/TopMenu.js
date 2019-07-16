import React, { Component } from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';

import { Link } from "react-router-dom";
import { connect } from "react-redux";

class TopMenu extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" >
                <Navbar.Brand >Logo</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/products" className="nav-link">Products</Link>
                </Nav>
                <Link to="/cart">
                    <div className="cart-icon text-white btn btn-secondary" style={{
                        backgroundColor: "transparent"
                    }}>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="p-2">Cart</span>
                        <Badge variant="light">{this.showQuantity(this.props.cart)}</Badge>
                    </div>
                </Link>
            </Navbar>
        );
    }

    showQuantity = cart => {
        var result = 0;
        for (var i = 0; i < cart.length; i++) {
            result += cart[i].quantity;
        }
        return result;
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, null)(TopMenu);