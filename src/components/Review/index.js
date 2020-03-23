import React from 'react';
import Form from '../Form';
import Input from '../Input';
import toastr, { info } from 'toastr';
import { Link } from 'react-router-dom';
import ProductList from '../CartList'
import Cart from '../Cart';

class Review extends React.Component {
    state = {
        fields: {
            name: "",
            address: "", 
            city: "",
            telephone: "",
            postalcode: "",
        },
        errors: {
            nameError: '',
            adressError: '',
            cityError: '',
            telephoneError: '',
            postalError: '',
          },
    };

    componentDidMount() {
        this.setState({ fields: JSON.parse(localStorage.getItem('customerInfo'))});
    }

    saveInformation() {
        localStorage.setItem('customerInfo', JSON.stringify(this.state.fields));
      }

    sendPost(postData) {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        };
        fetch('http://localhost:3500/api/orders/' + postData.customerInfo.telephone , requestOptions)
            .then(response => response.json());
    }

    orderComplete() {
        alert("Order confirmed. You will be directed to home page. Click OK");

        let bundles = localStorage.getItem('idBundleInCart');
        let items = localStorage.getItem('idItemInCart');
        let total = localStorage.getItem('total');
        let customerInfo = localStorage.getItem('customerInfo');
        localStorage.clear();
        localStorage.setItem('customerInfo',customerInfo);

        let postData = {
            bundles: JSON.parse(bundles),
            bubbles: JSON.parse(items),
            total: total,
            customerInfo: JSON.parse(customerInfo)
        }
        this.sendPost(postData)

        setTimeout(() => {
            this.props.history.push('/Home');
        },500)
    }

    render() {
        const { name, address, telephone, city, postalcode } = this.state.fields;
        const { nameError } = this.state.errors
        return (
        <div>
            <div><h1>Review</h1></div>
            <div><p>Go back to edit</p></div>
            <div><p>Name: { name }</p></div>
            <div><p>Address: { address }</p></div>
            <div><p>Phone number: { telephone }</p></div>
            <div><p>City: { city }</p></div>
            <div><p>Postalcode: { postalcode }</p></div>
            <Cart></Cart>
            
            <button
                type="button"
                className="btn btn-primary"
                onClick={ () => this.orderComplete() }>
            Order!
            </button>
            <Link to={`/checkout/`}>
              <input
                  value="Back!"
                  className="btn btn-primary"
                  style={{ float: 'right', marginTop: '10' }}
                  onChange={()=>{}}
                  >
              </input>
            </Link>
        </div>
        );
    };
};

export default Review;