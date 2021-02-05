import moment from 'moment';
import { BiNews } from 'react-icons/bi';
import { richEditorToPlainText } from './richEditor';

export default {
  title: 'News',
  name: 'news',
  type: 'document',
  icon: BiNews,
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
      type: 'richEditor',
    },
    {
      title: 'News entry German',
      name: 'newsEntryDe',
      type: 'richEditor',
    }
  ],
  preview: {
    select: {
      date: 'date',
      newsEntryEn: 'newsEntryEn',
    },
    prepare(selection) {
      const { date, newsEntryEn } = selection;
      return {
        title: moment(date).format('DD.MM.YYYY'),
        subtitle: richEditorToPlainText(newsEntryEn),
      }
    }
  },
  orderings: [
    {
      title: 'Date descending',
      name: 'dateDescending',
      by: [
        { field: 'date', direction: 'desc' }
      ]
    },
    {
      title: 'Date ascending',
      name: 'dateAscending',
      by: [
        { field: 'date', direction: 'asc' }
      ]
    }
  ]
}
