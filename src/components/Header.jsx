import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../assets/styles/components/Header.css';

const Header = props => (
    <header>
        <div className="container header-container">
            <div className="left-column">
                <Link to="/" className="logo">React Ecommerce</Link>
            </div>
            <div className="right-column">
                <nav className="header-navigation">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </nav>
                <div className="header-cart">
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart" />
                    </Link>
                    <div className="cart-length">{props.cart.reduce((acc, cartItem) => cartItem.cantidad + acc, 0)}</div>
                </div>
            </div>  
        </div>
    </header>
);

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps, null)(Header);
