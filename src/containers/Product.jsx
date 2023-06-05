import React from 'react';
import { connect } from 'react-redux';
import { Redirect, useParams } from 'react-router';

import { getSingleProduct, addProductCart, changeQtyProduct } from '../actions';

import '../assets/styles/components/Product.css';
import Carousel from '../components/ProductCarousel';
import ProductDescription from '../components/ProductDescription';
import PurchaseInfo from '../components/PurchaseInfo';

const Product = props => {

    const { id } = useParams();
    props.getSingleProduct(id);

    return (
        <>
        {   props.product ? 
                <div className="product-page container">
                    <div className="images">
                        <Carousel items={props.product.images} />
                    </div>
                    <div className="asides-info">
                        <PurchaseInfo
                            addProductCart={props.addProductCart}
                            changeQtyProduct={props.changeQtyProduct}
                            product={props.product}
                            currency={props.currency}
                            currencyRates={props.currencyRates}
                            title={props.product.title}
                            price={props.product.price}
                            variantes={props.product.variantes}
                            variantesAgotadas={props.product.variantesAgotadas}
                            cart={props.cart}
                        />
                        <div className="trust-badge">
                            <img src="https://cdn.shopify.com/s/files/1/0883/0062/files/trust_946x.png?v=1530861306" alt="trust badge" />
                        </div>
                    </div>
                    <ProductDescription description={props.product.description} keyBenefits={props.product.keyBenefits} />
                </div>
            : 
              props.product === null ?
                  'loading' 
              : 
                  <Redirect to="/not-found" />
        }
      </>
    );
};

const mapStateToProps = state => ({
    product: state.currentProduct,
    currency: state.currency,
    currencyRates: state.currencyRates,
    variantes: state.variantes,
    variantesAgotadas: state.variantesAgotadas,
    cart: state.cart
});

const mapDispatchToProps = {
    getSingleProduct,
    addProductCart,
    changeQtyProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
