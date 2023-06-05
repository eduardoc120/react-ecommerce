import React from 'react';
import { connect } from 'react-redux';

import Carousel from './SocialMediaCarousel';

import '../assets/styles/components/SocialMediaSection.css';

const SocialMediaSection = props => (
    <section className="social-media">
        <div className="container">
            <p className="subtitle">Stay Connected</p>
            <h2>Say Hello!</h2>
            <p className="subtitle">
                We like to keep in touch with our customers through daily posting. We<br />
                frequently offer discounts, so make sure to follow along.
            </p>
            <Carousel items={props.socialMediaPosts} />
        </div>
    </section>
);

const mapStateToProps = state => ({
    socialMediaPosts: state.socialMediaPosts
});

export default connect(mapStateToProps, null)(SocialMediaSection);