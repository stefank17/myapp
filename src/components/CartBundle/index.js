import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CartBundle = ({ id, name, bundlePrice, numInCart }) => (
    <div className="card card-product">
        <figcaption className="info-wrap">
            <h3><Link to={`/bubbles/${id}`}>{numInCart}x { name }</Link></h3>
        </figcaption>
        <div className="bottom-wrap">
            <div className="price-wrap h5">
                <span className="price">Price: { bundlePrice } .kr</span>
            </div>
            
            <div className="price-wrap h5">
                <span className="price">Price of all bundles: { bundlePrice * numInCart} .kr</span>
            </div>
        </div>
    </div>
);

CartBundle.propTypes = {
    // This is the id of the bundle
    id: PropTypes.number.isRequired,
    // this is the name of the bundle
    name: PropTypes.string.isRequired,
    // this is the combined price of all the bubbles in the bundle
    sum: PropTypes.number,
    // this is haw many of this type of bundle is in the cart
    numInCart: PropTypes.number.isRequired,
};

export default CartBundle;
  