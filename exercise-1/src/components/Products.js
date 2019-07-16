import React, { Component } from "react";

import Product from "./Product";
import Compare from "./Compare";

import { Row, Col } from "react-bootstrap";

import { connect } from "react-redux";

class Products extends Component {
  render() {
    let { products, compare, match } = this.props;
    let elmProducts = products.map(product => (
      <Col key={product.id} md={3}>
        <Product product={product} match={match} />
      </Col>
    ));

    return (
      <div className="container mt-5">
        <div className="row mt-5 mb-5">
          <Row>{elmProducts}</Row>;
        </div>
        {compare.length > 0 && <Compare compare={compare} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  compare: state.compare
});



export default connect(
  mapStateToProps,
  null
)(Products);
