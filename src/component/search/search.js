import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { debounce } from '../../misc/debounce';

import './search.scss'

const debounceHandler = debounce(func => func(), 300);

export const Search = (props) => {
  const { variant, label, value, onSearch } = props;
  const [search, setSearch] = useState(value);

  const inputValue = value => {
    setSearch(value);
    if (typeof onSearch === 'function') {
      debounceHandler(() => onSearch(value))
    }
  };

  return (
    <div className="search">
      <TextField
        value={search}
        label={label}
        onChange={event => inputValue(event.target.value)}
        variant={variant} />
      {
        (search || '').trim() &&
        <IconButton onClick={() => inputValue('')} className="icon-reset" size="medium">
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    </div>
  )
};

Search.defaultProps = {
  variant: 'standard',
};

Search.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined'])
};
