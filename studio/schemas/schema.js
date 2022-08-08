import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import team from './team';
import person from './person';
import news from './news';
import publications from './publications';
import simpleEditor from './simpleEditor';
import richEditor from './richEditor';
import gallery from './gallery';
import home from './home';
import seo from './seo';
import downloadButton from './downloadButton';
import linkButton from './linkButton';
import imprint from './imprint';
import policy from './policy'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    team,
    person,
    news,
    publications,
    simpleEditor,
    richEditor,
    gallery,
    home,
    seo,
    downloadButton,
    linkButton,
    imprint,
    policy
  ])
});
