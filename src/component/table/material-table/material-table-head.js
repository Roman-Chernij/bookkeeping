import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types';

export default function MaterialTableHead(props) {
const { columns } = props
  const defaultAlign = 'right';
  return (
    <TableHead>
      <TableRow>
        {columns.map(column => (
          <TableCell
            key={column.id}
            align={column.align || defaultAlign}
            style={{minWidth: column.minWidth}}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

MaterialTableHead.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      minWidth: PropTypes.number,
      align: PropTypes.oneOf(['center', 'right', 'left']),
      format: PropTypes.func
    })
  ).isRequired,
};
