import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Reference = props => {

  const {children, toGo} = props;

  return (
    <Link to={toGo}>
      {children}
    </Link>
  )
};

Reference.defaultProps = {
  children: '',
  toGo: '/'
};

Reference.propTypes = {
  children: PropTypes.string,
  toGo: PropTypes.string
};

export default Reference
