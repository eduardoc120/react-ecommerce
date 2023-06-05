import React from 'react';

import '../assets/styles/components/SocialMediaCarouselItem.css';

const SocialMediaCarouselItem = props => (
    <div className={`carousel-item`}>
        <img src={props.image} alt="social-media" />
        <p>{props.caption}</p>
    </div>
);

export default SocialMediaCarouselItem;
