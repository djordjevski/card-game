export default (state = 'awaiting_players', action) => {
  switch(action.type) {
    case 'SET_STATUS':
      return action.statusText;

    case 'SET_NUMBER_OF_PLAYERS':
    case 'ADD_PLAYERS':
      return 'creating_players';

    case 'ADD_CARDS':
    case 'CLEAR_TABLE':
      return 'idle';

    case 'DECLARE_GAME_WINNER':
      return 'done';

    case 'RESTART':
      return 'awaiting_players';

    case 'SHOW_ERROR':
      return 'error';

    default:
      return state;
  }
};