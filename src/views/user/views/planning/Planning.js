import React from 'react';
import PageTitle from '../../../../component/page-title/PageTitle';
import { ContentGrid } from '../../../../component/ui/content-grid/ContentGrid';
import { ContentGridItem } from '../../../../component/ui/content-grid/ContentGridItem';
import { PlanningContent } from './planning-content/PlanningContent';

const Planning = props => {
  const titlePage = 'Страница планирования';
  return (
    <>
      <PageTitle title={titlePage} />
      <ContentGrid>
        <ContentGridItem>
          <PlanningContent />
        </ContentGridItem>
      </ContentGrid>
    </>
  )
};

export default Planning;
