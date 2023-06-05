import React, { useEffect } from 'react';

import '../assets/styles/components/QtyInput.css';

const QtyInput = props => {

    const { qty, setQty } = props;

    useEffect(() => {
        document.getElementById(`${props.theId}-minus-qty`).addEventListener('click', () => {
            setQty(prev => prev > 0 ? prev - 1 : prev);
        });
        document.getElementById(`${props.theId}-plus-qty`).addEventListener('click', () => {
            setQty(prev => prev + 1);
        });
    }, [setQty, props.theId]);

    const changeHandler = e => {
        setQty(e.target.value);
    };

    const blurHandler = e => {
        if (qty === '') {
            setQty(1);
            return;
        }
        setQty(parseInt(qty));
    }

    return (
        <div className="qty-selector">
            <button id={`${props.theId}-minus-qty`}>-</button>
            <input type="number" value={qty} onChange={changeHandler} onBlur={blurHandler} />
            <button id={`${props.theId}-plus-qty`}>+</button>
        </div>
    );
}

export default QtyInput;