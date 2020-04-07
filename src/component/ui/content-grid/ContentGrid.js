import React from 'react';
import PropTypes from 'prop-types';

import './content-grid.scss'

export const ContentGrid = (props) => (
  <div className={`content-grid ${props.className.join(' ')}`}>
    {props.children}
  </div>
);

ContentGrid.defaultProps  = {
  className: [],
};

ContentGrid.propTypes = {
  className: PropTypes.arrayOf(PropTypes.string),
};
