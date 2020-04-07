import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const FadeTransition = (props) => {
  const { timeOut, children } = props;
  return (
    <CSSTransition timeout={timeOut}>
      { children }
    </CSSTransition>
  )
};

FadeTransition.defaultProps = {
  timeOut: 2000
};

FadeTransition.prototype = {
  timeOut: PropTypes.number.isRequired
};

export default FadeTransition;
