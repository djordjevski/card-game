import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = props => {

  // Assign class names according to card code if passed
  // and received from parrent as a prop
  let className = 'card';
  if (props.code) className += ` card--${props.code}`;
  if (props.className) className += ` ${props.className}`;

  // Add card image as a backgroundImage if passed
  const style = {};
  if (props.image) style.backgroundImage = `url(${props.image})`;

  return (
    <div className={className}>
      <div className="card__container">
        <span className="card__content card__content--face" style={style}/>
        <span className="card__content card__content--background"/>
      </div>
    </div>
  );
};

Card.propTypes = {
  code: PropTypes.string,
  image: PropTypes.string,
  className: PropTypes.string
}

export default Card;