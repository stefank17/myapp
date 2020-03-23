import React from "react";
import PropTypes from 'prop-types';

class ProductItemDetails extends React.Component {
    state = {
        productItem: {
            name: '',
            description: '',
            price: 0,
            image: '',
        }
    };
  
    componentDidMount() {
        const { match: { params } } = this.props;
        fetch(`http://localhost:3500/api/bubbles/${params.productItemId}`)
            .then((res) => res.json())
            .then((res) => this.setState({productItem: res}));
    }
  
    render() {
        const { name, description, price, image } = this.state.productItem;
        return (
            <div>
                <div className="img-wrap img-container"><img src={ image } className="details-img"></img></div>
                <h3>{name}</h3>
                <p>{ description }</p>
                <span className="price">Price: ${ price }</span>
            </div>
        );
    };
};

ProductItemDetails.propTypes = {
    // This is an object that contains the id of the selected bubble
    // by getting it from the url
    match: PropTypes.shape({
        params: PropTypes.shape({
            productItemId: PropTypes.string.isRequired,
        })
    }).isRequired,
};

export default ProductItemDetails;