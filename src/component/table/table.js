import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from './material-table/material-table'

import './table.scss'

export default function Table(props) {

  let { data, columns } = props;

  const {
    labelDisplayedRows,
    stickyHeader,
    ariaLabel,
    hoverRows,
    rowsCount,
    removeRow,
    editRow
  } = props;

  if (rowsCount) {
    columns = [{
      id: 'rowCounter',
      label: '#',
      minWidth: 30,
      align: 'left',
    }, ...columns];
    data = data.map((item, index) => ({
      ...item,
      rowCounter: index + 1
    }))
  }

  return <MaterialTable
    ariaLabel={ariaLabel}
    stickyHeader={stickyHeader}
    columns={columns}
    hoverRows={hoverRows}
    data={data}
    editRow={editRow}
    removeRow={removeRow}
    labelDisplayedRows={labelDisplayedRows}
  />;
}

Table.defaultProps = {
  data: [],
  stickyHeader: true,
  ariaLabel: '',
  hoverRows: true,
  editRow: () => {},
  removeRow: () => {}
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      minWidth: PropTypes.number,
      align: PropTypes.oneOf(['center', 'right', 'left']),
      format: PropTypes.func
    })
  ).isRequired,
  data: PropTypes.array,
  labelDisplayedRows: PropTypes.func,
  stickyHeader: PropTypes.bool,
  ariaLabel: PropTypes.string,
  hoverRows: PropTypes.bool,
  editRow: PropTypes.func,
  removeRow: PropTypes.func
};
