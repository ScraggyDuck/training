import React, { Component } from "react";

import { Link } from 'react-router-dom';

import { Card, Button } from "react-bootstrap";
import "./Product.css";

import { addToCart } from "../../actions/index";
import { connect } from "react-redux";

class Product extends Component {

  onAddToCart = product => {
    this.props.onAddToCart(product);
  }

  render() {
    const { product, match } = this.props;
    return (
      <Card className="product">
        <div className="productImage">
          <Card.Img variant="top" src={product.image} />
          <Card.ImgOverlay
            className="overlay"
          >
            <Link to={`${match.url}/${product.name}`} >
              <button className="btnProduct">
                See Details
              </button>
            </Link>
          </Card.ImgOverlay>
        </div>
        <Card.Body>
          <div className="price float-right">${product.price}</div>
          <Card.Title>
            <Link to={`${match.url}/${product.name}`} >{product.name}</Link>
          </Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button
            variant="primary"
            className="float-right"
            onClick={() => this.onAddToCart(product)}
          >
            <i className="fas fa-shopping-cart"></i>
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddToCart: product => dispatch(addToCart(product))
});

export default connect(
  null,
  mapDispatchToProps
)(Product);
