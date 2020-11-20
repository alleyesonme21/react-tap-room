import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value, id: v4()})

  //   event.preventDefault();
  //   console.log(event.target.name.value);
  //   console.log(event.target.brand.value);
  //   console.log(event.target.price.value);
  //   console.log(event.target.flavor.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
      <input
      type='text'
      name='name'
      placeholder=' Name'/>
      <input 
      type='text'
      name='brand'
      placeholder='brand' />
      <input 
      type='text'
      name='price'
      placeholder='price' />
      <input
      type='text'
      name='flavor'
      placeholder='flavor'
      />
      <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}


export default NewKegForm;