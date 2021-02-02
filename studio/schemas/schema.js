import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import team from './team';
import news from './news';
import publications from './publications';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    team,
    news,
    publications,
  ])
});
