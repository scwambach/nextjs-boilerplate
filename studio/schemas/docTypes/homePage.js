import { MdPages } from 'react-icons/md';

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish'],
  icon: MdPages,
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
