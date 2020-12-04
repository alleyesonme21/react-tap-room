import rootReducer from '../../reducers/index';
import kegListReducer from '../../reducers/keg-list-reducer';
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
})
