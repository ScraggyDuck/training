import React, { Component } from 'react';
import './ProductPrice.css';

class ProductPrice extends Component {
    render() {
        return (
            <div>
                <div className=" rsidebar span_1_of_left">
                    <div className="of-left">
                        <h3 className="cate">Categories</h3>
                    </div>
                    <ul className="menu">
                        <li className="item1"><a href="#home">Men </a></li>
                        <li className="item2"><a href="#home">Women </a> </li>
                        <li className="item3"><a href="#home">Kids</a></li>
                        <li className="item4"><a href="#home">Accesories</a></li>
                        <li className="item4"><a href="#home">Shoes</a></li>
                    </ul>
                </div>
                <div className="product-middle">
                    <div className="fit-top">
                        <h6 className="shop-top">Lorem Ipsum</h6>
                        <a href="single.html" className="shop-now">SHOP NOW</a>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <div className="sellers">
                    <div className="of-left-in">
                        <h3 className="tag">Tags</h3>
                    </div>
                    <div className="tags">
                        <ul>
                            <li><a href="#home">design</a></li>
                            <li><a href="#home">fashion</a></li>
                            <li><a href="#home">lorem</a></li>
                            <li><a href="#home">dress</a></li>
                            <li><a href="#home">fashion</a></li>
                            <li><a href="#home">dress</a></li>
                            <li><a href="#home">design</a></li>
                            <li><a href="#home">dress</a></li>
                            <li><a href="#home">design</a></li>
                            <li><a href="#home">fashion</a></li>
                            <li><a href="#home">lorem</a></li>
                            <li><a href="#home">dress</a></li>
                            <div className="clearfix"> </div>
                        </ul>
                    </div>
                </div>
                <div className="product-bottom">
                    <div className="of-left-in">
                        <h3 className="best">Best Sellers</h3>
                    </div>
                    <div className="product-go">
                        <div className=" fashion-grid">
                            <a href="single.html"><img className="img-fluid " src="https://p.w3layouts.com/demos/new_store/web/images/p2.jpg" alt="" /></a>
                        </div>
                        <div className=" fashion-grid1">
                            <h6 className="best2"><a href="single.html">Lorem ipsum dolor sitamet consectetuer </a></h6>
                            <span className=" price-in1"> $40.00</span>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="product-go">
                        <div className=" fashion-grid">
                            <a href="single.html"><img className="img-fluid" src="https://p.w3layouts.com/demos/new_store/web/images/p1.jpg" alt="" /></a>
                        </div>
                        <div className="fashion-grid1">
                            <h6 className="best2"><a href="single.html">Lorem ipsum dolor sitamet consectetuer </a></h6>
                            <span className=" price-in1"> $40.00</span>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductPrice;