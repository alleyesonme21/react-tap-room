import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  let action;
  const kegData = {
    name: "Brana",
    brand: "Prestige",
    price: "10",
    flavor: "Orange",
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, {type: null})).toEqual({})
  });
  test('Should successfully and new keg data to masterKegList', () => {
    const { name, brand, price, flavor, id}
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      id: { 
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      id: id
      }
    });
  });
});