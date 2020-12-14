export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
})

export const toggleForm = () => ({
  type: 'TOGGLE'
});

export const addKeg = (keg) => {
  const { name, brand, price, flavor, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    id: id
  }
}