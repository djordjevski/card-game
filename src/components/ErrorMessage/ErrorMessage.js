import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import "./ErrorMessage.scss"
import ge from '../../utils/gameEngine';
import { restart } from '../../store/actions';

const ErrorMessage = props => {
  const [show, setShow] = useState(false);

  const restart = () => {
     ge.restart(props.deckId)
      .then(deckId => {
        props.restart(deckId);
      });
  }

  useEffect(() => {
    setShow(true)
  }, []);
  
  return (
    <CSSTransition
      in={show}
      timeout={500}
      classNames="error"
      unmountOnExit
    >
      <div className="error">
        <div className="error__message">
          <span className="error__icon" role="img" aria-labelledby="warning">⚠️</span>
          <h1 className="error__title">{props.title}</h1>
          <p className="error__text">{props.message}</p>
          <button type="button" className="btn btn--small" onClick={() => { restart() }}>Restart game</button>
        </div>
      </div>
    </CSSTransition>
  );
}
ErrorMessage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  deckId: PropTypes.string.isRequired,
  restart: PropTypes.func.isRequired
}

const mapStateToProps = ({ deckId }) => ({ deckId });

export default connect(mapStateToProps, { restart })(ErrorMessage);