import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store/reducers';
import PropTypes from 'prop-types';

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <Provider store={store}>
      { children }
    </Provider>
  );
};

Root.propTypes = {
  children: PropTypes.element.isRequired
} 

export default Root;