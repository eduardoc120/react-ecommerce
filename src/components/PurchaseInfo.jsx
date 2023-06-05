import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useHistory } from "react-router-dom";

import '../assets/styles/components/PurchaseInfo.css';
import QtyInput from './QtyInput';

const PurchaseInfo = props => {

    const memoizedValue = useMemo(() => {
        const ningunaDisponible = props.variantes.reduce((acc, varian) => varian.opciones.length * acc, 1) === props.variantesAgotadas.length;
        let varianteDisponible = null;

        let indices = props.variantes.reduce((acc, elem) => [...acc, 0], []);

        while (varianteDisponible === null && !ningunaDisponible) {
            let objeto = {};
            
            props.variantes.forEach((variant, i) => {
                objeto[variant.name] = variant.opciones[indices[i]];
            });

            varianteDisponible = props.variantesAgotadas.some(varAgotada => {
                return Object.keys(varAgotada).every(key => varAgotada[key] === objeto[key]);
            }) ? null : objeto;

            indices[indices.findIndex(indice => indice < 3)]++;
        }

        return ningunaDisponible ? props.variantes.reduce((acc, elem) => ({...acc, [elem.name]: elem.opciones[0]}), {}) : varianteDisponible;
    }, [props.variantes, props.variantesAgotadas]);

    const [form, setForm] = useState(memoizedValue);
    const [disabledInputs, setDisabledInputs] = useState([]);
    const [canBuy, setCanBuy] = useState(true);
    const [qty, setQty] = useState(1);
    const history = useHistory();

    const handleChange = useCallback(
        (e) => {
            setForm(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }));
        },
        [setForm]
    );

    const { product, addProductCart, changeQtyProduct, cart } = props;

    const handleClick = useCallback(
        (e) => {
            e.preventDefault();
            const cartItem = cart.find(elem => {
                const llaves = Object.keys(elem.variante);
                return llaves.every(key => elem.variante[key] === form[key]) && elem.id === product.id
            });
            if (cartItem) {
                changeQtyProduct({
                    ...cartItem,
                    cantidad: cartItem.cantidad + qty,
                    costoTotal: cartItem.price * cartItem.cantidad + qty,
                });
            } else {
                addProductCart({
                    ...product,
                    variante: form,
                    cantidad: qty,
                    costoTotal: product.price * qty,
                    cartItemId: Math.random()
                });   
            }
            history.push('/cart');
        }, [qty, form, history, product, addProductCart, changeQtyProduct, cart]
    );

    useEffect(() => {
        setDisabledInputs([]);
        setCanBuy(true);

        props.variantesAgotadas.forEach(elem => {

            const llaves = Object.keys(elem);
            const entradas = Object.entries(elem);

            if (!llaves.some(key => elem[key] !== form[key])) {
                entradas.forEach(entrie => {
                    setDisabledInputs(prevInputs => [...prevInputs, `${entrie[0]}-${entrie[1]}`]);
                });
                setCanBuy(false);
            } else {
                llaves.forEach(key => {
                    if (elem[key] === form[key]) {
                        entradas.forEach(entrie => {
                            if (entrie[1] !== form[key]) {
                                setDisabledInputs(prevInputs => [...prevInputs, `${entrie[0]}-${entrie[1]}`]);
                            }
                        });
                    }
                });
            }
        });
    }, [props.variantesAgotadas, form, setCanBuy, setDisabledInputs]);
    
    return (
        <div className="purchase-info">
            <h3>{props.title}</h3>
            <div className="price">
                <span>
                    { props.currency === 'USD' ? `$ ${props.price}.00` 
                    : props.currency === 'GBP' ? `£ ${(props.price * props.currencyRates.GBP).toFixed(2)}`
                    : props.currency === 'EUR' ? `€ ${(props.price * props.currencyRates.EUR).toFixed(2)}`
                    :  null}
                </span>
            </div>
            <div className="product-variants">
                {props.variantes.map(variante => (
                    <div className={`product-${variante.name}-input`} key={variante.id}>
                        <fieldset onChange={handleChange} >
                            <legend className="input-title">{variante.name} | {variante.name === 'size' ? <button id="fits-guide-button">Fit &amp; Size Chart</button> : form[variante.name]}</legend>
                            {variante.opciones.map(opcion => (
                                <div key={opcion}>
                                    <input type="radio" name={variante.name} value={opcion} id={`${variante.name}-${opcion}`} defaultChecked={form[variante.name] === opcion} />
                                    <label htmlFor={`${variante.name}-${opcion}`} className={disabledInputs.includes(`${variante.name}-${opcion}`) ? 'disabled' : ''}>
                                        <span>{variante.name === 'color' ? null : opcion}</span>
                                    </label>
                                </div>
                            ))}
                        </fieldset>
                    </div>
                ))}
                <div>
                    <label htmlFor="product-qty" className="input-title">Quantity</label>
                    <QtyInput qty={qty} setQty={setQty} theId="purchase-info" />
                </div>
            </div>
            {   canBuy ?
                    <>
                        <button className="product-add-to-cart" onClick={handleClick}>Add To Cart</button>
                        <button className="product-payment-now">Buy It Now</button>
                    </>
                :
                    <button className="product-sold-out" disabled>Sold Out</button>
            }
        </div>
    );
};

export default PurchaseInfo;