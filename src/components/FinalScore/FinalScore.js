import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import './FinalScore.scss';
import ge from '../../utils/gameEngine';
import { setDeckId, setStatus, declareGameWinner } from '../../store/actions';

const FinalScore = ({ players, declareGameWinner, ...props }) => {
  const [show, setShow] = useState(false);

  // Play againg or start new game
  const restart = newGame => {
    ge.restart(props.deckId)
      .then(currentDeckId => {

        // If received deck ID is different save changes in store
        if (currentDeckId !== props.deckId) {
          props.setDeckId(currentDeckId);
        }

        const _status = newGame ? 'awaiting_players' : 'creating_players';
        props.setStatus(_status);
      });
  }

  const renderTitle = () => {
    if (! show) return;

    const winners = props.finalScore.winners;

    // Single winner
    if (winners.length === 1) {
      return winners[0] === 'You' ? 'You won!' : `Winner is ${winners[0]}!`
    }

    // Multiple winners
    let text = 'Winners are ';

    winners.forEach((winner, index) => {
      let separator = '';
      if (index > 0) {
        separator = index + 1 === winners.length ? ' and ' : ', ';
      }
      text += `${separator}${winner}`;
    });

    return text;
  };

  const renderScoreboard = () => {
    if (! show) return;

    return props.finalScore.scoreboard.map(
      player => (
        <li
          key={player.id}
          className={`scoreboard__item ${player.id === 'p1' ? 'scoreboard__item--my-score': ''}`}>
          <span className="scoreboard__name">{player.name}</span>
          <span className="scoreboard__score">{player.score}</span>
        </li>
      )
    );
  };

  useEffect(() => {
    (() => {
      const final = ge.gameWinner(players);
      declareGameWinner(final);
      setShow(true);
    })();
  }, [players, declareGameWinner]);

  return  (
    <CSSTransition
      appear={true}
      in={show}
      timeout={500}
      classNames="final-score">
       <div className="final-score">
        <h1 className="final-score__title">{renderTitle()}</h1>

        <div className="final-score__content">
          <ul className="final-score__scoreboard scoreboard">{renderScoreboard()}</ul>

          <div className="final-score__buttons">
            <button type="button" className="btn" onClick={() => {restart()}}>Play again</button>
            <button type="button" className="btn" onClick={() => {restart(true)}}>New game</button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

const mapStateToProps = state => {
  return {
    players: state.players,
    deckId: state.deckId,
    finalScore: state.finalScore
  };
};

export default connect(mapStateToProps, { setDeckId, setStatus, declareGameWinner })(FinalScore);