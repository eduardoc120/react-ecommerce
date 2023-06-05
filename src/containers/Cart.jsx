import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItem';

import '../assets/styles/components/Cart.css';
import handleSumTotal from '../utils/handleSumTotal';
import { changeQtyProduct } from '../actions';

const Cart = props => {
    return (
        <div className="cart">
            <div className="container">
                <h2>Your cart</h2>

                {   props.cart.length > 0 ? 

                        <>
                            <Link className="continue-shopping" to="/">Continue shopping</Link>
                            <div className="cart-items-container">
                                <div className="cart-items-header">
                                    <div className="column-1">
                                        <span>Product</span>
                                    </div>
                                    <div className="column-2">
                                        <span className="items-price">Price</span>
                                        <span className="items-qty">Quantity</span>
                                        <span className="items-total">Total</span>  
                                    </div>
                                </div>
                                <div className="cart-items">
                                    {props.cart.map(cartItem => (
                                        <CartItem 
                                            key={cartItem.cartItemId}
                                            cartItem={cartItem}
                                            currency={props.currency}
                                            currencyRates={props.currencyRates}
                                            changeQty={props.changeQtyProduct}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="under-cart">
                                <div className="column-half">
                                    <div className="note-area">
                                        <label>
                                            Add a note to your order
                                            <textarea 
                                                name="note" 
                                                id="note" 
                                                cols="50" 
                                                rows="10"
                                            ></textarea>
                                        </label>
                                    </div>
                                </div>
                                <div className="column-half ">
                                    <div className="order-total">
                                        <span className="subtotal">Subtotal</span>
                                        <span className="money">
                                            { props.currency === 'USD' ? `$${handleSumTotal(props.cart)}.00` 
                                            : props.currency === 'GBP' ? `£${(handleSumTotal(props.cart) * props.currencyRates.GBP).toFixed(2)}`
                                            : props.currency === 'EUR' ? `€${(handleSumTotal(props.cart) * props.currencyRates.EUR).toFixed(2)}`
                                            :  null}
                                        </span>
                                    </div>
                                    <div className="order-message">Tax included and shipping calculated at checkout</div>
                                    <Link onClick={() => window.scrollTo(0, 0)} to="/checkout/shipping">
                                        <button className="checkout-button">check out</button>
                                    </Link>
                                </div>
                            </div>
                        </>

                    :

                        <>
                            <p className="subtitle">
                                Your cart is currently empty.
                            </p>
                            <Link to="/" className="cart-empty-cta">
                                Continue Shopping
                            </Link>
                        </>

                }

            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    cart: state.cart,
    currency: state.currency,
    currencyRates: state.currencyRates,
});

const mapDispatchToProps = {
    changeQtyProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);