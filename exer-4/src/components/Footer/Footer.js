import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer-top-at row">
                        <div className="col-md-4 amet-sed">
                            <h4>MORE INFO</h4>
                            <ul className="nav-bottom">
                                <li><a href="#home">How to order</a></li>
                                <li><a href="#home">FAQ</a></li>
                                <li><a href="#home">Location</a></li>
                                <li><a href="#home">Shipping</a></li>
                                <li><a href="#home">Membership</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 amet-sed ">
                            <h4>CONTACT US</h4>
                            <p>
                                Contrary to popular belief</p>
                            <p>The standard chunk</p>
                            <p>office:  +12 34 995 0792</p>
                            <ul className="social">
                                <li><a href="#home"><i> </i></a></li>
                                <li><a href="#home"><i className="twitter"> </i></a></li>
                                <li><a href="#home"><i className="rss"> </i></a></li>
                                <li><a href="#home"><i className="gmail"> </i></a></li>

                            </ul>
                        </div>
                        <div className="col-md-4 amet-sed">
                            <h4>Newsletter</h4>
                            <p>Sign Up to get all news updateand promo</p>
                            <form>
                                <input type="text" />
                                <input type="submit" value="sign up" />
                            </form>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="footer-class">
                    <p >© 2019 Design by Duck</p>
                </div>
            </div>
        );
    }
}

export default Footer;