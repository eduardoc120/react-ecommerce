import React from 'react';
import { useHistory } from "react-router-dom";

import '../assets/styles/components/ProductItem.css'

const Product = props => {

    const history = useHistory();

    const handleClick = e => {
        window.scrollTo(0, 0);
        history.push(`/product/${props.id}`);
    };
    
    return (
        <div className="productItem-container" onClick={handleClick} >
            <img src={props.images[0].url} alt="product" />
            <p className="subtitle">{props.title}</p>
            <span className="productItem-price">
                { props.currency === 'USD' ? `$ ${props.price}.00` 
                : props.currency === 'GBP' ? `£ ${(props.price * props.currencyRates.GBP).toFixed(2)}`
                : props.currency === 'EUR' ? `€ ${(props.price * props.currencyRates.EUR).toFixed(2)}`
                :  null}
            </span>
        </div>
    );
}

export default Product;
