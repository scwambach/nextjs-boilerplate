import { MdPages } from 'react-icons/lib/md';

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
      name: 'heroHeading',
      title: 'heroHeading',
      validation: (Rule) => Rule.required(),
      type: 'string',
    },
    {
      name: 'bodyCopy',
      title: 'Body Copy',
      type: 'richText',
    },
    {
      name: 'imageFeatures',
      title: 'Image Features',
      type: 'imageFeatures',
    },
  ],
};
