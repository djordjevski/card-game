import reducer from '../numberOfPlayers';

describe('status reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(0);
  });

  it('handles SET_NUMBER_OF_PLAYERS action', () => {
    const numberOfPlayers = 4
    expect(reducer(0, {
      type: 'SET_NUMBER_OF_PLAYERS',
      numberOfPlayers
    })).toEqual(numberOfPlayers);
  });

  it('handles RESTART action', () => {
    expect(reducer(0, {
      type: 'RESTART',
      deckId: 's06g3fsk9fua'
    })).toEqual(0);
  });
});