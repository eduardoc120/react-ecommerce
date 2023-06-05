import React from 'react';
import { connect } from 'react-redux';

import '../assets/styles/components/Success.css';

const Success = props => (
    <div className="success-container container">
        <h2>{`${props.buyer.fullname}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
    </div>
);

const mapStateToProps = state => ({
    buyer: state.buyer
});

export default connect(mapStateToProps, null)(Success);