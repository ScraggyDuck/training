import React, { Component } from "react";
import './ProductDetail.css';
import ProductPrice from '../ProductPrice/ProductPrice';
import ProductHome from '../Product/ProductHome';

import { connect } from "react-redux";
import { addToCart } from "../../actions/index";
import { Col, Row } from 'react-bootstrap';
import { find } from 'lodash';

class ProductDetail extends Component {
  onAddToCart = product => {
    this.props.onAddToCart(product);
  }

  render() {
    let { match, products } = this.props;
    let product = find(products, (product) => (product.name === match.params.name));
    return (
      <div className="container mt-5 mb-5">
        <Row>
          <Col md={3}>
            <ProductPrice />
          </Col>
          <Col md={9}>
            <div className="card card-detail">
              <div className="container-fliud">
                <div className="wrapper row">
                  <div className="col-md-6">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="details col-md-6">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <h4 className="price">Current price: <span>${product.price}</span></h4>
                    <h5 className="colors">colors:
                  {product.colors.map((color, index) => (
                      <span
                        key={index + 'abc'}
                        className="color"
                        style={{
                          backgroundColor: `${color}`
                        }}
                      />
                    ))}
                    </h5>
                    <div className="action">
                      <button onClick={() => this.onAddToCart(product)} className="btn btn-dark" type="button">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="mt-5 ml-3">Có thể bạn quan tâm!</h2>
            <Row>
              {this.onShowProducts(products)}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }

  onShowProducts = products => {
    var result = null;
    var random = Math.floor(Math.random() *(products.length - 4));
    products = products.slice(random, 3 + random);
    result = products.map((product, index) => 
        (<Col key={index} md={4}>
          <ProductHome product={product} />
        </Col>)
    )
    return result;
  }
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  onAddToCart: product => dispatch(addToCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
