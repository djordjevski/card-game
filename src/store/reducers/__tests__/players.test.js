import reducer from '../players';

describe('status reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('handles ADD_PLAYERS action', () => {
    const players_2 = {
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
        position: 'top',
        remaining: 10
      }
    };
    expect(reducer({}, {
      type: 'ADD_PLAYERS',
      players: players_2
    })).toEqual(players_2);

    const players_3 = {
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
        position: 'right',
        remaining: 10
      }
    };
    expect(reducer({}, {
      type: 'ADD_PLAYERS',
      players: players_3
    })).toEqual(players_3);

    const players_4 = {
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
    };
    expect(reducer({}, {
      type: 'ADD_PLAYERS',
      players: players_4
    })).toEqual(players_4);
  });

  it('handles ADD_CARDS action', () => {
    const currentState = {
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
    };
    const cards = [
      {
        code: '0H',
        image: 'https://deckofcardsapi.com/static/img/0H.png'
      },
      {
        code: '3D',
        image: 'https://deckofcardsapi.com/static/img/3D.png'
      },
      {
        code: '8S',
        image: 'https://deckofcardsapi.com/static/img/8S.png'
      },
      {
        code: 'JD',
        image: 'https://deckofcardsapi.com/static/img/JD.png'
      },
      {
        code: '5D',
        image: 'https://deckofcardsapi.com/static/img/5D.png'
      },
      {
        code: '4S',
        image: 'https://deckofcardsapi.com/static/img/4S.png'
      },
      {
        code: 'AC',
        image: 'https://deckofcardsapi.com/static/img/AC.png'
      },
      {
        code: '0D',
        image: 'https://deckofcardsapi.com/static/img/0D.png'
      },
      {
        code: '2C',
        image: 'https://deckofcardsapi.com/static/img/2C.png'
      },
      {
        code: '6C',
        image: 'https://deckofcardsapi.com/static/img/6C.png'
      }
    ];
    const players = reducer(currentState, {
      type: 'ADD_CARDS',
      cards
    });
    expect(players.p1.cards).toEqual(cards);
    expect(players.p2.cards).toBeUndefined();
    expect(players.p3.cards).toBeUndefined();
    expect(players.p4.cards).toBeUndefined();
  });

  it('handles DRAW_CARD action', () => {
    const currentState = {
      p1: {
        id: 'p1',
        name: 'me',
        score: 0,
        position: 'bottom',
        remaining: 10,
        cards: [
          {
            code: '0H',
            image: 'https://deckofcardsapi.com/static/img/0H.png'
          },
          {
            code: '3D',
            image: 'https://deckofcardsapi.com/static/img/3D.png'
          },
          {
            code: '8S',
            image: 'https://deckofcardsapi.com/static/img/8S.png'
          },
          {
            code: 'JD',
            image: 'https://deckofcardsapi.com/static/img/JD.png'
          },
          {
            code: '5D',
            image: 'https://deckofcardsapi.com/static/img/5D.png'
          },
          {
            code: '4S',
            image: 'https://deckofcardsapi.com/static/img/4S.png'
          },
          {
            code: 'AC',
            image: 'https://deckofcardsapi.com/static/img/AC.png'
          },
          {
            code: '0D',
            image: 'https://deckofcardsapi.com/static/img/0D.png'
          },
          {
            code: '2C',
            image: 'https://deckofcardsapi.com/static/img/2C.png'
          },
          {
            code: '6C',
            image: 'https://deckofcardsapi.com/static/img/6C.png'
          }
        ]
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
    };
    const cardCode = '5D';
    const drawnCard = currentState.p1.cards.filter(
      card => card.code === cardCode);
    const remaining = currentState.p1.remaining - 1;

    const players = reducer(currentState, {
      type: 'DRAW_CARD',
      cardCode
    });

    expect(players.p1.cards).toEqual(expect.not.arrayContaining(drawnCard));
    expect(players.p1.remaining).toEqual(remaining);
    expect(players.p2.remaining).toEqual(players.p1.remaining);
    expect(players.p3.remaining).toEqual(players.p1.remaining);
    expect(players.p4.remaining).toEqual(players.p1.remaining);
  });

  it('handles DECLARE_HAND_WINNER action', () => {
    const currentState = {
      p1: {
        id: 'p1',
        score: 11,
      },
      p2: {
        id: 'p2',
        score: 12,
      },
      p3: {
        id: 'p3',
        score: 13,
      },
      p4: {
        id: 'p4',
        score: 14,
      }
    };
    const winner = {
      id: 'p1',
      position: 'bottom',
      winnings: 27
    };
    const score = currentState[winner.id].score + winner.winnings;

    const players = reducer(currentState, {
      type: 'DECLARE_HAND_WINNER',
      winner
    });

    expect(players[winner.id].score).toEqual(score);
  });

  it('handles RESTART action', () => {
    const currentState = {
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
    };

    const players = reducer(currentState, {
      type: 'RESTART',
      deckId: 's06g3fsk9fua'
    });

    expect(players).toEqual({});
  });
});