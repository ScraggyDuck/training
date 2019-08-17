import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './TopMenu.css';

class TopMenu extends Component {
    handleScroll = () => {
        const nav = document.querySelector('.navbar');
        const navTop = nav.offsetTop;
        if (window.scrollY > navTop) {
            nav.classList.add('nav-scroll');
        } else {
            nav.classList.remove('nav-scroll');
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <Navbar expand="lg" fixed="top" >
                <div className="container">
                    <Navbar.Brand href="#home">
                        <h2>ShopOnline</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                            <Nav.Link href="#shop">Shop</Nav.Link>
                            <Nav.Link href="#pages">Pages</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}
export default TopMenu;