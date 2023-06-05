import React from 'react';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';

import '../assets/styles/components/ProductsSection.css';

const ProductsSection = props => {

    const products = [];
    for (let i = 0; i < 6; i++) {
        products.push(props.colecciones[props.coleccion][i]);
    }

    return (
        <section className="products-section">
            <div className="container">
                <h2>{products[0].coleccion}</h2>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur</p>
                <div className="products-container">
                    {products.map(
                        product => <ProductItem key={product.id} {...product} currency={props.currency} currencyRates={props.currencyRates} />
                    )}
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = state => ({
    colecciones: state.colecciones,
    currency: state.currency,
    currencyRates: state.currencyRates
});

export default connect(mapStateToProps, null)(ProductsSection);
