import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <React.Fragment>
      <div onClick ={() => props.whenKegClicked(props.id)}>
        <h3>keg unit</h3>
        <h3>name: {props.name}</h3>
        <h3>brand: {props.brand}</h3>
        <h3>price:$ {props.price}</h3>
        <h3>flavor: {props.flavor}</h3>
        <hr />
      </div>
    </React.Fragment>
  )
}
Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  id: PropTypes.number,
  whenKegClicked: PropTypes.func
}

export default Keg;