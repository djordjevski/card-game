import * as actions from '../index';

describe('actions', () => {
  it('creates an action for setting the number of players', () => {
    const numberOfPlayers = 4;
    const expectedAction = {
      type: 'SET_NUMBER_OF_PLAYERS',
      numberOfPlayers
    }
    expect(actions.setNumberOfPlayers(numberOfPlayers)).toEqual(expectedAction);
  });

  it('creates an action for setting the aplication status', () => {
    const statusText = 'testing';
    const expectedAction = {
      type: 'SET_STATUS',
      statusText
    }
    expect(actions.setStatus(statusText)).toEqual(expectedAction);
  });

  it('creates an action for setting the dek ID', () => {
    const deckId = 's06g3fsk9fua';
    const expectedAction = {
      type: 'SET_DECK_ID',
      deckId
    }
    expect(actions.setDeckId(deckId)).toEqual(expectedAction);
  });

  it('creates an action for adding players', () => {
    const players = {
      p1: {
        id: 'p1',
        name: 'me',
        score: 0,
      },
      p2: {
        id: 'p2',
        name: 'Ola',
        score: 0,
      },
      p3: {
        id: 'p3',
        name: 'Rosetta',
        score: 0,
      },
      p4: {
        id: 'p4',
        name: 'Carolyn',
        score: 0,
      },
    };
    const expectedAction = {
      type: 'ADD_PLAYERS',
      players
    }
    expect(actions.addPlayers(players)).toEqual(expectedAction);
  });

  it('creates an action for adding cards to p1', () => {
    const cards = [
      {
        code: 'AD',
        image: 'https://deckofcardsapi.com/static/img/aceDiamonds.png'
      },
      {
        code: 'JH',
        image: 'https://deckofcardsapi.com/static/img/JH.png'
      },
      {
        code: '5H',
        image: 'https://deckofcardsapi.com/static/img/5H.png'
      },
      {
        code: '7C',
        image: 'https://deckofcardsapi.com/static/img/7C.png'
      },
      {
        code: '9C',
        image: 'https://deckofcardsapi.com/static/img/9C.png'
      },
      {
        code: '7S',
        image: 'https://deckofcardsapi.com/static/img/7S.png'
      },
      {
        code: '0D',
        image: 'https://deckofcardsapi.com/static/img/0D.png'
      },
      {
        code: 'JD',
        image: 'https://deckofcardsapi.com/static/img/JD.png'
      },
      {
        code: 'KC',
        image: 'https://deckofcardsapi.com/static/img/KC.png'
      },
      {
        code: '9S',
        image: 'https://deckofcardsapi.com/static/img/9S.png'
      }
    ];
    const expectedAction = {
      type: 'ADD_CARDS',
      cards
    }
    expect(actions.addCards(cards)).toEqual(expectedAction);
  });

  it('creates an action for drawing card', () => {
    const cardCode = '9C';
    const expectedAction = {
      type: 'DRAW_CARD',
      cardCode
    }
    expect(actions.drawCard(cardCode)).toEqual(expectedAction);
  });

  it('creates an action for submitting all players cards to the table', () => {
    const cards = [
      {
        id: 'p1',
        card: {
          code: '9C',
          image: 'https://deckofcardsapi.com/static/img/9C.png',
          value: '9'
        },
        position: 'bottom'
      },
      {
        id: 'p2',
        card: {
          code: '8S',
          image: 'https://deckofcardsapi.com/static/img/8S.png',
          value: '8'
        },
        position: 'left'
      },
      {
        id: 'p3',
        card: {
          code: 'QH',
          image: 'https://deckofcardsapi.com/static/img/QH.png',
          value: 'QUEEN'
        },
        position: 'top'
      },
      {
        id: 'p4',
        card: {
          code: 'QC',
          image: 'https://deckofcardsapi.com/static/img/QC.png',
          value: 'QUEEN'
        },
        position: 'right'
      }
    ];
    const expectedAction = {
      type: 'SUBMIT_CARDS',
      cards
    }
    expect(actions.submitCards(cards)).toEqual(expectedAction);
  });

  it('creates an action for declaring hand winner', () => {
    const winner = {
      id: 'p4',
      position: 'right',
      winnings: 43
    };
    const expectedAction = {
      type: 'DECLARE_HAND_WINNER',
      winner
    }
    expect(actions.declareHandWinner(winner)).toEqual(expectedAction);
  });

  it('creates an action for clearing the table', () => {
    const expectedAction = {
      type: 'CLEAR_TABLE',
      cards: []
    }
    expect(actions.clearTable()).toEqual(expectedAction);
  });

  it('creates an action for declaring game winner', () => {
    const finalScore = {
      winners: [
        'Rosetta'
      ],
      scoreboard: [
        {
          id: 'p3',
          name: 'Rosetta',
          score: 120,
          position: 'top',
          remaining: 0
        },
        {
          id: 'p1',
          name: 'me',
          score: 100,
          position: 'bottom',
          remaining: 0,
          cards: []
        },
        {
          id: 'p2',
          name: 'Ola',
          score: 34,
          position: 'left',
          remaining: 0
        },
        {
          id: 'p4',
          name: 'Carolyn',
          score: 24,
          position: 'right',
          remaining: 0
        }
      ]
    };
    const expectedAction = {
      type: 'DECLARE_GAME_WINNER',
      finalScore
    }
    expect(actions.declareGameWinner(finalScore)).toEqual(expectedAction);
  });

  it('creates an action for restarting the game', () => {
    const deckId = 's06g3fsk9fua';
    const expectedAction = {
      type: 'RESTART',
      deckId
    }
    expect(actions.restart(deckId)).toEqual(expectedAction);
  });

  it('creates an action for showing the error message', () => {
    const errorMessage = 'Testing error message';
    const expectedAction = {
      type: 'SHOW_ERROR',
      errorMessage
    }
    expect(actions.showError(errorMessage)).toEqual(expectedAction);
  });
});