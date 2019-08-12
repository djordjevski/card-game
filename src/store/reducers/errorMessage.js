export default (state = '', action) => {
  if (action.type === 'SHOW_ERROR') {
    return action.errorMessage;
  }
  return state;
}