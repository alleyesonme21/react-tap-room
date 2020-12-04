import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'props-types';

class KegControl extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false
    };
  }


  handleChangingSelectedKeg = (id) => {                         
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false});
  }

  handleSellUnit = (id) => {
    const masterSellKegList = this.state.masterKegList;
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
    if (this.state.selectedKeg != null) { // detail part
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      }); // detail part
    } else{ 
    this.setState(prevState => ({ 
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
}

handleAddingNewKegToList = (newKeg) => {
  const newMasterKegList = this.state.masterKegList.concat(newKeg);
  this.setState({masterKegList: newMasterKegList,
    formVisibleOnPage: false });
}

handleDeletedKeg = (id) => {
  const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
  this.setState({
    masterKegList: newMasterKegList,
    selectedKeg: null 
  });
}

handleEditingKegList = (kegToEdit) => { 
const editMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
this.setState({
  masterKegList: editMasterKegList,
  editing: false,
  selectedKeg: null
  })
}

handleEditClick = () => {
  this.setState({editing: true})
}
  render() {
    let currentlyVisibleState = null;
    let buttonText = null; // new  code 

    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegList} />
      buttonText = 'Return to ticket List';
    }
    else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingSell={this.handleSellUnit} onClickingDelete= {this.handleDeletedKeg} onClickingEdit={this.handleEditClick} /> 
      buttonText = "return to Keg List";
    }
    else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />  // new code in this line
      buttonText = "Return to Keg List" //new code 
      } 
      else { 
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />; // detail part
      buttonText = "Add Keg"; // new code
    }
    return (
    <React.Fragment>
      {currentlyVisibleState}
    <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
  }
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