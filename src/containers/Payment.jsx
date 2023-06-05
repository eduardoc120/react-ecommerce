import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';

import handleSumTotal from '../utils/handleSumTotal';

import CheckoutSidebar from '../components/CheckoutSidebar';

import { addNewOrder } from '../actions';

import '../assets/styles/components/Payment.css';

const Payment = props => {

    const history = useHistory();

    const paypalOptions = {
        clientId: "AdzpIEovLAhnB5uj73b5AfaF34mCWa7Vq2tf-WEoqd537rM8rtJzLof8BYIVy6xcDik7YkSD7gn29Za-",
        intent: 'capture',
        currency: props.currency
    };

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',   
    };

    const handlePaymentSuccess = data => {
        if (data.status === "COMPLETED") {
            const newOrder = {
                buyer: props.buyer,
                products: props.cart,
                payment: data
            };
            props.addNewOrder(newOrder);
            history.push('/success');
        }
    };
    
    return (
        <div className="payment-container">
            <div className="main">
                <div>
                    <nav>
                        <ol>
                            <li className="prev">
                                <Link to="/cart">Cart</Link>
                            </li>
                            <li className="prev">
                                <Link to="/checkout/shipping">Information</Link>
                            </li>
                            <li className="actual">
                                <Link to="/checkout/payment">Payment</Link>
                            </li>
                        </ol>
                    </nav>
                </div>
                <h2>Payment</h2>
                <span>All transactions are secure and encrypted.</span>
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal(props.cart)}
                        onPaymentStart={() => console.log('Start Payment')}
                        onPaymentSuccess={data => handlePaymentSuccess(data)}
                        onPaymentError={error => console.log(error)}
                        onPaymentCancel={data => console.log(data)}
                    />
                </div>
            </div>
            <CheckoutSidebar />
        </div>
    );
}

const mapStateToProps = state => ({
    currency: state.currency,
    buyer: state.buyer,
    cart: state.cart
});

const mapDispatchToProps = {
    addNewOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);