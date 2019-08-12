import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Game.scss';
import ge from '../../utils/gameEngine';
import { addPlayers, setDeckId, addCards, showError } from '../../store/actions';
import Loading from '../Loading/Loading';
import Player from '../Player/Player';
import Table from '../Table/Table';

const Game = props => {
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);

  const createPlayers = () => {
    const players = ge.createPlayers(props.numberOfPlayers, props.cardsPerPlayer);
    props.addPlayers(players);
  }

  const getCards = () => {
    ge.getCards(props.deckId, props.numberOfPlayers, props.cardsPerPlayer)
    .then(({ currentDeckId, cards }) => { 
      if (! cards.length) return props.showError('Failed to get cards');

      // If received deck ID is different save changes in store
      if (currentDeckId !== props.deckId) {
        props.setDeckId(currentDeckId);
      }

      props.addCards(cards)
      setLoading(false);
    });
  }

  const renderPlayers = () => {
    const _players = [];
    for (let i = 1; i <= props.numberOfPlayers; i++) {
      const playerId = `p${i}`;
      _players.push(<Player playerId={playerId} key={playerId}/>);
    }
    if (! _players.length) return props.showError('Failed to render players');
    setPlayers(_players);
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="game">
      <CSSTransition
        in={loading}
        timeout={500}
        classNames="loading"
        onEnter={createPlayers}
        onEntering={renderPlayers}
        onEntered={getCards}
        unmountOnExit
      >
        <Loading>Loading cards</Loading>
      </CSSTransition>

      { players }

      <Table/>
    </div>
  );
};

Game.defaultProps = {
  cardsPerPlayer: 10
}

Game.propTypes = {
  cardsPerPlayer: PropTypes.number.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  deckId: PropTypes.string.isRequired
}

const mapStateToProps = ({ deckId, numberOfPlayers }) => ({ deckId, numberOfPlayers });

export default connect(mapStateToProps, { addPlayers, setDeckId, addCards, showError })(Game);