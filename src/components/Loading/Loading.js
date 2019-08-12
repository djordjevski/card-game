import React from 'react';

import './Loading.scss';

export default ({ children }) => {
  return (
    <div className="loading">
      <div className="loading__spinner"></div>
      <div className="loading__message">{ children }</div>
    </div>
  );
};
