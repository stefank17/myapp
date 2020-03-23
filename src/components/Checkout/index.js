import React from 'react';
import { Link } from 'react-router-dom';

class Checkout extends React.Component {

    render(){
        return(
        <div className="checkout">
            <h1>Checkout</h1>
            <p id="checkout-msg">Do you want a delivery or an in-store pick-up?</p>
            <div className="cheoutn-btns">
            <Link id="link-text" to="/delivery">
                <button className="btn btn-primary btn-checkout">
                    Delivery
                </button>
            </Link>
            <Link id="link-text" to="/pickup">
                <button className="btn btn-primary btn-checkout">
                    Pickup
                </button>
            </Link>
            </div>
        </div>
    )};
};

export default Checkout;