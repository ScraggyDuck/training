import React, { Component } from "react";

import {Link} from 'react-router-dom';

import { Card, Button } from "react-bootstrap";
import "../styles/Product.css";

import { addToCompare, removeFromCompare, addToCart } from "../actions/index";
import { connect } from "react-redux";


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompapre: false
    };
  }
  onClick = () => {
    if (this.state.isCompapre === false)
      this.props.addToCompare(this.props.product);
    else this.props.removeFromCompare(this.props.product.id);
    this.setState({
      isCompapre: !this.state.isCompapre
    });
  };

  onAddToCart = product => {
    this.props.onAddToCart(product);
  }

  render() {
    const { product, match } = this.props;
    const { isCompapre } = this.state;
    return (
      <Card className="product">
        <div className="productImage">
          <Card.Img variant="top" src={product.image} />
          <Card.ImgOverlay
            className={isCompapre ? "overlay isCompare" : "overlay"}
          >
            <button onClick={this.onClick} className="btnProduct">
              {isCompapre ? "REMOVE" : "COMPARE"}
            </button>
          </Card.ImgOverlay>
        </div>
        <Card.Body>
          <div className="price float-right">${product.price}</div>
          <Card.Title>
            <Link to={`${match.url}/${product.name}`} product={product}>{product.name}</Link>
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
  addToCompare: product => dispatch(addToCompare(product)),
  removeFromCompare: id => dispatch(removeFromCompare(id)),
  onAddToCart: product => dispatch(addToCart(product))
});

export default connect(
  null,
  mapDispatchToProps
)(Product);
