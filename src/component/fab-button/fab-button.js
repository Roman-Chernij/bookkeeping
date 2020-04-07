import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';

export const FabButton = (props) => {
  const {variant, size, color, ariaLabel, renderIcon, disableFocusRipple} = props;
  return (
    <Fab
      color={color}
      disableFocusRipple={disableFocusRipple}
      variant={variant}
      size={size}
      aria-label={ariaLabel}
    >
      {renderIcon()}
    </Fab>
  )
};

FabButton.defaultProps = {
  disableFocusRipple: false,
  variant: 'extended',
  size: 'medium',
  color: 'default',
  ariaLabel: 'button',
  renderIcon: () => <AddIcon size="large"/>
};


FabButton.propTypes = {
  renderIcon: PropTypes.func,
  ariaLabel: PropTypes.string,
  disableFocusRipple: PropTypes.bool,
  variant: PropTypes.oneOf(['round', 'extended']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary'])
};
