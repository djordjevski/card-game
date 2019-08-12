import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './StartGame.scss';
import { setNumberOfPlayers } from '../../store/actions';

const StartGame = ({ maxPlayers, setNumberOfPlayers }) => {
  const [show, setShow] = useState(false);

  // Create buttons for number of players selection
  const renderButtons = () => {
    const buttons = []
    for (let i = 2; i <= maxPlayers; i++) {
      buttons.push(
        <button
          type="button"
          className="btn select-players__button"
          onClick={() => { setNumberOfPlayers(i) }}
          key={i}
          data-testid="btn-number-of-players">
          {i} players
        </button>
      );
    }
    return buttons;
  }
  
  useEffect(() => {
    setShow(true)
  }, []);

  return (
    <CSSTransition
      appear={true}
      in={show}
      timeout={500}
      classNames="select-players"
      >
      <div className="select-players">
        <h1 className="select-players__title">
          Select number of players
        </h1>
        <div className="select-players__content">
          { renderButtons() }
        </div>
      </div>
    </CSSTransition>
  );
}

StartGame.defaultProps  = {
  maxPlayers: 4
}

StartGame.propTypes = {
  maxPlayers: PropTypes.number.isRequired,
  setNumberOfPlayers: PropTypes.func.isRequired
}

export default connect(null, { setNumberOfPlayers })(StartGame);
