import React from 'react';
import ProductItem from '../ProductItem';
import PropTypes from 'prop-types';

const ProductList = ({ bubbles, addToCart}) => (
    <div className="bubble-list">
    { bubbles.map(b => <ProductItem 
    key={ b.id }
    id={ b.id }
    name={ b.name }
    description={ b.description }
    price={ b.price }
    image={ b.image }
    addToCart={ addToCart }
    />)}
    </div>
)

ProductList.propTypes = {
    // This is an array of objects with information about each bubble
    bubbles: PropTypes.arrayOf(PropTypes.shape({
        // This is the id of the bubble
        id: PropTypes.number.isRequired,
        // this is the name of the bubble
        name: PropTypes.string.isRequired,
        // this is the description of the bubble
        description: PropTypes.string.isRequired,
        // this is the price of the bubble
        price: PropTypes.number.isRequired,
        // this is a sting that is a link to the image of the bubble
        image: PropTypes.string.isRequired,
    })).isRequired,
    // This is the function that is called when the add to cart button is pushed
    addToCart: PropTypes.func.isRequired,
};

export default ProductList;