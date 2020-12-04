export default (state = null, action) => {
  switch (action.type) {
    case 'TOGGLE_KEG':
      return !state
      default:
      return state;
  }
}