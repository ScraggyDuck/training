import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Product.css";

class ProductHome extends Component {
    render() {
        let { product } = this.props;
        return (
            <Card className="product m-3">
                <div className="productImage">
                    <Card.Img variant="top" src={product.image} />
                    <Card.ImgOverlay
                        className="overlay"
                    >
                        <Link to={`/products/${product.name}`}>
                            <button className="btnProduct">
                                See Details
                            </button>
                        </Link>
                    </Card.ImgOverlay>
                </div>
                <Card.Body>
                    <Card.Text className="text-center">{product.name}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ProductHome;