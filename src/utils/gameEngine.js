import cardsAPI from './cardsAPI';
import { playersDefaults, cardPoints } from './staticValues';

export default {

  // Create players object with default props and calculated positions
  createPlayers (numberOfPlayers, cardsPerPlayer) {
    const players= {};

    for (let i = 1; i <= numberOfPlayers; i++) {
      const id = `p${i}`;
      players[id] = Object.assign({},
        playersDefaults[id],
        { 
          position: _getPosition(id, numberOfPlayers),
          remaining: cardsPerPlayer 
        }
      );
    }

    return players;
  },



  // Get cards for all players and list p1 cards
  async getCards (deckId, numberOfPlayers, cardsPerPlayer) {
    const numberOfCards = numberOfPlayers * cardsPerPlayer;

    // Draw cards from deck and get current game deck ID
    const { deck_id: currentDeckId, cardCodes } = await cardsAPI.drawFromDeck(deckId, numberOfCards);

    // Create player piles in current deck
    await _createPiles(currentDeckId, numberOfPlayers, cardCodes, cardsPerPlayer);

    // Get p1 cards for rendering in app UI
    const { cards } = await cardsAPI.listPileCards(currentDeckId, 'p1');

    return { currentDeckId, cards };
  },



  // Draw selected card from p1 pile 
  // and get random card from each opponent
  async play (deckId, numberOfPlayers, cardCode) {

    // Suffle oponents piles before drawing
    await _shuffleOpponentsPiles(deckId, numberOfPlayers);

    let promises = [];
    for (let i = 1; i <= numberOfPlayers; i++) {
      promises.push(cardsAPI.drawFromPile(deckId, `p${i}`, i === 1 ? cardCode : ''));
    }

    return Promise.all(promises)
      .then(handCards => handCards.map(
          playerCard => Object.assign(playerCard, { position: _getPosition(playerCard.id, numberOfPlayers) })
        )
      );
  },



  // Calculate hand winner, add hand cards to winning pile
  // and return winner object
  async handWinner (deckId, hand) {

    // Calculate had winner
    const winner = _calcualteHandWinner(hand);
    
    // Move hand cards to the winning pile
    const winningPile = winner.id.replace('p', 'w');
    const cardCodes = hand.map(player => player.card.code);
    await cardsAPI.addToPile(deckId, winningPile, cardCodes);
    
    return winner;
  },



  // Create scoreboard and calculate game winner
  gameWinner (players) {
    const scoreboard = _createScorebord(players);
    const winners = _declareWinners(scoreboard);

    return { winners, scoreboard };
  },  


  // Restart game and return current deck ID
  restart (deckId) {
    return cardsAPI.shuffleDeck(deckId)
      .then(({ shuffled, deck_id }) => {

        // If deck fails to shuffle return 'new' as deck ID
        // in order to reqire new deck in next API call
        if (! shuffled) {
          return 'new';
        }

        return deck_id;
      })
  }
};



// PRIVATE METHODS //

// Create pile for each player
const _createPiles = (deckId, numberOfPlayers, cardCodes, cardsPerPlayer) => {
  let promises = [];

  // Spread cards and create API call for each player 
  // in order to create player piles in current deck
  for (let i = 1; i <= numberOfPlayers; i++) {
    const end = i * cardsPerPlayer,
          start = end - cardsPerPlayer,
          playerCardCodes = cardCodes.slice(start, end).toString();

    promises.push(cardsAPI.addToPile(deckId, `p${i}`, playerCardCodes));
  }
    
  return Promise.all(promises)
};



// Shuffle opponents piles
const _shuffleOpponentsPiles = (deckId, numberOfPlayers) => {
  let promises = [];
  for (let i = 2; i <= numberOfPlayers; i++) {
    promises.push(cardsAPI.shufflePile(deckId, `p${i}`));
  }
    
  return Promise.all(promises);
};



// Calculate players positions
const _getPosition = (id, numberOfPlayers) => {
  switch (id) {
    case 'p1':
      return 'bottom';
    case 'p2':
      return numberOfPlayers === 2 ? 'top' : 'left';
    case 'p3':
      return numberOfPlayers === 3 ? 'right' : 'top';
    default:
      return 'right';
  }
};



// Assign points to hand cards
const _calculateHandScore = hand => {
  return hand.map(playerCard => {
    let points = parseInt(playerCard.card.value);

    // Get card points from the static value
    // for the cards which value is not numeric
    if (isNaN(points)) points = cardPoints[playerCard.card.value]; 
  
    return {
      id: playerCard.id,
      position: playerCard.position,
      points
    }
  });
};



// Convert card values to pints, calculate winnings (hand total score)
const _calcualteHandWinner = hand => {
  const scoredHand = _calculateHandScore(hand);

  // Function for sorting array by points and id props
  const pointsId = (a, b) => {

    // Sort by id
    if (typeof a === 'string') {
      if (a < b) {
        return 1;
      }
      return -1;
    }

    // Sort by points
    if (a.points < b.points) {
      return 1;
    }
    if (a.points > b.points) {
      return -1;
    }

    // If points are equal sort by id
    return pointsId(a.id , b.id);
  };

  // Sort scored hand in order to decide hand winner
  scoredHand.sort(pointsId)

  const winner = scoredHand[0];
  const winnings = scoredHand.reduce((winnings, player) => winnings + player.points, 0);

  return {
    id: winner.id,
    position: winner.position,
    winnings
  };
};

const _createScorebord = players => {
  const sorter = (a, b) => {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  };
  return Object.values(players).sort(sorter);
};

const _declareWinners = scoreboard => {
  const highestScore = scoreboard[0].score;
  const winners = scoreboard.filter(player => player.score === highestScore);

  return winners.map(winner => winner.name === 'me' ? 'You' : winner.name);
};