import cardsAPI from '../cardsAPI';

describe('cardsAPI', () => {
  it('draws cards from the deck and returns deck_id and cardCodes', async () => {
    const deckId = 'new';
    const numberOfCards = 20;
    const expectedDeckId = 'd3lx0antlziy';

    const { deck_id, cardCodes } = await cardsAPI.drawFromDeck(deckId, numberOfCards);

    expect(deck_id).toBe(expectedDeckId);
    expect(cardCodes.length).toEqual(numberOfCards);
  });

  it('lists cards from pile and returns array of card objects with code and image props', async () => {
    const deckId = 'd3lx0antlziy';
    const pile = 'p1';

    const { cards } = await cardsAPI.listPileCards(deckId, pile);

    expect(cards[0]).toHaveProperty('code');
    expect(cards[0]).toHaveProperty('image');
    expect(Object.keys(cards[0]).length).toEqual(2);
  });
});