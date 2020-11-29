import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const {keg, onClickingSell, onClickingDelete} = props;
  return(
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>name: {keg.name}</h3>
      <h3>brand{keg.brand}</h3>
      <h3>{keg.price}</h3>
      <h3>{keg.flavor}</h3>
      <h3>Number Left: {keg.numberLeft}</h3>
      <button onClick={props.onClickingEdit}>Update Keg</button>
      <button onClick={ () => onClickingSell(keg.id)}>Sell</button>
      <button onClick={ () => onClickingDelete(keg.id) }>Delete</button>
      <hr />
    </React.Fragment>
  );
}
KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSell: PropTypes.func,
  onClickingEdit:PropTypes.func,
  onClickingDelete: PropTypes.func
}
export default KegDetail;