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
};
