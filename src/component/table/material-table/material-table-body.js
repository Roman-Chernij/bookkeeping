import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

export default function MaterialTableBody(props) {

  const {
    data,
    rowsPerPage,
    page,
    columns,
    hoverRows,
    editRow,
    removeRow
  } = props;
console.log(props);
  return (
    <TableBody>
      {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
        return (
          <TableRow hover={hoverRows} role="checkbox" tabIndex={-1} key={row.code}>
            {columns.map(column => {
              if (column.id === 'action') {
                return (
                  <TableCell key={column.id} align={column.align}>
                    <IconButton aria-label="delete" onClick={() => editRow(row)}>
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => removeRow(row)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                )
              }
              const value = row[column.id];
              return (
                <TableCell key={column.id} align={column.align}>
                  {column.format && typeof value === 'number' ? column.format(value) : value}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  )
}

MaterialTableBody.defaultProps = {
  data: []
};

MaterialTableBody.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      minWidth: PropTypes.number,
      align: PropTypes.oneOf(['center', 'right', 'left']),
      format: PropTypes.func
    })
  ).isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  data: PropTypes.array,
  hoverRows: PropTypes.bool
};
