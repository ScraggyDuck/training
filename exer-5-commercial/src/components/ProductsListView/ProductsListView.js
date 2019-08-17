import React, { Component } from 'react';
import './ProductsListView.css';

class ProductsListView extends Component {
    onShowRating = rating => {
        let result = [];
        for (let i = 0; i < rating; i++) {
            result.push(<li
                className="active"
                key={i}
            >
                <i className="fas fa-star"></i>
            </li>)
        }
        for (let i = rating; i < 5; i++) {
            result.push(<li
                key={i}
            >
                <i className="fas fa-star"></i>
            </li>)
        }
        return result;
    }


    onShowProducts = () => {
        let { products } = this.props;
        let result = null;
        result = products.map((product, index) => {
            return (
                <div key={index} className="c_product_item">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="c_product_img">
                                <img className="img-fluid" src={product.image} alt={product.name} />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="c_product_text">
                                <h3>{product.name}</h3>
                                <h5>${product.price}</h5>
                                <ul className="product_rating">
                                    {this.onShowRating(product.rating)}
                                </ul>
                                <h6>Available In <span>Stock</span></h6>
                                <p>
                                    {product.description}
                                </p>
                                <ul className="c_product_btn">
                                    <li className="p_icon"><a href="#products"><i className="fas fa-chart-pie"></i></a></li>
                                    <li><a className="add_cart_btn" href="#products">Add To Cart</a></li>
                                    <li className="p_icon"><a href="#products"><i className="far fa-heart"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            )
        })
        return result;
    }
    render() {
        return (
            <div className="c_product_grid_details">
                {this.onShowProducts()}
            </div >
        );

    }
}

export default ProductsListView;