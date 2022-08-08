import S from '@sanity/desk-tool/structure-builder';
import { BsNewspaper, BsSearch } from 'react-icons/bs';
import { AiOutlineTeam, AiOutlineHome } from 'react-icons/ai';
import { RiFilePaper2Line } from 'react-icons/ri';

const newsListItem = S.listItem()
.title('News')
.icon(BsNewspaper)
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
.icon(AiOutlineTeam)
.child(
  S.editor()
  .title('Team')
  .id('team')
  .schemaType('team')
  .documentId('team')
);

const imprintListItem = S.listItem()
  .title('Imprint')
  .icon(RiFilePaper2Line)
  .child(
    S.editor()
      .title('Imprint')
      .id('imprint')
      .schemaType('imprint')
      .documentId('imprint')
  );
  
const privacyPolicyListItem = S.listItem()
  .title('Privacy Policy')
  .icon(RiFilePaper2Line)
  .child(
    S.editor()
      .title('Privacy Policy')
      .id('policy')
      .schemaType('policy')
      .documentId('policy')
  );

const publicationsListItem = S.listItem()
.title('Publications')
.icon(RiFilePaper2Line)
.child(
  S.editor()
  .title('Publications')
  .id('publications')
  .schemaType('publications')
  .documentId('publications')
);

const homeListItem = S.listItem()
.title('Home')
.icon(AiOutlineHome)
.child(
  S.editor()
  .title('Home')
  .id('home')
  .schemaType('home')
  .documentId('home')
);

const seoListItem = S.listItem()
.title('SEO')
.icon(BsSearch)
.child(
  S.editor()
  .title('SEO')
  .id('seo')
  .schemaType('seo')
  .documentId('seo')
);

export default () =>
  S.list()
  .title('Content')
  .items([
    homeListItem,
    newsListItem,
    teamListItem,
    publicationsListItem,
    seoListItem,
    imprintListItem,
    privacyPolicyListItem
  ]);
