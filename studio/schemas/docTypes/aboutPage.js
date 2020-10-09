import { MdPages } from 'react-icons/md';

export default {
  name: 'aboutPage',
  title: 'About Page',
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
