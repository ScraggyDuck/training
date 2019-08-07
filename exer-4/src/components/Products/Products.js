import React, { Component } from "react";
import Product from "../Product/Product";
import ProductPrice from '../ProductPrice/ProductPrice';
import { Row, Col, Pagination } from "react-bootstrap";
import { connect } from "react-redux";

class Products extends Component {
  render() {
    let { products, match } = this.props;
    let elmProducts = products.map(product => (
      <Col key={product.id} md={4} className="mb-3">
        <Product product={product} match={match} />
      </Col>
    ));

    return (
      <div className="container mt-5">
        <div className="row mt-5 mb-5">
          <Col md={3}>
            <ProductPrice />
          </Col>
          <Col md={9}>
            <Row>{elmProducts}</Row>
          </Col>
        </div>
        <Row>
          <Col md={{ span: 6, offset: 6 }}>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Col>
        </Row>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});



export default connect(
  mapStateToProps,
  null
)(Products);
