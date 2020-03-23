import React from 'react';
import Form from '../Form';
import Input from '../Input';
import toastr from 'toastr';
import { Link } from 'react-router-dom';
import Review from '../Review';

class Delivery extends React.Component {
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
            addressError: '',
            cityError: '',
            telephoneError: '',
            postalError: '',
          },
    };
    componentDidMount() {
      this.setState({ fields: JSON.parse(localStorage.getItem('customerInfo'))})
    }

    onInput(e) {
        this.setState({ fields: {
          ...this.state.fields,
          [ e.target.name ]: e.target.value,
        } });
      }

      submitForm(e) {
        e.preventDefault();
    
        if (!this.validateForm()) {
          toastr.error('The form was not successfully submitted!', 'Failed!');
        } else {
          console.log(this.state.fields);
          toastr.success('The form was successfully submitted!', 'Success!');
          this.props.history.push("/review/");
        }
      }

      validateForm() {
        const { name, address, telephone, city, postalcode } = this.state.fields;
        const errors = {};
        var  phonePattern = /^[0-9]{3}-?\s?[0-9]{4}$/;
        var  postalPattern = /^[1-9][0-9]{2}$/;
        var phoneTest = phonePattern.test(telephone);
        var postalTest = postalPattern.test(postalcode);
    
        if (name === '') { errors.nameError = 'Name is required!'; }
        if (address === '') { errors.addressError = 'Address is required!'; }
        if (phoneTest === false) { errors.telephoneError = 'Telephone number is not valid'; }
        if (city === '') { errors.cityError = 'City is required!'; }
        if (postalTest === false) { errors.postalError = 'Postal code is not valid'; }
        
        if (Object.keys(errors).length > 0) {
          this.setState({ ...this.state.errors, errors });
          return false;
        }
    
        return true;
      }

      saveInformation() {
        localStorage.setItem('customerInfo', JSON.stringify(this.state.fields));
      }

    render() {
        const { name, address, telephone, city, postalcode } = this.state.fields;
        const { nameError, addressError, telephoneError, cityError, postalError } = this.state.errors;
        return (
        <div>
            <div><h1>Delivery</h1></div>
            <Form onSubmit={ e => this.submitForm(e) }>
            <Input
                type="text"
                value={ name }
                name="name"
                htmlId="name"
                label="Name:"
                errorMessage={ nameError }
                onInput={ e => this.onInput(e) }
                onChange={()=>{}}/>
            <Input
                type="text"
                value={ address }
                name="address"
                htmlId="address"
                label="Address:"
                errorMessage={ addressError }
                onInput={ e => this.onInput(e) }
                onChange={()=>{}}/>
            <Input
                type="text"
                value={ telephone }
                name="telephone"
                htmlId="telephone"
                label="Telephone no.:"
                errorMessage={ telephoneError }
                onInput={ e => this.onInput(e) }
                onChange={()=>{}}/>
                <Input
                type="text"
                value={ city }
                name="city"
                htmlId="city"
                label="City:"
                errorMessage={ cityError }
                onInput={ e => this.onInput(e) }
                onChange={()=>{}}/>
                <Input
                type="text"
                value={ postalcode }
                name="postalcode"
                htmlId="postalcode"
                label="Postal code:"
                errorMessage={ postalError }
                onInput={ e => this.onInput(e) }
                onChange={()=>{}}/>
                
              <input
                  type="submit"
                  value="Review order"
                  className="btn btn-primary"
                  style={{ float: 'right', marginTop: '10' }}
                  onClick={ this.saveInformation() }
                  onChange={()=>{}}>
              </input>
            </Form>
        </div>
        );
    };
};

export default Delivery;