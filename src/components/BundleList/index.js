import React from 'react';
import BundleItem from '../BundleItem';
import PropTypes from 'prop-types';


const BundleList = ({ bundles, addToCart }) => (
    <div className="bubble-list">
    { bundles.map(b => <BundleItem 
    key={ b.id }
    id={ b.id }
    name={ b.name }
    sum={ b.bundlePrice }
    addToCart={ addToCart }

    />)}
    </div>
)

BundleList.propTypes = {
    // This is an array of objects with information about each bundle
    bundles: PropTypes.arrayOf(PropTypes.shape({
        // This is the id of the bundle
        id: PropTypes.number.isRequired,
        // this is the name of the bundle
        name: PropTypes.string.isRequired,
        // this is the combined price of all the bubbles in the bundle
        sum: PropTypes.number,
    })).isRequired,
    // This is the function that is called when the add to cart button is pushed
    addToCart: PropTypes.func.isRequired,
};

export default BundleList;