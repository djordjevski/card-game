import axios from 'axios';

axios.defaults.baseURL = 'https://deckofcardsapi.com/api/deck';

export default {

  // Draw cards from the deck
  // returns deck_id, cardCodes (only codes of cards pulled from the deck)
  drawFromDeck (deckId, numberOfCards) {
    return axios.get(`/${deckId}/draw/?count=${numberOfCards}`)
      .then(({ deck_id, cards }) => {
        return {
          deck_id,
          cardCodes: cards.map(card => card.code)
        }
      });
  },

  // Add cards to pile
  // returns promise
  addToPile (deckId, pileName, cardCodes) {
    return axios.get(`${deckId}/pile/${pileName}/add/?cards=${cardCodes}`)
  },

  // Shuffle pile
  // returns promise
  shufflePile (deckId, pile) {
    return axios.get(`/${deckId}/pile/${pile}/shuffle/`);
  },

  // List cards from pile
  // returns array of card objects with 'code' and 'image' props only
  listPileCards (deckId, pile) {
    return axios.get(`/${deckId}/pile/${pile}/list/`)
      .then(({ piles }) => ({
        cards: piles[pile].cards.map(({code, image}) => ({ code, image }))
      }));
  },

  // If cardCode is passed send it as a parameter,
  // otherwise draw 1 card from the pile
  // returns object with 'id' (pile ID) and 'card' props
  drawFromPile (deckId, pile, cardCode) {
    const param = cardCode ? `cards=${cardCode}` : 'count=1';
    return axios.get(`/${deckId}/pile/${pile}/draw/?${param}`)
      .then(( {cards: [ { code, image, value } ]} ) => {
        return {
          id: pile,
          card: { code, image, value }
        }
      })
  },

  // Suffle deck with given ID
  shuffleDeck (deckId) {
    return axios.get(`/${deckId}/shuffle/`)
  }
}
