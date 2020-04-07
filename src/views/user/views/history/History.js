import React from 'react';
import PageTitle from '../../../../component/page-title/PageTitle';
import Table from '../../../../component/table';

import classes from './history.module.scss'
import { FabButton } from '../../../../component/fab-button/fab-button';
import { PageToolbar } from '../../component/page-toolbar/page-toolbar';
import { Search } from '../../../../component/search/search';

const columns = [
  { id: 'name', label: 'Name', align: 'left', },
  { id: 'code', label: 'ISO\u00a0Code' },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'center',
    format: value => value.toLocaleString(),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2),
  },
  {
    id: 'action',
    label: '',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2),
  }
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Mexico', 'MX2', 126577691, 1972550),
  createData('Mexico', 'MX3', 126577691, 1972550),
  createData('Mexico', 'MX4', 126577691, 1972550),
  createData('Mexico', 'MX5', 126577691, 1972550),
  createData('Mexico', 'MX6', 126577691, 1972550),
  createData('Mexico', 'MX7', 126577691, 1972550),
  createData('Mexico', 'MX8', 126577691, 1972550),
  createData('Mexico', 'MX9', 126577691, 1972550),
  createData('Mexico', 'MX10', 126577691, 1972550),
  createData('Mexico', 'MX11', 126577691, 1972550),
  createData('Mexico', 'MX12', 126577691, 1972550),
  createData('Mexico', 'MX13', 126577691, 1972550),
  createData('Mexico', 'MX14', 126577691, 1972550),
  createData('Mexico', 'MX15', 126577691, 1972550),
  createData('Mexico', 'MX16', 126577691, 1972550),
  createData('Mexico', 'MX17', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const History = () => {
  const titlePage = 'Страница истории';

  const editRow = event => console.log('editRow', event);
  const removeRow = event => console.log('removeRow', event);

  return (
    <>
      <PageTitle title={titlePage} />
      <div className={[classes['history-content']]}>
        <div className={`card ${classes['history-content-grid']}`}>
          <PageToolbar
            title={'Список событий'}
            renderChildren={() => (
              <>
                <Search
                  label="Search"
                  onSearch={value => console.log('Search', value)}
                  value={'test'} />
                <FabButton size="small" />
              </>
            )}
          />
          <Table
            columns={columns}
            data={rows}
            rowsCount={true}
            editRow={editRow}
            removeRow={removeRow}
          />
        </div>
      </div>
    </>
  )
};

export default History;
