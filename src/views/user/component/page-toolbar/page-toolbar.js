import React from 'react';
import PropTypes from 'prop-types';

import './page-toolbar.scss'

export const PageToolbar = (props) => {
  const { title, renderChildren } = props;
  return (
    <div className="page-toolbar">
      {
        title &&  <h3 className="page-toolbar-title">{ title }</h3>
      }
      {
        typeof renderChildren === 'function' &&
        <div
          className="page-toolbar-container"
        >
          {renderChildren()}
        </div>
      }
    </div>
  )
};

PageToolbar.propTypes = {
  title: PropTypes.string,
  renderChildren: PropTypes.func,
};
