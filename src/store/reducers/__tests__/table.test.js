import reducer from '../table';

describe('table reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('handles SUBMIT_CARDS action', () => {
    const cards = [
      {
        id: 'p1',
        card: {
          code: '0C',
          image: 'https://deckofcardsapi.com/static/img/0C.png',
          value: '10'
        },
        position: 'bottom'
      },
      {
        id: 'p2',
        card: {
          code: '4S',
          image: 'https://deckofcardsapi.com/static/img/4S.png',
          value: '4'
        },
        position: 'left'
      },
      {
        id: 'p3',
        card: {
          code: 'AH',
          image: 'https://deckofcardsapi.com/static/img/AH.png',
          value: 'ACE'
        },
        position: 'top'
      },
      {
        id: 'p4',
        card: {
          code: 'JH',
          image: 'https://deckofcardsapi.com/static/img/JH.png',
          value: 'JACK'
        },
        position: 'right'
      }
    ];
    const table = reducer([], {
      type: 'SUBMIT_CARDS',
      cards
    });
    expect(table).toEqual(cards);
  });

  it('handles CLEAR_TABLE action', () => {
    const currentState = [
      {
        id: 'p1',
        card: {
          code: '0C',
          image: 'https://deckofcardsapi.com/static/img/0C.png',
          value: '10'
        },
        position: 'bottom'
      },
      {
        id: 'p2',
        card: {
          code: '4S',
          image: 'https://deckofcardsapi.com/static/img/4S.png',
          value: '4'
        },
        position: 'left'
      },
      {
        id: 'p3',
        card: {
          code: 'AH',
          image: 'https://deckofcardsapi.com/static/img/AH.png',
          value: 'ACE'
        },
        position: 'top'
      },
      {
        id: 'p4',
        card: {
          code: 'JH',
          image: 'https://deckofcardsapi.com/static/img/JH.png',
          value: 'JACK'
        },
        position: 'right'
      }
    ];
    const table = reducer(currentState, {
      type: 'CLEAR_TABLE',
      cards: []
    });
    expect(table).toEqual([]);
  });

  it('handles RESTART action', () => {
    const currentState = [
      {
        id: 'p1',
        card: {
          code: '0C',
          image: 'https://deckofcardsapi.com/static/img/0C.png',
          value: '10'
        },
        position: 'bottom'
      },
      {
        id: 'p2',
        card: {
          code: '4S',
          image: 'https://deckofcardsapi.com/static/img/4S.png',
          value: '4'
        },
        position: 'left'
      },
      {
        id: 'p3',
        card: {
          code: 'AH',
          image: 'https://deckofcardsapi.com/static/img/AH.png',
          value: 'ACE'
        },
        position: 'top'
      },
      {
        id: 'p4',
        card: {
          code: 'JH',
          image: 'https://deckofcardsapi.com/static/img/JH.png',
          value: 'JACK'
        },
        position: 'right'
      }
    ];
    const table = reducer(currentState, {
      type: 'RESTART',
      deckId: 's06g3fsk9fua'
    });
    expect(table).toEqual([]);
  });
});