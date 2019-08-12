export const setNumberOfPlayers = numberOfPlayers => {
  // console.log('SET_NUMBER_OF_PLAYERS');
  return { 
    type: 'SET_NUMBER_OF_PLAYERS',
    numberOfPlayers
  }
};

export const setStatus = statusText => {
  return { 
    type: 'SET_STATUS',
    statusText
  }
};

export const setDeckId = deckId => {
  return {
    type: 'SET_DECK_ID',
    deckId
  }
};

export const addPlayers = players => {
  return {
    type: 'ADD_PLAYERS',
    players
  }
};

export const addCards = cards => {
  return {
    type: 'ADD_CARDS',
    cards
  }
};

export const drawCard = cardCode => {
  return {
    type: 'DRAW_CARD',
    cardCode
  }
};

export const submitCards = cards => {
  return {
    type: 'SUBMIT_CARDS',
    cards
  }
};
  
export const declareHandWinner = winner => {
  return {
    type: 'DECLARE_HAND_WINNER',
    winner
  }
}

export const clearTable = () => {
  return {
    type: 'CLEAR_TABLE',
    cards: []
  }
}

export const declareGameWinner = finalScore => {
  return {
    type: 'DECLARE_GAME_WINNER',
    finalScore
  }
}

export const restart = deckId => {
  return {
    type: 'RESTART',
    deckId
  }
}

// export const clearGameWinner = finalScore => {
//   return {
//     type: 'CLEAR_GAME_WINNER',
//     finalScore
//   }
// }

export const showError = errorMessage => {
  return {
    type: 'SHOW_ERROR',
    errorMessage
  }
}