import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './App.scss';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import StartGame from '../StartGame/StartGame';
import Game from '../Game/Game';
import FinalScore from '../FinalScore/FinalScore';

const App = ({ status, errorMessage }) => {

  // Render view depending on game status
  const renderView = () => {
    switch (status) {
      case 'error':
          return <ErrorMessage title="Aplication error!" message={errorMessage}/>;
      case 'awaiting_players':
          return <StartGame/>;
      case 'done':
          return <FinalScore/>;
      default:
          return <Game/>;
    }
  };

  return (
    <div className="app">
      <ErrorBoundary>{renderView()}</ErrorBoundary>
    </div>
  );
};

App.propTypes = {
  status: PropTypes.string.isRequired,
  errorMessage: PropTypes.string
}

const mapStateToProps = ({ status, errorMessage }) => ({ status, errorMessage });

export default connect(mapStateToProps, {})(App);