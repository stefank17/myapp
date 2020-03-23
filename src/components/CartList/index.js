import React from 'react';
import CartItem from '../CartItem';
import CartBundle from '../CartBundle';
import PropTypes from 'prop-types';


const CartList = ({ bubbles, total, bundles }) => (
    <div>
        <div className="bubble-list">
        { bubbles.map(b => 
                <CartItem 
                    key={ b.id }
                    id={ b.id }
                    name={ b.name }
                    price={ b.price }
                    image={ b.image }
                    numInCart={ b.inCart }
                />
        )}
        { bundles.map(b => 
                <CartBundle 
                    key={ b.id }
                    id={ b.id }
                    name={ b.name }
                    bundlePrice={ b.bundlePrice }
                    numInCart={ b.inCart }
                />
        )}
        </div>
        <div>
            <h3>
                Your total is: { total } kr.
            </h3>
        </div>
    </div>
)

CartList.propTypes = {
    // This is an array of objects with information about each bundle
    bundles: PropTypes.arrayOf(PropTypes.shape({
        // This is the id of the bundle
        id: PropTypes.number.isRequired,
        // this is the name of the bundle
        name: PropTypes.string.isRequired,
        // this is the combined price of all the bubbles in the bundle
        bundlePrice: PropTypes.number,
        // this is haw many of this type of bundle is in the cart
        numInCart: PropTypes.numInCart,
    })).isRequired,
    // This is an array of objects with information about each bubble
    bubbles: PropTypes.arrayOf(PropTypes.shape({
        // This is the id of the bubble
        id: PropTypes.number.isRequired,
        // this is the name of the bubble
        name: PropTypes.string.isRequired,
        // this is the price of the bubble
        price: PropTypes.number.isRequired,
        // this is a sting that is a link to the image of the bubble
        image: PropTypes.string.isRequired,
        // this is haw many of this type of bubble is in the cart
        numInCart: PropTypes.numInCart,
    })).isRequired,
    // this is the total price of everthing in the cart
    total: PropTypes.number.isRequired,
};

export default CartList;