import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ProductsSection from '../components/ProductsSection';
import NewsletterSection from '../components/NewsletterSection';

import ManImage from '../assets/static/profession.png';

import '../assets/styles/components/Home.css';
import SocialMediaSection from '../components/SocialMediaSection';

const Home = props => (
    <>
        <section className="home-main-hero">
            <div className="container">
                <div>
                    <h1>The best react<br />ecommerce in the<br />whole world</h1>
                    <p className="subtitle">
                        Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. 
                        Vivamus maximus blandit dapibus.<br />Curabitur a tellus eu magna 
                        suscipit<br />vestibulum vitae non nisl.
                    </p>
                    <Link to="/">Shop Now</Link>
                </div>
                <div>
                    <img src={ManImage} alt="men" className="home-main-hero-img"/>
                </div>
            </div>
        </section>

        <ProductsSection coleccion="featured" />
        <NewsletterSection />
        <ProductsSection coleccion="newArrivals" />
        <SocialMediaSection />

    </>
);

const mapStateToProps = state => ({
    colecciones: state.colecciones
});

export default connect(mapStateToProps, null)(Home);
