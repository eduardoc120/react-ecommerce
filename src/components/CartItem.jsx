import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import '../assets/styles/components/CartItem.css';

import QtyInput from './QtyInput';

const CartItem = props => {

    const [ qty, setQty ] = useState(props.cartItem.cantidad);

    const { cartItem, changeQty } = props;
    const newCartItem = useRef();
    const changeQuantity = useRef();

    const history = useHistory();

    useEffect(() => {
        newCartItem.current = cartItem;
        changeQuantity.current = changeQty;
    })

    useEffect(() => {
        changeQuantity.current({
            ...newCartItem.current,
            cantidad: qty,
            costoTotal: newCartItem.current.price * qty
        });
    }, [qty]);

    const handleClick = () => {
        window.scrollTo(0, 0);
        history.push(`/product/${cartItem.id}`);
    };

    return (
        <div className="cart-item">
            <div className="column-1">
                <img onClick={handleClick} src={cartItem.images[0].url} alt="product" />
                <div onClick={handleClick}>
                    <h3>{cartItem.title}</h3>
                    <span>
                        {Object.entries(cartItem.variante)
                            .reduce((acc, entrie, index) => acc + `${index !== 0 ? '/' : ''} ${entrie[1]} `, '')
                        }
                    </span>
                </div>
            </div>
            <div className="column-2">
                <span>
                    { props.currency === 'USD' ? `$${cartItem.price}.00` 
                    : props.currency === 'GBP' ? `£${(cartItem.price * props.currencyRates.GBP).toFixed(2)}`
                    : props.currency === 'EUR' ? `€${(cartItem.price * props.currencyRates.EUR).toFixed(2)}`
                    :  null}
                </span>
                <QtyInput qty={qty} setQty={setQty} theId={cartItem.cartItemId} />
                <span>
                    { props.currency === 'USD' ? `$${cartItem.price * qty}.00` 
                    : props.currency === 'GBP' ? `£${(cartItem.price * qty * props.currencyRates.GBP).toFixed(2)}`
                    : props.currency === 'EUR' ? `€${(cartItem.price * qty * props.currencyRates.EUR).toFixed(2)}`
                    :  null}
                </span>
            </div>
        </div>
    );
}

export default CartItem;