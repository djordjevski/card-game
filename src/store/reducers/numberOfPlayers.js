export default (state = 0, action) => {
  switch (action.type) {
    case 'SET_NUMBER_OF_PLAYERS':
      return action.numberOfPlayers;
    case 'RESTART':
      return 0;
    default:
      return state;
  }
};