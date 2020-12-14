export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return !state
      default:
      return state;
  }
};