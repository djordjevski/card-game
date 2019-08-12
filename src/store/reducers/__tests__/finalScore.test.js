import reducer from '../finalScore';

describe('finalScore reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('handles DECLARE_GAME_WINNER action', () => {
    const payload = {
      winners: [
        'Carolyn'
      ],
      scoreboard: [
        {
          id: 'p4',
          name: 'Carolyn',
          score: 169,
          position: 'right',
          remaining: 0
        },
        {
          id: 'p3',
          name: 'Rosetta',
          score: 63,
          position: 'top',
          remaining: 0
        },
        {
          id: 'p1',
          name: 'me',
          score: 31,
          position: 'bottom',
          remaining: 0,
          cards: []
        },
        {
          id: 'p2',
          name: 'Ola',
          score: 26,
          position: 'left',
          remaining: 0
        }
      ]
    };

    const finalScore = reducer({}, {
      type: 'DECLARE_GAME_WINNER',
      finalScore: payload
    });
    expect(finalScore).toEqual(payload);
  });

  it('handles RESTART action', () => {
    const currentState = {
      winners: [
        'Carolyn'
      ],
      scoreboard: [
        {
          id: 'p4',
          name: 'Carolyn',
          score: 169,
          position: 'right',
          remaining: 0
        },
        {
          id: 'p3',
          name: 'Rosetta',
          score: 63,
          position: 'top',
          remaining: 0
        },
        {
          id: 'p1',
          name: 'me',
          score: 31,
          position: 'bottom',
          remaining: 0,
          cards: []
        },
        {
          id: 'p2',
          name: 'Ola',
          score: 26,
          position: 'left',
          remaining: 0
        }
      ]
    }
    const table = reducer(currentState, {
      type: 'RESTART',
      deckId: 's06g3fsk9fua'
    });
    expect(table).toEqual({});
  });
});