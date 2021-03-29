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
      name: 'pageContent',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'imageFeatures' },
        { type: 'heroBanner' },
        { type: 'imageGallery' },
        { type: 'twoColCopy' },
        { type: 'eventsList' },
        { type: 'tiledLinks' },
        { type: 'formCreator' },
      ],
    },

    {
      name: 'pageDescription',
      title: 'Page Description',
      validation: (Rule) => Rule.required(),
      description:
        'For optimal search and sharing, please provide a breif description of the page. Use the "Social & SEO" preview tab at the top to see changes.',
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
