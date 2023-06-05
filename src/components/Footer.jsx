import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Footer.css';
import PageSettings from './PageSettings';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-columns">
                <div className="quick-links">
                    <h2>Quick Links</h2>
                    <nav className="footer-navigation">
                        <ul>
                            <li>
                                <a href="/search" className="subtitle">Search</a>
                            </li>
                            <li>
                                <Link to="/" className="subtitle">Home</Link>
                            </li>
                            <li>
                                <Link to="/" className="subtitle">Products</Link>
                            </li>
                            <li>
                                <a href="/about" className="subtitle">About Us</a>
                            </li>
                            <li>
                                <Link to="/" className="subtitle">Blog</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="connect-with-us">
                    <h2>Connect With Us</h2>
                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                        <i className="fab fa-facebook-square" />
                    </a>
                    <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
                        <i className="fab fa-instagram" />
                    </a>
                    <a href="https://www.tiktok.com/" rel="noreferrer" target="_blank">
                        <i className="fab fa-tiktok" />
                    </a>
                    <a href="https://www.twitter.com/" rel="noreferrer" target="_blank">
                        <i className="fab fa-twitter" />
                    </a>
                </div>
                <div className="contact-us">
                    <h2>Contact Us</h2>
                    <p className="subtitle">
                        (555) 555-1234<br />
                        1712 Pearl St<br />
                        Victoria, BC<br />
                        V8R 6R7 Canada
                    </p>
                </div>
            </div>
            <hr />
            <div className="copywright-container">
                <a href="/" className="footer-copywright">©️ All Rights Reserved 2021・Powered by Me</a>
                <PageSettings />
            </div>
        </div>
    </footer>
);

export default Footer;
