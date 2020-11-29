import React from 'react';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value, numberLeft: 124, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText='Help'
      />
    </React.Fragment>
  );
}
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}


export default NewKegForm;