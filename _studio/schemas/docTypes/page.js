import { slugify } from './post';
import FdPageMultiple from '@meronex/icons/fd/FdPageMultiple';

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: FdPageMultiple,
  fields: [
    {
      name: 'title',
      title: 'Title',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) => slugify(input),
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'pageContent',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'heroBanner' },
        { type: 'richText' },
        { type: 'imageFeatures' },
        { type: 'imageGallery' },
      ],
    },
    {
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      rows: '4',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      slug: 'slug.current',
    },
    prepare(selection) {
      const { title, slug } = selection;
      return Object.assign({}, selection, {
        title,
        subtitle: `${slug}`,
      });
    },
  },
};
