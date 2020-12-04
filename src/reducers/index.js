import formVisibleReducer from './form-visible-reducer';
import selectedKegReducer from './selected-keg-reducer';
import editKegReducer from './edit-keg-reducer';
import kegListreducer from './keg-list-reducer';
import  { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListreducer,
  selectedKeg: selectedKegReducer,
  editing: editKegReducer
});
export default rootReducer;