import S from '@sanity/desk-tool/structure-builder';

const newsListItem = S.listItem()
.title('News')
.child(
  S.documentTypeList('news')
  .id('news')
  .schemaType('news')
  .defaultOrdering(
    [{ field: 'date', direction: 'desc' }]
  )
);

const teamListItem = S.listItem()
.title('Team')
.child(
  S.documentTypeList('team')
  .id('team')
  .schemaType('team')
  .defaultOrdering(
    [{ field: 'order', direction: 'asc' }]
  )
);

const publicationsListItem = S.listItem()
.title('Publications')
.child(
  S.editor()
  .title('Publications')
  .id('publications')
  .schemaType('publications')
  .documentId('publications')
);

export default () =>
  S.list()
  .title('Content')
  .items([
    newsListItem,
    teamListItem,
    publicationsListItem,
  ]);
