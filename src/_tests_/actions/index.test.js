import * as actions from './../../actions';

describe('Tap room action', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  })
  it('toggleForm should create TOGGLE action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE'
    });
  });
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Brana', brand: 'Prestige', price: 10, flavor: 'Orange', id: 1})).toEqual({
      type: 'ADD_KEG',
      name: 'Brana', 
      brand: 'Prestige',
      price: 10, 
      flavor: 'Orange',
      id: 1
    })
  })
})