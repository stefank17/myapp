import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CartItem = ({ id, name, price, image, numInCart }) => (
    <div className="card card-product">
        <div className="img-wrap"><img src={ image } className="list-img"></img></div>
        <figcaption className="info-wrap">
            <h3><Link to={`/bubbles/${id}`}>{numInCart}x { name }</Link></h3>
        </figcaption>
        <div className="bottom-wrap">
            <div className="price-wrap h5">
                <span className="price">Price: { price } kr.</span>
            </div>
            
            <div className="price-wrap h5">
                <span className="price">Price of all bubbles: { price * numInCart} kr.</span>
            </div>
        </div>
    </div>
  );

  CartItem.propTypes = {
    // This is the id of the bubble
    id: PropTypes.number.isRequired,
    // this is the name of the bubble
    name: PropTypes.string.isRequired,
    // this is the price of the bubble
    price: PropTypes.number.isRequired,
    // this is a sting that is a link to the image of the bubble
    image: PropTypes.string.isRequired,
    // this is haw many of this type of bubble is in the cart
    numInCart: PropTypes.number.isRequired,
};
  
  export default CartItem;
  