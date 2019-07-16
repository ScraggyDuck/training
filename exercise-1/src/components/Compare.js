import React, { Component } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import "../styles/Compare.css";

class Compare extends Component {
  render() {
    const { compare} = this.props;
    const elmCompare = compare.map(product => {
      return (
        <Col key={product.id}>
          <ListGroup variant="flush" >
            <ListGroup.Item>{product.name}</ListGroup.Item>
            <ListGroup.Item>${product.price}</ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-center">
              {" "}
              {product.colors.map((color, index) => (
                <div
                  key={index + 'abc'}
                  className="productColor"
                  style={{
                    backgroundColor: `${color}`
                  }}
                />
              ))}
            </ListGroup.Item>
            <ListGroup.Item
              className={product.condition === "Fresh" ? "fresh" : "frozen"}
            >
              {product.condition}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      );
    });

    return (
      <Row className="compare">
        <Col>
          <ListGroup className="listHead" variant="flush">
            <ListGroup.Item>&nbsp;</ListGroup.Item>
            <ListGroup.Item>Price</ListGroup.Item>
            <ListGroup.Item>Colors</ListGroup.Item>
            <ListGroup.Item>Condition</ListGroup.Item>
          </ListGroup>
        </Col>
        {elmCompare}
      </Row>
    );
  }
}

export default Compare;
