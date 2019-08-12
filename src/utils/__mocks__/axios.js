
const axios = {
  defaults: { baseURL: 'https://deckofcardsapi.com/api/deck' },
  // create: () => axios,
  get: jest.fn(url => Promise.resolve(_mockResponse(url))),
  post: jest.fn(() => Promise.resolve({ data: {} }))
}

const _mockResponse = url => {
  switch (url) {
    case '/new/draw/?count=20':
      return {
        deck_id: _deck_id,
        cards: _cards.slice(0, 20)
      };
    case `/${_deck_id}/pile/p1/list/`:
      return {
        piles: {
          p1: {
            cards: _cards.slice(0, 10),
            remaining: 10  
          }
        }
      };
    default:
      return { default: true }
  }
};

const _deck_id = 'd3lx0antlziy';

const _cards = [
  // 0-10
  {
    "code": "2H",
    "value": "2",
    "image": "https://deckofcardsapi.com/static/img/2H.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/2H.png",
      "svg": "https://deckofcardsapi.com/static/img/2H.svg"
    },
    "suit": "HEARTS"
  },
  {
    "code": "8H",
    "value": "8",
    "image": "https://deckofcardsapi.com/static/img/8H.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/8H.png",
      "svg": "https://deckofcardsapi.com/static/img/8H.svg"
    },
    "suit": "HEARTS"
  },
  {
    "code": "QC",
    "value": "QUEEN",
    "image": "https://deckofcardsapi.com/static/img/QC.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/QC.png",
      "svg": "https://deckofcardsapi.com/static/img/QC.svg"
    },
    "suit": "CLUBS"
  },
  {
    "code": "5S",
    "value": "5",
    "image": "https://deckofcardsapi.com/static/img/5S.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/5S.png",
      "svg": "https://deckofcardsapi.com/static/img/5S.svg"
    },
    "suit": "SPADES"
  },
  {
    "code": "AD",
    "value": "ACE",
    "image": "https://deckofcardsapi.com/static/img/aceDiamonds.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/AD.png",
      "svg": "https://deckofcardsapi.com/static/img/AD.svg"
    },
    "suit": "DIAMONDS"
  },
  {
    "code": "KH",
    "value": "KING",
    "image": "https://deckofcardsapi.com/static/img/KH.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/KH.png",
      "svg": "https://deckofcardsapi.com/static/img/KH.svg"
    },
    "suit": "HEARTS"
  },
  {
    "code": "3D",
    "value": "3",
    "image": "https://deckofcardsapi.com/static/img/3D.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/3D.png",
      "svg": "https://deckofcardsapi.com/static/img/3D.svg"
    },
    "suit": "DIAMONDS"
  },
  {
    "code": "2C",
    "value": "2",
    "image": "https://deckofcardsapi.com/static/img/2C.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/2C.png",
      "svg": "https://deckofcardsapi.com/static/img/2C.svg"
    },
    "suit": "CLUBS"
  },
  {
    "code": "9C",
    "value": "9",
    "image": "https://deckofcardsapi.com/static/img/9C.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/9C.png",
      "svg": "https://deckofcardsapi.com/static/img/9C.svg"
    },
    "suit": "CLUBS"
  },
  {
    "code": "5D",
    "value": "5",
    "image": "https://deckofcardsapi.com/static/img/5D.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/5D.png",
      "svg": "https://deckofcardsapi.com/static/img/5D.svg"
    },
    "suit": "DIAMONDS"
  },
  // 11 - 20
  {
    "code": "QD",
    "value": "QUEEN",
    "image": "https://deckofcardsapi.com/static/img/QD.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/QD.png",
      "svg": "https://deckofcardsapi.com/static/img/QD.svg"
    },
    "suit": "DIAMONDS"
  },
  {
    "code": "0H",
    "value": "10",
    "image": "https://deckofcardsapi.com/static/img/0H.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/0H.png",
      "svg": "https://deckofcardsapi.com/static/img/0H.svg"
    },
    "suit": "HEARTS"
  },
  {
    "code": "0C",
    "value": "10",
    "image": "https://deckofcardsapi.com/static/img/0C.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/0C.png",
      "svg": "https://deckofcardsapi.com/static/img/0C.svg"
    },
    "suit": "CLUBS"
  },
  {
    "code": "6D",
    "value": "6",
    "image": "https://deckofcardsapi.com/static/img/6D.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/6D.png",
      "svg": "https://deckofcardsapi.com/static/img/6D.svg"
    },
    "suit": "DIAMONDS"
  },
  {
    "code": "9S",
    "value": "9",
    "image": "https://deckofcardsapi.com/static/img/9S.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/9S.png",
      "svg": "https://deckofcardsapi.com/static/img/9S.svg"
    },
    "suit": "SPADES"
  },
  {
    "code": "0S",
    "value": "10",
    "image": "https://deckofcardsapi.com/static/img/0S.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/0S.png",
      "svg": "https://deckofcardsapi.com/static/img/0S.svg"
    },
    "suit": "SPADES"
  },
  {
    "code": "0D",
    "value": "10",
    "image": "https://deckofcardsapi.com/static/img/0D.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/0D.png",
      "svg": "https://deckofcardsapi.com/static/img/0D.svg"
    },
    "suit": "DIAMONDS"
  },
  {
    "code": "JS",
    "value": "JACK",
    "image": "https://deckofcardsapi.com/static/img/JS.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/JS.png",
      "svg": "https://deckofcardsapi.com/static/img/JS.svg"
    },
    "suit": "SPADES"
  },
  {
    "code": "4D",
    "value": "4",
    "image": "https://deckofcardsapi.com/static/img/4D.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/4D.png",
      "svg": "https://deckofcardsapi.com/static/img/4D.svg"
    },
    "suit": "DIAMONDS"
  },
  {
    "code": "7C",
    "value": "7",
    "image": "https://deckofcardsapi.com/static/img/7C.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/7C.png",
      "svg": "https://deckofcardsapi.com/static/img/7C.svg"
    },
    "suit": "CLUBS"
  },
  // 21 - 30
  {
    "code": "3C",
    "value": "3",
    "image": "https://deckofcardsapi.com/static/img/3C.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/3C.png",
      "svg": "https://deckofcardsapi.com/static/img/3C.svg"
    },
    "suit": "CLUBS"
  },
  {
    "code": "AS",
    "value": "ACE",
    "image": "https://deckofcardsapi.com/static/img/AS.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/AS.png",
      "svg": "https://deckofcardsapi.com/static/img/AS.svg"
    },
    "suit": "SPADES"
  },
  {
    "code": "6H",
    "value": "6",
    "image": "https://deckofcardsapi.com/static/img/6H.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/6H.png",
      "svg": "https://deckofcardsapi.com/static/img/6H.svg"
    },
    "suit": "HEARTS"
  },
  {
    "code": "JD",
    "value": "JACK",
    "image": "https://deckofcardsapi.com/static/img/JD.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/JD.png",
      "svg": "https://deckofcardsapi.com/static/img/JD.svg"
    },
    "suit": "DIAMONDS"
  },
  {
    "code": "KC",
    "value": "KING",
    "image": "https://deckofcardsapi.com/static/img/KC.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/KC.png",
      "svg": "https://deckofcardsapi.com/static/img/KC.svg"
    },
    "suit": "CLUBS"
  },
  {
    "code": "4C",
    "value": "4",
    "image": "https://deckofcardsapi.com/static/img/4C.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/4C.png",
      "svg": "https://deckofcardsapi.com/static/img/4C.svg"
    },
    "suit": "CLUBS"
  },
  {
    "code": "AC",
    "value": "ACE",
    "image": "https://deckofcardsapi.com/static/img/AC.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/AC.png",
      "svg": "https://deckofcardsapi.com/static/img/AC.svg"
    },
    "suit": "CLUBS"
  },
  {
    "code": "QH",
    "value": "QUEEN",
    "image": "https://deckofcardsapi.com/static/img/QH.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/QH.png",
      "svg": "https://deckofcardsapi.com/static/img/QH.svg"
    },
    "suit": "HEARTS"
  },
  {
    "code": "3H",
    "value": "3",
    "image": "https://deckofcardsapi.com/static/img/3H.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/3H.png",
      "svg": "https://deckofcardsapi.com/static/img/3H.svg"
    },
    "suit": "HEARTS"
  },
  {
    "code": "2S",
    "value": "2",
    "image": "https://deckofcardsapi.com/static/img/2S.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/2S.png",
      "svg": "https://deckofcardsapi.com/static/img/2S.svg"
    },
    "suit": "SPADES"
  },
  // 31 - 40
  {
    "code": "6S",
    "value": "6",
    "image": "https://deckofcardsapi.com/static/img/6S.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/6S.png",
      "svg": "https://deckofcardsapi.com/static/img/6S.svg"
    },
    "suit": "SPADES"
  },
  {
    "code": "AH",
    "value": "ACE",
    "image": "https://deckofcardsapi.com/static/img/AH.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/AH.png",
      "svg": "https://deckofcardsapi.com/static/img/AH.svg"
    },
    "suit": "HEARTS"
  },
  {
    "code": "6C",
    "value": "6",
    "image": "https://deckofcardsapi.com/static/img/6C.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/6C.png",
      "svg": "https://deckofcardsapi.com/static/img/6C.svg"
    },
    "suit": "CLUBS"
  },
  {
    "code": "7S",
    "value": "7",
    "image": "https://deckofcardsapi.com/static/img/7S.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/7S.png",
      "svg": "https://deckofcardsapi.com/static/img/7S.svg"
    },
    "suit": "SPADES"
  },
  {
    "code": "QS",
    "value": "QUEEN",
    "image": "https://deckofcardsapi.com/static/img/QS.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/QS.png",
      "svg": "https://deckofcardsapi.com/static/img/QS.svg"
    },
    "suit": "SPADES"
  },
  {
    "code": "7D",
    "value": "7",
    "image": "https://deckofcardsapi.com/static/img/7D.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/7D.png",
      "svg": "https://deckofcardsapi.com/static/img/7D.svg"
    },
    "suit": "DIAMONDS"
  },
  {
    "code": "4H",
    "value": "4",
    "image": "https://deckofcardsapi.com/static/img/4H.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/4H.png",
      "svg": "https://deckofcardsapi.com/static/img/4H.svg"
    },
    "suit": "HEARTS"
  },
  {
    "code": "KD",
    "value": "KING",
    "image": "https://deckofcardsapi.com/static/img/KD.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/KD.png",
      "svg": "https://deckofcardsapi.com/static/img/KD.svg"
    },
    "suit": "DIAMONDS"
  },
  {
    "code": "7H",
    "value": "7",
    "image": "https://deckofcardsapi.com/static/img/7H.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/7H.png",
      "svg": "https://deckofcardsapi.com/static/img/7H.svg"
    },
    "suit": "HEARTS"
  },
  {
    "code": "9H",
    "value": "9",
    "image": "https://deckofcardsapi.com/static/img/9H.png",
    "images": {
      "png": "https://deckofcardsapi.com/static/img/9H.png",
      "svg": "https://deckofcardsapi.com/static/img/9H.svg"
    },
    "suit": "HEARTS"
  }
];


export default axios;