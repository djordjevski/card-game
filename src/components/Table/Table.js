import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import './Table.scss';
import ge from '../../utils/gameEngine';
import { declareHandWinner, clearTable, declareGameWinner, setStatus } from '../../store/actions';
import Card from '../Card/Card';

const Table = props => {
  const table = useRef(null);
  const [receivingCards, setReceivingCards] = useState(false);

  const declareHandWinner = () => {
    ge.handWinner(props.deckId, props.table)
      .then(winner => {
        table.current.classList.add(`table--collect-${winner.position}`);
        props.declareHandWinner(winner)
    });
  }

  const clearTable = () => {
    props.clearTable();
    table.current.className = 'table';

    const _status = props.status === 'resolving_last_hand' ? 'done' : 'idle';
    props.setStatus(_status);
  };
  
  // Cards to be shown on the table
  const cards = props.table.map(({ position, card: { code, image } }) => (
    <Card
      key={position}
      className={`table__card table__card--${position}`}
      code={code}
      image={image}/>
  ));

  useEffect(() => {
    if (props.table.length) {
      setReceivingCards(true);
    }
  }, [props.table.length]);

  return (
    <CSSTransition
      in={receivingCards}
      timeout={{ enter: props.numberOfPlayers * 1000, exit: 200 }}
      classNames="table"
      onEnter={declareHandWinner}
      onEntered={() => {setReceivingCards(false)}}
      onExited={clearTable}
    >
      <div className="table" ref={table}>
        { cards }
      </div>
    </CSSTransition>
  );
};

const mapStateToProps = state => ({
  status: state.status,
  deckId: state.deckId,
  numberOfPlayers: state.numberOfPlayers,
  players: state.players,
  table: state.table
});

export default connect(mapStateToProps, { declareHandWinner, clearTable, declareGameWinner, setStatus })(Table);