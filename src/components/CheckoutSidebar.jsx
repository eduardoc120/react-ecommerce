import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import handleSumTotal from '../utils/handleSumTotal';

import '../assets/styles/components/CheckoutSidebar.css';

const ChekoutSidebar = props => {

    const history = useHistory();

    const handleClick = useCallback((id) => {
        window.scrollTo(0, 0);
        history.push(`/product/${id}`);
    }, [history]);

    return (
        <aside className="checkout-sidebar">
            <div className="carrito-items">
                {props.cart.map(cartItem => (
                    <div key={cartItem.cartItemId}>
                        <div>
                            <div onClick={() => handleClick(cartItem.id)} className="image">
                                <img src={cartItem.images[0].url} alt="product" />
                                <span>{cartItem.cantidad}</span>
                            </div>
                            <div onClick={() => handleClick(cartItem.id)}>
                                <div className="title">{cartItem.title}</div>
                                <div className="variants">
                                    {Object.entries(cartItem.variante)
                                        .reduce((acc, entrie, index) => acc + `${index !== 0 ? '/' : ''} ${entrie[1]} `, '')
                                    }
                                </div>
                            </div>
                        </div>
                        <span>
                            { props.currency === 'USD' ? `$${cartItem.costoTotal}.00` 
                            : props.currency === 'GBP' ? `£${(cartItem.costoTotal * props.currencyRates.GBP).toFixed(2)}`
                            : props.currency === 'EUR' ? `€${(cartItem.costoTotal * props.currencyRates.EUR).toFixed(2)}`
                            :  null}
                        </span>
                    </div>
                ))}
            </div>
            <div className="subtotal">
                <span>Subtotal</span> 
                <span className="price">
                    { props.currency === 'USD' ? `$${handleSumTotal(props.cart)}.00` 
                    : props.currency === 'GBP' ? `£${(handleSumTotal(props.cart) * props.currencyRates.GBP).toFixed(2)}`
                    : props.currency === 'EUR' ? `€${(handleSumTotal(props.cart) * props.currencyRates.EUR).toFixed(2)}`
                    :  null}
                </span> 
            </div>
            <div className="total">
                <span>Total</span>
                <span>
                    <span>{props.currency} </span>
                    <span className="price">
                        { props.currency === 'USD' ? `$${handleSumTotal(props.cart)}.00` 
                        : props.currency === 'GBP' ? `£${(handleSumTotal(props.cart) * props.currencyRates.GBP).toFixed(2)}`
                        : props.currency === 'EUR' ? `€${(handleSumTotal(props.cart) * props.currencyRates.EUR).toFixed(2)}`
                        :  null}
                    </span> 
                </span>
            </div>
        </aside>
    );
}

const mapStateToProps = state => ({
    currency: state.currency,
    currencyRates: state.currencyRates,
    cart: state.cart
});

export default connect(mapStateToProps, null)(ChekoutSidebar);