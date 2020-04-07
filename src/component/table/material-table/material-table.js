import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import MaterialTablePagination from './material-table-pagination';
import MaterialTableHead from './material-table-head';
import MaterialTableBody from './material-table-body';

const paginationHeight = '52px';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  container: {
    maxHeight: `calc(100% - ${paginationHeight})`,
    flex: '1 0 auto'
  },
  pagination: {
    height: paginationHeight,
  }
});

export default function MaterialTable(props) {
  const {
    columns,
    data,
    stickyHeader,
    ariaLabel,
    hoverRows,
    editRow,
    removeRow
  } = props;

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={`table-container ${classes.root}`}>
      <TableContainer className={classes.container}>
        <Table
          stickyHeader={stickyHeader}
          aria-label={ariaLabel}
        >
          <MaterialTableHead
            columns={columns}
          />
          <MaterialTableBody
            columns={columns}
            hoverRows={hoverRows}
            data={data}
            page={page}
            editRow={editRow}
            removeRow={removeRow}
            rowsPerPage={rowsPerPage}
          />
        </Table>
      </TableContainer>
      <MaterialTablePagination
        rowsPerPage={rowsPerPage}
        page={page}
        className={[classes.pagination]}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        count={data.length} onChangePage={handleChangePage}
      />
    </div>
  );
}
