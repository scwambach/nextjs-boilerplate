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
      name: 'staticHeroBanner',
      type: 'staticHeroBanner',
    },
    {
      name: 'richText',
      type: 'richText',
    },
    {
      name: 'imageFeatures',
      type: 'imageFeatures',
    },
  ],
};
