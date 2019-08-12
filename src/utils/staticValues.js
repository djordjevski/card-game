export const playersDefaults = {
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
}

export const cardPoints = {
  ACE: 1,
  JACK: 12,
  QUEEN: 13,
  KING: 14
}


// Mocks ********************************* //

export const mockDoneState = {
  status: 'done',
  numberOfPlayers: 4,
  deckId: 'jwxcq0jt2hvy',
  players: {
    p1: {
      id: 'p1',
      name: 'me',
      score: 67,
      position: 'bottom',
      remaining: 0,
      cards: []
    },
    p2: {
      id: 'p2',
      name: 'Ola',
      score: 40,
      position: 'left',
      remaining: 0
    },
    p3: {
      id: 'p3',
      name: 'Rosetta',
      score: 53,
      position: 'top',
      remaining: 0
    },
    p4: {
      id: 'p4',
      name: 'Carolyn',
      score: 125,
      position: 'right',
      remaining: 0
    }
  },
  table: [],
  finalScore: {
    winners: [
      'Carolyn'
    ],
    scoreboard: [
      {
        id: 'p4',
        name: 'Carolyn',
        score: 125,
        position: 'right',
        remaining: 0
      },
      {
        id: 'p1',
        name: 'me',
        score: 67,
        position: 'bottom',
        remaining: 0,
        cards: []
      },
      {
        id: 'p3',
        name: 'Rosetta',
        score: 53,
        position: 'top',
        remaining: 0
      },
      {
        id: 'p2',
        name: 'Ola',
        score: 40,
        position: 'left',
        remaining: 0
      }
    ]
  },
  errorMessage: ''
};

export const mockErrorState = {
  status: 'error',
  errorMessage: 'Mocked error message'
}