import editKegReducer from '../../reducers/edit-keg-reducer';

describe('editKegReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(editKegReducer(false, {type: null})).toEqual(false)
  })
})