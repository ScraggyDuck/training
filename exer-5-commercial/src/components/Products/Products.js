import React, { Component } from 'react';
import './Products.css';
import ProductsListView from '../ProductsListView/ProductsListView';
import ProductsGridView from '../ProductsGridView/ProductsGridView';

import { find, findIndex } from 'lodash';

import { connect } from 'react-redux';


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: 'grid',
            products: [],
            sort: {
                by: 'popularity',
            },
            filter: {
                price: {
                    low: '0',
                    high: '100000000'
                },
                rating: 5,
                brand: "",
                colors: [
                    {
                        value: '#475984',
                        isSelected: false
                    },
                    {
                        value: '#8A2454',
                        isSelected: false
                    },
                    {
                        value: '#BF6989',
                        isSelected: false
                    },
                    {
                        value: '#9A54D8',
                        isSelected: false
                    },
                    {
                        value: '#675F52',
                        isSelected: false
                    },
                    {
                        value: '#050505',
                        isSelected: false
                    },
                    {
                        value: '#D5B47B',
                        isSelected: false
                    }

                ]
            }
        }
    }
    // Data processing and data display
    componentDidMount() {
        const { categories, match, products } = this.props;
        this.getProducts(categories, match, products);
    }

    getProducts = (categories, match, products) => {
        let category = find(categories, category => category.url === match.url);
        if (category.parent !== null) {
            products = products.filter(product => product.categoryId === category.id);
        }
        else {
            categories = categories.filter(item => item.parent === category.id);
            products = categories.reduce((cur, next) => {
                cur = [...cur, ...products.filter(product => product.categoryId === next.id)]
                return cur;
            }, []);
        }
        this.setState({
            products: products
        })
    }

    onShowColorFilter = (colors) => {
        let result = null;
        result = colors.map((color, index) => {
            return <li
                key={index}
                className={color.isSelected ? "active" : ""}
                onClick={() => this.onClickColorFilter(color)}
            >
                <span style={{ backgroundColor: color.value }} />
            </li>
        })
        return result;
    }

    onShowRatingFilter = rating => {
        let result = [];
        for (let i = 0; i < rating; i++) {
            result.push(<li
                className="active"
                onClick={() => this.onClickRatingFilter(i + 1)}
                key={i}
            >
                <i className="fas fa-star rating-item"></i>
            </li>)
        }
        for (let i = rating; i < 5; i++) {
            result.push(<li
                onClick={() => this.onClickRatingFilter(i + 1)}
                key={i}
            >
                <i className="fas fa-star rating-item"></i>
            </li>)
        }
        return result;
    }

    onShowBrandFilter = () => {
        let result = null;
        const { categories, match } = this.props;
        const { brand } = this.state.filter;
        let category = find(categories, category => category.url === match.url);
        result = category.attributes.brands.map((item, index) => {
            return <li
                className={item === brand ? "active" : ""}
                key={index}
                onClick={() => this.onClickBrandFilter(item)}
            >
                <span>{item}</span>
            </li>
        })
        return result;
    }

    onShowOthersFilter = () => {
        let result = null;
        const { categories, match } = this.props;
        const { ram, size } = this.state.filter;
        let category = find(categories, category => category.url === match.url);
        // Size
        if (category.attributes.size) {
            result = category.attributes.size.map((item, index) => {
                return <li
                    className={item === size ? "active" : ""}
                    key={index}
                    onClick={() => this.onClickOtherFilter(item, 'size')}
                >
                    <span>{item}</span>
                </li>
            })
            return (
                <div className="aside">
                    <h3 className="aside-title">Filter by Size</h3>
                    <ul className="list-links">
                        {result}
                    </ul>
                </div>
            );
        }
        // Ram
        if (category.attributes.ram) {
            result = category.attributes.ram.map((item, index) => {
                return <li
                    className={item === ram ? "active" : ""}
                    key={index}
                    onClick={() => this.onClickOtherFilter(item, 'ram')}
                >
                    <span>{item}</span>
                </li>
            })
            return (
                <div className="aside">
                    <h3 className="aside-title">Filter by Ram</h3>
                    <ul className="list-links">
                        {result}
                    </ul>
                </div>
            );
        }
        return result;
    }

    onShowProducts = (products) => {
        const { layout } = this.state;
        if (products.length < 1) {
            return (<div className="container mt-5 text-center">
                <h1>Search No Result</h1>
                <p>We're sorry. We cannot find any matches for your search term.</p>
                <i className="fas fa-search  fa-5x "></i>
            </div>)
        }
        if (layout === 'grid') {
            return <ProductsGridView products={products} />;
        }
        return <ProductsListView products={products} />
    }

    onChangeLayout = layout => {
        this.setState({
            layout: layout
        });
        return false;
    }

    // Sort
    onChangeSortBy = (e) => {
        this.setState({
            sort: {
                by: e.target.value
            }
        })
    }

    onSort = (products, sort) => {
        if (sort.by === "popularity") {
            products.sort((a, b) => {
                return (a.rating - b.rating);
            });
        }
        if (sort.by === "price1") {
            products.sort((a, b) => {
                return (a.price - b.price);
            });
        }

        if (sort.by === "price2") {
            products.sort((a, b) => {
                return (b.price - a.price);
            });
        }
        return products;
    }

    // Filter

    onFilter = (products, filter) => {
        products = this.onFilterPrice(products, filter);
        products = this.onFilterColor(products, filter);
        products = this.onFilterBrand(products, filter);
        products = this.onFilterRating(products, filter);
        products = this.onFilterOther(products, filter);
        return products;
    }

    onChangePriceFilter = (e) => {
        const { filter } = this.state
        let target = e.target;
        let name = target.name;
        filter.price = { ...filter.price, [name]: target.value }
        this.setState({
            filter: {
                ...filter
            }
        })
    }
    onFilterPrice = (products, filter) => {
        const { price } = filter;
        if (price.low && price.high) {
            products = products.filter(product => product.price >= parseFloat(price.low) && product.price <= parseFloat(price.high));
        }
        return products;
    }

    onClickColorFilter = (color) => {
        const { filter } = this.state;
        let index = findIndex(filter.colors, item => color.value === item.value);
        filter.colors[index] = {
            ...filter.colors[index],
            isSelected: !filter.colors[index].isSelected
        }
        this.setState({
            filter: { ...filter }
        })

    }
    onFilterColor = (products, filter) => {
        let index = findIndex(filter.colors, color => color.isSelected === true);
        if (index !== -1) {
            filter.colors.forEach(
                color => {
                    if (color.isSelected) {
                        products = products.filter(product => findIndex(product.attributes.colors, item => item === color.value) !== -1)
                    }
                }
            )
        }
        return products;
    }

    onClickRatingFilter = rating => {
        const { filter } = this.state;
        filter.rating = rating;
        this.setState({
            filter: { ...filter }
        })
    }
    onFilterRating = (products, filter) => {
        products = products.filter(product => product.rating <= filter.rating);
        return products;
    }

    onClickBrandFilter = brand => {
        const { filter } = this.state;
        if (filter.brand === brand) {
            filter.brand = "";
        }
        else {
            filter.brand = brand;
        }
        this.setState({
            filter: { ...filter }
        })
    }
    onFilterBrand = (products, filter) => {
        if (filter.brand !== '') {
            products = products.filter(product => product.attributes.brand === filter.brand);
        }
        return products;
    }

    onClickOtherFilter = (other, type) => {
        const { filter } = this.state;
        if (filter[type] === other) {
            filter[type] = null;
        }
        else {
            filter[type] = other;
        }
        this.setState({
            filter: { ...filter }
        })

    }
    onFilterOther = (products, filter) => {
        if (filter.size) {
            products = products.filter(product => product.attributes.size === filter.size);
        }
        if (filter.ram) {
            products = products.filter(product => product.attributes.ram === filter.ram);
        }
        return products;
    }

    render() {
        let { layout, products, sort, filter } = this.state;

        //Filter
        products = this.onFilter(products, filter);
        // // sort
        products = this.onSort(products, sort);


        return (
            <div className="container products-page">
                {/* Sidebar  */}
                <div className="row">
                    <div className="col-md-3 mb-5">

                        {/* aside widget */}
                        <div className="aside">
                            <h3 className="aside-title">Filter by Price: </h3>
                            <div className="price-option">
                                <input className="low-price" name="low" onChange={this.onChangePriceFilter} value={filter.price.low} placeholder="Low" />
                                &nbsp;to&nbsp;
                                <input className="high-price" name="high" onChange={this.onChangePriceFilter} value={filter.price.high} placeholder="High" />
                            </div>
                        </div>
                        {/* aside widget */}
                        <div className="aside">
                            <h3 className="aside-title">Filter By Color:</h3>
                            <ul className="color-option">
                                {this.onShowColorFilter(filter.colors)}
                            </ul>
                        </div>
                        {/* aside widget */}
                        <div className="aside">
                            <h3 className="aside-title">Filter By Rating:</h3>
                            <ul className="rating-option">
                                {this.onShowRatingFilter(filter.rating)}
                            </ul>
                        </div>
                        {/* aside widget */}
                        <div className="aside">
                            <h3 className="aside-title">Filter by Brand</h3>
                            <ul className="list-links">
                                {this.onShowBrandFilter()}
                            </ul>
                        </div>

                        {/* Other filter */}
                        {this.onShowOthersFilter()}
                    </div>
                    {/* Products */}
                    <div className="col-md-9">
                        {/* Filter top */}
                        <div className="store-filter row">
                            <div className="col-md-9">
                                {/* Sort filter */}
                                <div className="sort-filter">
                                    <span className="text-uppercase">Sort By:</span>
                                    <select onChange={this.onChangeSortBy} className="input ml-2">
                                        <option name="popularity" value="popularity" >Popularity</option>
                                        <option name="price" value="price1" >Price: Low to High</option>
                                        <option name="price" value="price2" >Price: High to Low</option>
                                    </select>
                                </div>
                                {/* View filter */}
                                <div className="ml-3 row-filter">
                                    View:
                                    <p
                                        className={`ml-2 ${layout === 'grid' ? 'active' : ''}`}
                                        onClick={() => this.onChangeLayout('grid')}
                                    >
                                        <i className="fa fa-th-large" />
                                    </p>
                                    <p
                                        className={`ml-2 ${layout === 'list' ? 'active' : ''}`}
                                        onClick={() => this.onChangeLayout('list')}
                                    >
                                        <i className="fa fa-bars" />
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 total-products">
                                <span>{products.length} </span>
                                products found
                            </div>
                        </div>
                        {/* Products */}

                        {this.onShowProducts(products)}
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    categories: state.categories,
    products: state.products
});

export default connect(mapStateToProps, null)(Products);