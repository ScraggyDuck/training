import React, { Component } from 'react';
import ProductHome from '../Product/ProductHome';
import CarouselCard from '../CarouselCard/CarouselCard';
import './Home.css';

import { Carousel } from 'react-bootstrap';

import { connect } from 'react-redux';

class Home extends Component {
    render() {
        let { products } = this.props;
        return (
            <div>
                {/* Header */}
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://loremflickr.com/g/1200/500/dog"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://loremflickr.com/g/1200/500/cat"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://loremflickr.com/g/1200/500/cat"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* Hot Products */}
                <div className="container">
                    <div className="mt-5 text-center title">
                        <h2>HOT Products</h2>
                    </div>
                    {this.onShowHotProducts(products)}
                </div >
                {/* Best Products */}
                <div className="container">
                    <div className="mt-5 text-center title">
                        <h2>Best Products</h2>
                    </div>
                    <div className="row">
                        {this.onShowBestProducts(products)}
                    </div>
                </div>
                {/* Content-bottom */}
                <div className="content-bottom">
                    <ul>
                        <li><a href="#home"><img className="img-fluid" src="https://p.w3layouts.com/demos/new_store/web/images/lo.png" alt="a" /></a></li>
                        <li><a href="#home"><img className="img-fluid" src="https://p.w3layouts.com/demos/new_store/web/images/lo1.png" alt="a" /></a></li>
                        <li><a href="#home"><img className="img-fluid" src="https://p.w3layouts.com/demos/new_store/web/images/lo2.png" alt="a" /></a></li>
                        <li><a href="#home"><img className="img-fluid" src="https://p.w3layouts.com/demos/new_store/web/images/lo3.png" alt="a" /></a></li>
                        <li><a href="#home"><img className="img-fluid" src="https://p.w3layouts.com/demos/new_store/web/images/lo4.png" alt="a" /></a></li>
                        <li><a href="#home"><img className="img-fluid" src="https://p.w3layouts.com/demos/new_store/web/images/lo5.png" alt="a" /></a></li>
                        <div className="clearfix"> </div>
                    </ul>
                </div>
            </div>
        );
    }

    onShowHotProducts = (products) => {
        let hotProducts = products.filter(product => product.hotproducts);
        return <CarouselCard products={hotProducts}  />;
    }

    onShowBestProducts = (products) => {
        let result = null;
        products.sort((a, b) => (b.quantitysold - a.quantitysold));
        products = products.slice(0, 6);
        result = products.map((product, index) => (
            <div key={index} className="col-md-4">
                <ProductHome product={product}/>
            </div>
        )
        );
        return result;
    }
}

const mapStateToProps = state => ({
    products: state.products
});

export default connect(mapStateToProps, null)(Home);