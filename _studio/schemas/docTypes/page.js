import FdPageMultiple from '@meronex/icons/fd/FdPageMultiple';
import AiFillWarning from '@meronex/icons/ai/AiFillWarning';
import { slugify } from './post';

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
      name: 'gridNote2',
      type: 'note',
      options: {
        icon: AiFillWarning,
        headline: 'Hold up!',
        message:
          'Please do not type your own slug in the Slug field. Just click "Generate" button.',
        tone: 'caution',
      },
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
      title: 'Body Content',
      name: 'bodyContent',
      validation: (Rule) => Rule.required(),
      type: 'blockContent',
    },
    {
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      rows: 4,
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
      return { ...selection, title, subtitle: `${slug}` };
    },
  },
};
