import React from 'react';
import PageTitle from '../../../../component/page-title/PageTitle';
import { ContentGrid } from '../../../../component/ui/content-grid/ContentGrid';
import { ContentGridItem } from '../../../../component/ui/content-grid/ContentGridItem';

const Record = props => {
  const titlePage = 'Страница записей';
  return (
    <>
      <PageTitle title={titlePage} />
      <ContentGrid>
        <ContentGridItem>
          <h2>Test content {titlePage}</h2>
        </ContentGridItem>
      </ContentGrid>
    </>
  )
};

export default Record;
