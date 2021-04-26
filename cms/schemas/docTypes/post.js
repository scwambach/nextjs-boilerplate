import FiStar from '@meronex/icons/fi/FiStar';
import SuCreate from '@meronex/icons/su/SuCreate';
import { mainImage, objectTitle, slug, slugWarning } from '../commonFields';

export const slugify = (string) => {
  const a =
    'àáäâãåăæąçćčđďèéěėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
  const b =
    'aaaaaaaaacccddeeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(p, (c) => b.charAt(a.indexOf(c)))
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: SuCreate,
  fields: [
    { ...objectTitle },
    { ...slugWarning },
    { ...slug('blog') },
    { ...mainImage },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      icon: FiStar,
      validation: (Rule) => Rule.min(1),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      options: {
        dateFormat: 'LL',
        calendarTodayLabel: 'Set to Today',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bodyContent',
      title: 'Body Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
};
