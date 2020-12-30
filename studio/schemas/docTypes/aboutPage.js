import FdPageFilled from '@meronex/icons/fd/FdPageFilled';

export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: FdPageFilled,
  fields: [
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'staticHeroBanner',
      type: 'staticHeroBanner',
    },
    {
      name: 'richText',
      title: 'Rich Text',
      type: 'richText',
    },
    {
      name: 'imageFeatures',
      title: 'Image Features',
      type: 'imageFeatures',
    },
  ],
};
