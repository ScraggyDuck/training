import React, { Component } from 'react';
import './ProductsGridView.css';

class ProductsGridView extends Component {

    onShowProducts = () => {
        let { products } = this.props;
        let result = null;
        result = products.map((product, index) => {
            return (
                <div key={index} className="col-lg-4 col-sm-6">
                    <div  className="l_product_item">
                        <div className="l_p_img">
                            <img className="img-fluid" src={product.image} alt={product.name} />
                        </div>
                        <div className="l_p_text">
                            <ul className="c_product_btn">
                                <li className="p_icon"><a href="#products"><i className="fas fa-chart-pie"></i></a></li>
                                <li><a className="add_cart_btn" href="#products">Add To Cart</a></li>
                                <li className="p_icon"><a href="#products"><i className="far fa-heart"></i></a></li>
                            </ul>
                            <h4>{product.name}</h4>
                            <h5>${product.price}</h5>
                        </div>
                    </div>
                </div>
            )
        })
        return result;
    }
    render() {
        return (
            <div className="two_column_product">
                <div className="row">
                    {this.onShowProducts()}
                </div>
            </div>
        );
    }
}

export default ProductsGridView;