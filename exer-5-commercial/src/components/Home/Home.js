import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import './Home.css';

class Home extends Component {
    onShowSubCategories = category => {
        var result = null;       
        var { categories } = this.props;
        categories = categories.filter(item => item.parent === category.id);
        result = categories.map(category => {    
            return (
                <li key={category.id} >
                    <Link to={category.url}>+ {category.title} </Link>
                </li>
            )
        })
        return result;
    }
    onShowCategories = (categories) => {
        var result = null;    
        result = categories.map(category => {    
            if(category.parent === null){
                return (
                    <li className="item1" key={category.id}>
                        <div className="d-flex title">
                            <Link 
                                to={category.url}
                                className="flex-grow-1 align-self-center"
                            >
                                {category.title}
                            </Link>
                            <i className="fas fa-plus p-3" data-toggle="collapse" href={`#item${category.id}`} role="button" aria-expanded="false" aria-controls="item1" />
                        </div>
                        <ul className="cute collapse" id={`item${category.id}`} >
                            {this.onShowSubCategories(category)}
                        </ul>
                    </li>
                )
            }
            return null;
        })
        return result;
    }
    render() {
        const { categories } = this.props;
        return (
            <div className="container mb-5 home">
                <div className="row">
                    <div className="col-md-4">
                        <div className=" top-nav rsidebar span_1_of_left">
                            <h4 className="cate">CATEGORIES</h4>
                            <ul className="menu">
                                {this.onShowCategories(categories)}
                                <ul className="kid-menu ">
                                    <li><a href="#kidmenu">Bags & Shoes</a></li>
                                    <li><a href="#kidmenu">Women's Clothing</a></li>
                                    <li><a href="#kidmenu">Man Fashion</a></li>
                                    <li><a href="#kidmenu">Toy & Kids & Bayby</a></li>
                                    <li><a href="#kidmenu">Computer & Office</a></li>
                                    <li><a href="#kidmenu">Sports & Travel</a></li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://loremflickr.com/g/1200/1000/dog"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://loremflickr.com/g/1200/1000/cat"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://loremflickr.com/g/1200/1000/all"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories
});

export default connect(mapStateToProps, null)(Home);