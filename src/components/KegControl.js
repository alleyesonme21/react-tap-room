import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions'; 

class KegControl extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false
    };
  }

  handleChangingSelectedKeg = (id) => { 
    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_KEG'
    }  
    dispatch(action);                      
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg)
    dispatch(action);
    const action2 = a.toggleForm()
    dispatch(action2);
  }

  handleSellUnit = (id) => {
    const masterSellKegList = this.props.masterKegList;
    masterSellKegList.map((keg) => {
    if(keg.id === id && keg.numberLeft > 0){
      keg.numberLeft = keg.numberLeft - 1;
    }
    return keg;
    });
    this.setState({masterKegList: masterSellKegList
    });
  }

  handleClick = () => {
    if (this.props.selectedKeg != null) {
      this.setState({
        editing: false
      }); 
    } else{

    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
}

handleDeletedKeg = (id) => {
  const { dispatch } = this.props;
  const action = a.deleteKeg(id)
  dispatch(action)
  this.setState({
    selectedKeg: null 
  });
}

handleEditingKegList = (kegToEdit) => { 
  const { dispatch } = this.props;
  const action = a.addKeg(kegToEdit);
  dispatch(action)
this.setState({
  editing: false,
  })
}

handleEditClick = () => {
  this.setState({editing: true})
}
  render() {
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.props.selectedKeg} onEditKeg = {this.handleEditingKegList} />
      buttonText = 'Return to ticket List';
    }
    else if (this.props.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.props.selectedKeg} onClickingSell={this.handleSellUnit} onClickingDelete= {this.handleDeletedKeg} onClickingEdit={this.handleEditClick} /> 
      buttonText = "return to Keg List";
    }
    else if(this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />  
      buttonText = "Return to Keg List" 
    } 

    else { 
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }

    return (
    <React.Fragment>
      {currentlyVisibleState}
    <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
  }
}
KegControl.propTypes = {
masterKegList: PropTypes.object,
formVisibleOnPage: PropTypes.bool,
selectedKeg: PropTypes.object,
editing: PropTypes.bool

}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg,
    editing: state.editing
  }
}
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;