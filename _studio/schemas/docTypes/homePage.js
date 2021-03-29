import BiHome from '@meronex/icons/bi/BiHome';

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: BiHome,
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
      name: 'pageContent',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'imageFeatures' },
        { type: 'heroBanner' },
        { type: 'imageGallery' },
        { type: 'twoColCopy' },
        { type: 'eventsList' },
        { type: 'formCreator' },
      ],
    },
    {
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      rows: 4,
    },
  ],
};
