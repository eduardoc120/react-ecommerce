import React, { useEffect } from 'react';

import '../assets/styles/components/ProductDescription.css';

const ProductDescription = props => {

    useEffect(() => {
        const productTabs = Array.from(document.getElementById("product-tabs-1").children);
        const productTabsBody = Array.from(document.getElementsByClassName("product-tab-body"));

        productTabs.forEach(productTab => {
            productTab.addEventListener('click', e => {
                productTabs.filter(
                    element => element.classList.contains('current')
                ).forEach(element => {
                    element.classList.remove('current');
                });
                productTabsBody.forEach( element => {
                    if (element.classList.contains('current')) {
                        element.classList.remove('current');
                    } 
                    if (e.target.attributes['data-content-id'].value === element.attributes['data-content-id'].value) {
                        element.classList.add('current');
                    }
                })
                productTab.classList.add('current');
            });
        });
    }, []);

    return (
        <div className="description">
            <div className="product-tabs" id="product-tabs-1">
                <div className="current" data-content-id="details">Details</div>
                <div data-content-id="key-benefits">Key Benefits</div>
                <div data-content-id="return-and-exchanges">Return and Exchanges</div>
            </div>
            <div data-content-id="details" className="current product-tab-body" dangerouslySetInnerHTML={{__html: props.description}}></div>
            <div data-content-id="key-benefits" className="product-tab-body" dangerouslySetInnerHTML={{__html: props.keyBenefits}}></div>
            <div data-content-id="return-and-exchanges" className="product-tab-body">
                <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can't offer you a refund or exchange. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
            </div>
        </div>
    );
};

export default ProductDescription;