import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import '../assets/styles/components/Products.css';

import { sortProducts } from '../actions';

import ProductItem from '../components/ProductItem';
import Pagination from '../components/Pagination';

const Products = props => {


    const { sortProducts } = props;

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ productsPerPage ] = useState(9);

    const sortOptions = {
        'A-Z': (a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0,
        'Z-A': (a, b) => a.title < b.title ? 1 : a.title > b.title ? -1 : 0,
        'new-to-old': (a, b) => a.comparisonDate > b.comparisonDate ? -1 : a.comparisonDate < b.comparisonDate ? 1 : 0,
        'old-to-new': (a, b) => a.comparisonDate > b.comparisonDate ? 1 : a.comparisonDate < b.comparisonDate ? -1 : 0,
        'price-high-to-low': (a, b) => a.price > b.price ? -1 : a.price < b.price ? 1 : 0,
        'price-low-to-high': (a, b) => a.price > b.price ? 1 : a.price < b.price ? -1 : 0,
    };

    useEffect(() => {
        sortProducts((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0);
    }, [sortProducts]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = props.products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div className="products-page">
            <h2>Products</h2>
            <div className="products-settings">
                <div>
                    <label htmlFor="sort">Sort By</label>
                    <select name="sort" id="products-sort-by" onChange={e => sortProducts(sortOptions[document.getElementById('products-sort-by').value])} >
                        <option value="A-Z">Alphabetically, A-Z</option>
                        <option value="Z-A">Alphabetically, Z-A</option>
                        <option value="new-to-old">Date, new to old</option>
                        <option value="old-to-new">Date, old to new</option>
                        <option value="price-high-to-low">Price, high to low</option>
                        <option value="price-low-to-high">Price, low to high</option>
                    </select>
                </div>
                <span>{props.products.length === 1 ? `${props.products.length} product` : `${props.products.length} products`}</span>
            </div>
            <div className="products-wrapper container">
                { currentProducts.map(product => <ProductItem key={product.id} {...product} currency={props.currency} currencyRates={props.currencyRates} />) }
            </div>
            <Pagination postsPerPage={productsPerPage} totalPosts={props.products.length} paginate={paginate} currentPage={currentPage} />
        </div>
    );
};

const mapStateToProps = state => ({
    products: state.products,
    currency: state.currency,
    currencyRates: state.currencyRates
});

const mapDispatchToProps = {
    sortProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
