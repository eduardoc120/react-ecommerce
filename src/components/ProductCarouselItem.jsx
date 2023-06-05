import React from 'react';

import '../assets/styles/components/ProductCarouselItem.css';

const ProductCarouselItem = props => (
    <div className="product-carousel-item">
        <img src={props.url} alt="product" />
    </div>
);

export default ProductCarouselItem;
