import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { changeCurrency } from '../actions';

import '../assets/styles/components/PageSettings.css';

const PageSettings = props => {

    const { currency, changeCurrency } = props;

    useEffect(() => {

        document.getElementById('currency-button').addEventListener('click', () => {
            document.getElementById('currency-settings').classList.toggle('hidden');
        });

        Array.from(document.getElementsByClassName('currency-item')).forEach((item, index) => {
            item.addEventListener('click', () => {
                document.getElementsByClassName('currency-selected')[0] && document.getElementsByClassName('currency-selected')[0].classList.remove('currency-selected');
                item.classList.add('currency-selected');
                document.getElementById('currency-settings').classList.toggle('hidden');
                changeCurrency(item.id);
            });
        });

    }, [changeCurrency])

    return (
        <div className="page-settings-container">
            <button className="currency" id="currency-button">
                {currency + ' '}
                {currency === "USD" ? '$' : currency === "EUR" ? '€' : currency === "GBP" ? '£' : null} 
                <div className="arrow-down"></div>
            </button>
            <ul className="currency-settings hidden" id="currency-settings">
                <li className="currency-item" id="EUR">EUR €</li>
                <li className="currency-item" id="GBP">GBP £</li>
                <li className="currency-item currency-selected" id="USD">USD $</li>
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    currency: state.currency
});

const mapDispatchToProps = {
    changeCurrency
};

export default connect(mapStateToProps, mapDispatchToProps)(PageSettings);