import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ label, type, input, meta: { error, touched } }) => (
  <div className='input-row'>
    <label>{label}</label>
    <br />
    <input {...input} type={type} />
    {touched && error && <span className='error'>{error}</span>}
  </div>
);

let MyForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name='firstName'
        label='First Name'
        component={renderField}
        type='text'
      />

      <Field
        name='lastName'
        label='Last Name'
        component={renderField}
        type='text'
      />

      <Field name='email' label='Email' component={renderField} type='email' />

      <button type='submit'>Submit</button>
    </form>
  );
};

MyForm = reduxForm({
  // a unique name for the form
  form: 'contact'
  //destroyOnUnmount: false
})(MyForm);

export default MyForm;
