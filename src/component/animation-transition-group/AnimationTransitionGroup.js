import React from 'react';
import PropTypes from 'prop-types';
import FadeTransition from './fade-transition/FadeTransition';
import Portal from '../portal/Portal';

const AnimationTransitionGroup = props => {

  const {type, timeOut, isShow} = props;

  const chouseCurrentComponent = () => {
    const transitionElement = {
      fade: FadeTransition
    };
    if (type && Object.keys(transitionElement).includes(type)) {
      return transitionElement[type]
    } else {
      return null
    }
  };

  const Component = isShow ? chouseCurrentComponent() : null;

  return(
    Component ?
      <Portal>
        <Component timeOut={timeOut}>
          {
            props.children
          }
        </Component>
      </Portal> : null
  )
};

AnimationTransitionGroup.defaultProps = {
  type: 'noName',
  timeOut: 300,
  isShow: false
};

AnimationTransitionGroup.prototype = {
  type: 'fade' | '',
  timeOut: PropTypes.number.isRequired,
  isShow: PropTypes.boolean
};


export default AnimationTransitionGroup
