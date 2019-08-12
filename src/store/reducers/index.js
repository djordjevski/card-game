import { combineReducers } from 'redux';

import status from './status';
import numberOfPlayers from './numberOfPlayers';
import deckId from './deckId';
import players from './players';
import table from './table';
import finalScore from './finalScore';
import errorMessage from './errorMessage';

export default combineReducers({
  status,
  numberOfPlayers,
  deckId,
  players,
  table,
  finalScore,
  errorMessage
});