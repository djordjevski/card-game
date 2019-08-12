import reducer from '../status';

describe('status reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual('awaiting_players');
  });

  it('handles SET_STATUS action', () => {
    expect(reducer('awaiting_players', {
      type: 'SET_STATUS',
      statusText: 'testing'
    })).toEqual('testing');
  });

  it('handles SET_NUMBER_OF_PLAYERS action', () => {
    expect(reducer('awaiting_players', {
      type: 'SET_NUMBER_OF_PLAYERS',
      numberOfPlayers: 4
    })).toEqual('creating_players');
  });

  it('handles ADD_PLAYERS action', () => {
    expect(reducer('awaiting_players', {
      type: 'SET_NUMBER_OF_PLAYERS',
      players: {
        p1: {
          id: 'p1',
          name: 'me',
          score: 0,
          position: 'bottom',
          remaining: 10
        },
        p2: {
          id: 'p2',
          name: 'Ola',
          score: 0,
          position: 'left',
          remaining: 10
        },
        p3: {
          id: 'p3',
          name: 'Rosetta',
          score: 0,
          position: 'top',
          remaining: 10
        },
        p4: {
          id: 'p4',
          name: 'Carolyn',
          score: 0,
          position: 'right',
          remaining: 10
        }
      }
    })).toEqual('creating_players');
  });

  it('handles ADD_CARDS action', () => {
    expect(reducer('awaiting_players', {
      type: 'ADD_CARDS',
      cards: [
        {
          code: '6S',
          image: 'https://deckofcardsapi.com/static/img/6S.png'
        },
        {
          code: 'KS',
          image: 'https://deckofcardsapi.com/static/img/KS.png'
        },
        {
          code: '3C',
          image: 'https://deckofcardsapi.com/static/img/3C.png'
        },
        {
          code: '9H',
          image: 'https://deckofcardsapi.com/static/img/9H.png'
        },
        {
          code: '7D',
          image: 'https://deckofcardsapi.com/static/img/7D.png'
        },
        {
          code: '5C',
          image: 'https://deckofcardsapi.com/static/img/5C.png'
        },
        {
          code: '2D',
          image: 'https://deckofcardsapi.com/static/img/2D.png'
        },
        {
          code: 'JC',
          image: 'https://deckofcardsapi.com/static/img/JC.png'
        },
        {
          code: '4C',
          image: 'https://deckofcardsapi.com/static/img/4C.png'
        },
        {
          code: '5D',
          image: 'https://deckofcardsapi.com/static/img/5D.png'
        }
      ]
    })).toEqual('idle');
  });

  it('handles CLEAR_TABLE action', () => {
    expect(reducer('awaiting_players', {
      type: 'CLEAR_TABLE',
      cards: []
    })).toEqual('idle');
  });

  it('handles DECLARE_GAME_WINNER action', () => {
    expect(reducer('awaiting_players', {
      type: 'DECLARE_GAME_WINNER',
      finalScore: {
        winners: [
          'Ola'
        ],
        scoreboard: [
          {
            id: 'p2',
            name: 'Ola',
            score: 165,
            position: 'left',
            remaining: 0
          },
          {
            id: 'p4',
            name: 'Carolyn',
            score: 61,
            position: 'right',
            remaining: 0
          },
          {
            id: 'p3',
            name: 'Rosetta',
            score: 33,
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
          }
        ]
      }
    })).toEqual('done');
  });

  it('handles RESTART action', () => {
    expect(reducer('awaiting_players', {
      type: 'RESTART',
      deckId: 's06g3fsk9fua'
    })).toEqual('awaiting_players');
  });

  it('handles SHOW_ERROR action', () => {
    expect(reducer('awaiting_players', {
      type: 'SHOW_ERROR',
      errorMessage: 'Test error message'
    })).toEqual('error');
  });
});