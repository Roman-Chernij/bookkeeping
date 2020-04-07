import React from 'react';
import PropTypes from 'prop-types';

import './content-title.scss';

const ContentTitle = ({title}) => (
  <div className="content-title">
    <h2>{title}</h2>
  </div>
);

ContentTitle.defaultProps = {
  title: 'No title'
};

ContentTitle.prototype = {
  title: PropTypes.string.isRequired,
};

export default ContentTitle;
