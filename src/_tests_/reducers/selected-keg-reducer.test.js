import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectedKegReducer(null, {type: null})).toEqual(null)
  })
  test('Should TOGGLE KEG to state to not null', () => {
    expect(selectedKegReducer(null, {type: 'TOGGLE_KEG'})).toEqual(!null);
  })
})