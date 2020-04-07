import React from 'react';
import PropTypes from 'prop-types';

import './page-title.scss';

const PageTitle = ({title}) => (
  <div className="title">
    <h1>{title}</h1>
  </div>
);

PageTitle.defaultProps = {
  title: 'No title'
};

PageTitle.prototype = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
