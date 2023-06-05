import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewsletterSubscriber } from '../actions';

import '../assets/styles/components/NewsletterSection.css';

const NewsletterSection = () => {

    const [state, setState] = useState({ email: '', id: Math.random() });

    const inputHandler = e => {
        setState({...state, [e.target.name]: e.target.value});
    };

    const buttonHandler = () => {
        addNewsletterSubscriber(state);
        setState({ email: '', id: Math.random() });
    };

    return (
        <section className="newsletter">
            <h2>Subscribe to our newsletter</h2>
            <p className="subtitle">A short sentence describing what someone will receive by subscribing</p>
            <div>
                <input value={state.email} type="email" name="email" placeholder="Enter your email" onChange={inputHandler} />
                <button onClick={buttonHandler}>Subscribe</button>
            </div>
        </section>
    );
}

const mapDispatchToProps = {
    addNewsletterSubscriber
};

export default connect(null, mapDispatchToProps)(NewsletterSection);
