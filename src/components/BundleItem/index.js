import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const BundleItem = ({ id, name, sum, addToCart}) => (
    <div className="card card-product">
        <figcaption className="info-wrap">
            <h3><Link to={`/bundle/${id}`}>{ name }</Link></h3>
        </figcaption>
        <div className="bottom-wrap">
            <div className="price-wrap h5">
                <span className="price">Total price: { sum } kr.</span>
            </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={ () => addToCart(id) }>Add to cart</button>
    </div>
);

BundleItem.propTypes = {
    // This is the id of the bundle
    id: PropTypes.number.isRequired,
    // this is the name of the bundle
    name: PropTypes.string.isRequired,
    // this is the combined price of all the bubbles in the bundle
    sum: PropTypes.number,
    // This is the function that is called when the add to cart button is pushed
    addToCart: PropTypes.func.isRequired,
};
  
  export default BundleItem;
  