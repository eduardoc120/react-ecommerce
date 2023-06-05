import React from 'react';

import NotFoundImg from '../assets/static/notFound.svg';

import '../assets/styles/components/NotFound.css';

const NotFound = () => (
    <div className="container not-found">
        <img src={NotFoundImg} alt="not found" />
        <h2>Page Not Found</h2>
        <p className="subtitle">The page you are looking is not available</p>
        <a href="/">Back To Home</a>
    </div>
);

export default NotFound;