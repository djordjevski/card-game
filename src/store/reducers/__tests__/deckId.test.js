import reducer from '../deckId';

describe('status reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual('new');
  });

  it('handles SET_DECK_ID action', () => {
    const deckId = 's06g3fsk9fua'
    expect(reducer(0, {
      type: 'SET_DECK_ID',
      deckId
    })).toEqual(deckId);
  });

  it('handles RESTART action', () => {
    const deckId = 's06g3fsk9fua'
    expect(reducer(0, {
      type: 'RESTART',
      deckId
    })).toEqual(deckId);
  });
});