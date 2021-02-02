import S from '@sanity/desk-tool/structure-builder';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const pageItemsIds = [
  'publications',
];

const pageItems = pageItemsIds.map(item => {
  return S.listItem()
  .title(capitalizeFirstLetter(item))
  .child(
    S.editor()
    .title(capitalizeFirstLetter(item))
    .id(item)
    .schemaType(item)
    .documentId(item)
  );
});

export default () =>
  S.list()
  .title('Content')
  .items([
    ...S.documentTypeListItems().filter(listItem => !pageItemsIds.includes(listItem.getId())),
    ...pageItems,
  ]);
