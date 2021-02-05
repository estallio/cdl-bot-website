import S from '@sanity/desk-tool/structure-builder';
import { BsNewspaper, BsSearch } from 'react-icons/bs';
import { AiOutlineTeam, AiOutlineHome } from 'react-icons/ai';
import { RiFilePaper2Line, RiLayoutBottom2Line } from 'react-icons/ri';
import home from './schemas/home';

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

const footerListItem = S.listItem()
.title('Footer')
.icon(RiLayoutBottom2Line)
.child(
  S.editor()
  .title('Footer')
  .id('footer')
  .schemaType('footer')
  .documentId('footer')
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
    footerListItem,
    seoListItem,
  ]);