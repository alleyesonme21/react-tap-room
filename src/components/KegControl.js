import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';

class KegControl extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [], // new code
      selectedKeg: null // new code for detail component
    };
    this.handleClick = this.handleClick.bind(this); // new code here
  }

  hadleChangingSelectedKeg = (id) => {  // detail component                        
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
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

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; // new  code 

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} /> //  detail part
      buttonText = "return to Keg List";
    }

    else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />  // new code in this line
      buttonText = "Return to Keg List" //new code 
      } else { 
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
  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList,
      formVisibleOnPage: false });
  }
  
}


export default KegControl;