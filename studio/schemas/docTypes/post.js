import { MdCreate } from 'react-icons/lib/md';
import { FaStar } from 'react-icons/lib/fa';

export const slugify = string => {
  const a =
    'àáäâãåăæąçćčđďèéěėëêęǵḧìíïîįłḿǹńňñòóöôœøṕŕřßśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
  const b =
    'aaaaaaaaacccddeeeeeeeghiiiiilmnnnnooooooprrssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(p, c => b.charAt(a.indexOf(c)))
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
  icon: MdCreate,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input => `/blog/${slugify(input)}`,
      },
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      validation: Rule => Rule.required(),
      to: { type: 'user' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      icon: FaStar,
      validation: Rule => Rule.min(1),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      options: {
        dateFormat: 'LL',
        calendarTodayLabel: 'Set to Today',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      validation: Rule => Rule.max(80),
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      description: 'Keep it short and sweet!',
      validation: Rule => Rule.max(150).required(),
    },
  ],

  preview: {
    select: {
      title: 'title',
      user: 'user.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { user } = selection;
      return Object.assign({}, selection, {
        subtitle: `by ${user}`,
      });
    },
  },
};
