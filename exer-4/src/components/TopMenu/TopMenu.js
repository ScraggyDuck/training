import React, { Component } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Badge, Dropdown } from "react-bootstrap";
import './TopMenu.css';

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { onLogin } from '../../actions/index';

class TopMenu extends Component {
    showProfile = () => {
        var user = localStorage.getItem('user');
        var { login } = this.props;
        if (login) {
            return (
                <div className="user">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <i className="far fa-user"></i>
                        <span className="p-2">{user}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.onLogout}>Log out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            )
        }
        return <div className="row">
            <Link to="/login" className="nav-link">Login</Link>
            <Nav.Link href="#features">Register</Nav.Link>
        </div>
    }

    onLogout = () => {
        localStorage.removeItem('user');
        this.props.onLogin(false);
    }
    
    render() {
        return (
            <header className="header">
                <Navbar bg="dark" variant="dark" className="top-header">
                    <Container>
                        <Nav className="d-none d-md-block">
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Nav>
                        <Nav className="ml-auto">

                            {this.showProfile()}
                            <Link to="/cart">
                                <div className="cart-icon text-white btn btn-secondary ml-4" style={{
                                    backgroundColor: "transparent"
                                }}>
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className="p-2">Cart</span>
                                    <Badge variant="light">{this.showQuantity(this.props.cart)}</Badge>
                                </div>
                            </Link>
                        </Nav>
                    </Container>
                </Navbar>

                <Navbar bg="light" expand="lg" className="main-nav">
                    <Container>
                        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/products" className="nav-link">Products</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </header>

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
    cart: state.cart,
    login: state.login
});

const mapDispatchToProps = dispatch => ({
    onLogin: isLogin => dispatch(onLogin(isLogin))
})
export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);