import moment from 'moment';

import defaultEditorSettings from './defaultEditorSettings';

export default {
  title: 'News',
  name: 'news',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'create', 'delete'],
  fields: [
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YYYY',
        calendarTodayLabel: 'Today'
      }
    },
    {
      title: 'News entry English',
      name: 'newsEntryEn',
      type: 'array',
      of: [
        defaultEditorSettings(),
        {
          type: 'image'
        },
        {
          type: 'code'
        }
      ],
    },
    {
      title: 'News entry German',
      name: 'newsEntryDe',
      type: 'array',
      of: [
        defaultEditorSettings(),
        {
          type: 'image'
        },
        {
          type: 'code'
        }
      ],
    }
  ],
  preview: {
    select: {
      title: 'date',
    },
    prepare(selection) {
      const { date } = selection;
      return {
        title: moment(date).format('DD.MM.YYYY'),
      }
    }
  }
}
