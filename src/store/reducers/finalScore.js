export default (state = {}, action) => {
  switch (action.type) {
    case 'DECLARE_GAME_WINNER':
      return Object.assign({}, action.finalScore);
    case 'ADD_PLAYERS':
    case 'RESTART':
      return {};
    default:
      return state;    
  }
}