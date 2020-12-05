import rootReducer from '../../reducers/index';
import kegListReducer from '../../reducers/keg-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import editKegReducer from '../../reducers/edit-keg-reducer';
import { createStore } from 'redux';


let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      masterKegList: {},
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    })
  })
  test('Check the initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, {type: null}));
  })
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, {type: null}))
  })
  test('Check the initial state of selectedKegreducer', () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, {type: null}))
  })
  test('Check the initial state of editKegReducer matches the root reducer', () => {
    expect(store.getState().editing).toEqual(editKegReducer(undefined, {type: null}))
  })
})
