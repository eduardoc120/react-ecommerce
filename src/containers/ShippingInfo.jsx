import React, { useRef } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { addToBuyer } from '../actions';

import '../assets/styles/components/ShippingInfo.css';
import { useCallback } from 'react';
import CheckoutSidebar from '../components/CheckoutSidebar';

const ShippingInfo = props => {

    const form = useRef(null);
    const history = useHistory();
    const { addToBuyer } = props;


    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const buyer = {
            'fullname': formData.get('fullname'),
            'email': formData.get('email'),
            'emailMarketing': formData.get('email-marketing'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone'),
        };
        addToBuyer(buyer);
        window.scrollTo(0, 0);
        history.push('/checkout/payment');
    }, [history, addToBuyer])

    return (
        <>
        {props.cart.length > 0 ?
            <div className="shipping-info-container">
                <div className="main">
                    <div>
                        <nav>
                            <ol>
                                <li className="prev">
                                    <Link to="/cart">Cart</Link>
                                </li>
                                <li className="actual">
                                    <Link to="/checkout/shipping">Information</Link>
                                </li>
                                <li>
                                    <Link to="/checkout/payment">Payment</Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <form ref={form}>
                        <div className="contact-info">
                            <h2>Contact Information</h2>
                            <input 
                                placeholder="Email address" 
                                type="email"
                                name="email"
                            />
                            <label>
                                <input  
                                    type="checkbox"
                                    name="email-marketing"
                                    defaultChecked
                                />
                                Keep me up to date on news and offers
                            </label>
                        </div>
                        <div className="shipping-address">
                            <h2>Shipping address</h2>
                            <input
                                name="fullname"
                                type="text"
                                placeholder="Full name"
                            />
                            <input
                                name="address"
                                type="text"
                                placeholder="Address"
                            />
                            <input
                                name="apto"
                                type="text"
                                placeholder="Apartment, suite, etc. (optional)"
                            />
                            <input 
                                name="city"
                                type="text"
                                placeholder="City"
                            />
                            <input 
                                type="text" 
                                name="country" 
                                placeholder="Country"
                            />
                            <input 
                                type="text" 
                                name="state"
                                placeholder="State"
                            />
                            <input 
                                type="text" 
                                name="cp" 
                                placeholder="Postal code"
                            />
                            <input 
                                type="text" 
                                name="phone" 
                                placeholder="Phone"
                            />
                        </div>
                        <button onClick={handleSubmit}>Continue to payment</button>
                        <Link to="/cart">Return to cart</Link>
                    </form>
                </div>
                <CheckoutSidebar />
            </div>
        :
            <Redirect to="/cart" />
        }
        </>
    );
}

const mapStateToProps = state => ({
    cart: state.cart,
    currency: state.currency,
    currencyRates: state.currencyRates
});

const mapDispatchToProps = {
    addToBuyer
};

export default connect(mapStateToProps, mapDispatchToProps)(ShippingInfo);
