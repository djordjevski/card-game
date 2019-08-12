import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Player.scss';
import ge from '../../utils/gameEngine';
import { drawCard, submitCards, showError } from '../../store/actions';
import Card from '../Card/Card';
import PlayerCard from '../PlayerCard/PlayerCard';

const Player = props => {
  const [hideCards, setHideCards] = useState(true);

  const play = cardCode => {
    if (props.status !== 'idle') return props.showError('Not ready to make a move yet');
    if (! cardCode)  return props.showError('Not sure which card to draw');

    ge.play(props.deckId, props.numberOfPlayers, cardCode)
      .then(cards => {
        if (! cards || ! cards.length) return props.showError('Could not get opponents cards');
        props.drawCard(cardCode);
        props.submitCards(cards);
      })
  }

  const renderCards = () => {
    let cards = [];

    // If cards are assigned to the player render clickable cards
    if (props.player.cards) {
      cards =  props.player.cards.map(({code, image}) => (
        <PlayerCard
          key={code}
          code={code}
          image={image}
          last={props.player.cards.length === 1}
          onClick={()=> { play(code) }}/>
        )
      );

      if (! cards.length && props.player.remaining) {
        props.showError('Failed to render cards');
        return;
      }

      return (
        <CSSTransition
          appear={true}
          in={hideCards}
          timeout={{enter:100, exit:1000}}
          classNames="player__cards"
          onEntered={() => { setHideCards(false) }}>
          <div className={`player__cards player__cards--${props.player.remaining}`}>
            { cards }
          </div>
        </CSSTransition>
      );
    }

    // Render anonymous cards by default
    for (let i = 0; i < props.player.remaining; i++) {
      cards.push(<Card key={i} className="card--hidden"/>);
    }

    if (! cards.length && props.player.remaining) {
      props.showError('Failed to render cards');
      return;
    }
    return <div className="player__cards">{ cards }</div>;
  };

  return (
    <div className={`player player--${props.player.position}`}>
      <div className="player__info">
        <h3 className="player__name">{props.player.name}</h3>
        <p className="player__score">Score: {props.player.score}</p>
      </div>
      { renderCards() }
    </div>
  );
};

Player.propTypes = {
  status: PropTypes.string.isRequired,
  numberOfPlayers: PropTypes.number.isRequired,
  deckId: PropTypes.string.isRequired,
  player: PropTypes.object.isRequired,
  drawCard: PropTypes.func.isRequired,
  submitCards: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  status: state.status,
  numberOfPlayers: state.numberOfPlayers,
  deckId: state.deckId,
  player: Object.assign({}, state.players[ownProps.playerId])
});

export default connect(mapStateToProps, { drawCard, submitCards, showError })(Player);