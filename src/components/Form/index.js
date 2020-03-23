import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, children }) => (
  <form onSubmit={ onSubmit } className="form form-horizontal">
    { children }
  </form>
);

Form.propTypes = {
  // This is the function that is called when the form is submitted
  onSubmit: PropTypes.func.isRequired,
  // this is the name of the bundle
  children: PropTypes.array.isRequired,
  
};

export default Form;