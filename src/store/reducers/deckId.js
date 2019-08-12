export default (state = 'new', action) => {
  switch (action.type) {
    case 'SET_DECK_ID':
    case 'RESTART':
      return action.deckId;
    default:
      return state;
  }
};