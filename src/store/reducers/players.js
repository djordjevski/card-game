export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PLAYERS':
      return Object.assign({}, action.players);
    
    case 'ADD_CARDS':
      return {
        ...state,
        p1: {
          ...state.p1,
          cards: action.cards
        }
      }

    case 'DRAW_CARD':
      const new_state = Object.assign({}, state);

      // Remove a drawn card from the player's cards
      new_state.p1.cards = new_state.p1.cards.filter(
        card => card.code !== action.cardCode);
      
      // Decrease remaining count for all players
      const playerIds = Object.keys(new_state);
      playerIds.forEach(id => {
        new_state[id].remaining--;
      });

      return new_state;

    case 'DECLARE_HAND_WINNER':
      return {
        ...state,
        [action.winner.id]: {
          ...state[action.winner.id],
          score: state[action.winner.id].score + action.winner.winnings
        }
      }

    case 'RESTART':
      return {};
    
    default:
      return state;    
  }
};