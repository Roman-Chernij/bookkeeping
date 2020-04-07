import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    type,
    children,
    OnClick,
    className,
    disabled
  } = props;

  return (
    <button
      onClick={OnClick}
      disabled={disabled}
      className={`button ${className.join()} ${disabled ? 'button-disabled' : ''}`}
      type={type}>
      {children}
    </button>
  )
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  className: []
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  OnClick: PropTypes.func,
  className: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool.isRequired
};

export default Button;
