import React from 'react';
import PropTypes from 'prop-types';

export const ContentGridItem = (props) => (
  <div className={`content-grid__item ${props.className.join(' ')}`}>
    {props.children}
  </div>
);


ContentGridItem.defaultProps  = {
  className: [],
};

ContentGridItem.propTypes = {
  className: PropTypes.arrayOf(PropTypes.string),
};
