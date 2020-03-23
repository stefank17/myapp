import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductItem = ({ id, name, description, price, image, addToCart }) => (
    <div className="card card-product">
        <div className="img-wrap"><img src={ image } className="list-img"></img></div>
        <figcaption className="info-wrap">
            <h3><Link to={`/bubbles/${id}`}>{ name }</Link></h3>
        </figcaption>
        <div className="bottom-wrap">
            <div className="price-wrap h5">
                {/* <p>{ description }</p> */}
                <span className="price">Price: { price } kr.</span>
            </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={ () => addToCart(id) }>Add to cart</button>
    </div>
);
  
ProductItem.propTypes = {
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
    // This is the function that is called when the add to cart button is pushed
    addToCart: PropTypes.func.isRequired,
};

export default ProductItem;
  