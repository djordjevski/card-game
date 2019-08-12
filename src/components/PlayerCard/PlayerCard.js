import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import './PlayerCard.scss';
import { setStatus } from '../../store/actions';
import Card from '../Card/Card';

const PlayerCard = props => {
  const [transition, setTransition] = useState(false);

  const handleClick = () => {
    if (props.status === 'idle') {
      const _status = props.last ? 'resolving_last_hand' :  'resolving_hand_winner';
      props.setStatus(_status);
      setTransition(true);
    }
  };

  return (
    <CSSTransition
      in={transition}
      timeout={100}
      classNames="player-card"
      onEnter={() => {props.onClick(props.code)}}
    >
      <button
        type="button"
        className="player-card"
        onClick={handleClick}
      >
        <Card code={props.code} image={props.image}/>
      </button>
    </CSSTransition>
  );
}

PlayerCard.propTypes = {
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired
}

const mapStateToProps = ({ status }) => ({ status });

export default connect(mapStateToProps, { setStatus })(PlayerCard);