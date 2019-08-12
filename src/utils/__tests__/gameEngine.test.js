// import mockAxios from "axios";
import ge from '../gameEngine';

const cardsPerPlayer = 10;

describe('createPlayers method', () => {
  let numberOfPlayers;

  it('creates players object for 2 players', () => {
    const expected = {
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
    numberOfPlayers = 2;
    const players = ge.createPlayers(numberOfPlayers, cardsPerPlayer);

    expect(players.p1).toEqual(expected.p1);
    expect(players.p2).toEqual(expected.p2);
    expect(players.p3).toBeUndefined();
    expect(players.p4).toBeUndefined();
  });

  it('creates players object for 3 players', () => {

    const expected = {
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
    numberOfPlayers = 3;
    const players = ge.createPlayers(numberOfPlayers, cardsPerPlayer);

    expect(players.p1).toEqual(expected.p1);
    expect(players.p2).toEqual(expected.p2);
    expect(players.p3).toEqual(expected.p3);
    expect(players.p4).toBeUndefined();
  });

  it('creates players object for 4 players', () => {
    const expected = {
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
    numberOfPlayers = 4;
    const players = ge.createPlayers(numberOfPlayers, cardsPerPlayer);

    expect(players.p1).toEqual(expected.p1);
    expect(players.p2).toEqual(expected.p2);
    expect(players.p3).toEqual(expected.p3);
    expect(players.p4).toEqual(expected.p4);
  });
});

describe('getCards method', () => {
  // const cardsPerPlayer = 10;
  // let numberOfPlayers;
  
  it('provides deck ID', async () => {
    const deckId = 'new';
    const numberOfPlayers = 2; 
    const expectedDeckId = 'd3lx0antlziy';

    const { currentDeckId, cards } = await ge.getCards(deckId, numberOfPlayers, cardsPerPlayer);

    expect(currentDeckId).toBe(expectedDeckId);
    expect(cards.length).toEqual(cardsPerPlayer);
  });
});