import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
 
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, {type: null})).toEqual({})
  });

  let action;
  const kegData = {
    name: "Brana",
    brand: "Prestige",
    price: 10,
    flavor: "Orange",
    id: 1
  }
  test('Should successfully and new keg data to masterKegList', () => {
    const { name, brand, price, flavor, id } = kegData;
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

  const exState = {
    1: {name: 'Brana',
    brand: 'Prestige',
    price: 10,
    flavor: 'Orange',
    id: 1 },
    2: {name: 'JSEB',
    brand: 'Bongou',
    price: 20,
    flavor: 'Fraise',
    id: 2 }
  }
  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 2
    }
    expect(kegListReducer(exState, action)).toEqual({
      1: {
        name: 'Brana',
        brand: 'Prestige',
        price: 10,
        flavor: 'Orange',
        id: 1 }
    })
  })
});