import React, { Component } from "react";
import '../styles/ProductDetail.css';

import { connect } from "react-redux";
import { addToCart } from "../actions/index";

import { find } from 'lodash';

class ProductDetail extends Component {
  onAddToCart = product => {
    this.props.onAddToCart(product);
  }

  render() {
    let { match, products } = this.props;
    let product = find(products, (product) => (product.name === match.params.name));
    return (
      <div className="container">
        <div className="card card-detail">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="col-md-6">
                <img src={product.image} alt={product.name}/>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  compare: state.compare
});

const mapDispatchToProps = dispatch => ({
  onAddToCart: product => dispatch(addToCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
