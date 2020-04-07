import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import PropTypes from 'prop-types';

export default function MaterialTablePagination(props) {
  const {
    className,
    rowsPerPageOptions,
    count,
    rowsPerPage,
    page,
    labelDisplayedRows,
    onChangePage,
    onChangeRowsPerPage
  } = props;

  return (
    <TablePagination
      className={`table-pagination  ${className.join(' ')}`}
      rowsPerPageOptions={rowsPerPageOptions}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      labelDisplayedRows={labelDisplayedRows}
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
    />
  )
}

MaterialTablePagination.defaultProps = {
  className: [],
  rowsPerPageOptions: [10, 20, 50],
  labelDisplayedRows:   (
    { from, to, count }) =>
    `${from}-${to === -1 ? count : to} of  ${count !== -1 ? count : to}`
};

MaterialTablePagination.propTypes = {
  count: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangeRowsPerPage: PropTypes.func.isRequired,
  className: PropTypes.arrayOf(PropTypes.string),
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  labelDisplayedRows: PropTypes.func
};
