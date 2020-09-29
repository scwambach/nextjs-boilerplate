import { FaImage } from 'react-icons/lib/fa';

export default {
  title: 'Image Features',
  name: 'imageFeatures',
  type: 'object',
  icon: FaImage,
  fields: [
    {
      title: 'Flip Image Side',
      name: 'flipImageSide',
      type: 'boolean',
    },
    {
      title: 'Component Layout',
      name: 'componentLayout',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Contained', value: 'contained' },
          { title: 'Full Width', value: 'fullWidth' },
          { title: 'Large', value: 'large' },
        ],
      },
    },
    {
      title: 'Features',
      name: 'features',
      type: 'array',
      of: [
        {
          title: 'Image w/Text',
          name: 'imageWText',
          type: 'imageWText',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'features[0].heading',
      image: 'features[0].image',
    },
    prepare(selection) {
      const { title, image } = selection;
      return Object.assign({}, selection, {
        title: 'Image Features',
        subtitle: title,
        media: image,
      });
    },
  },
};
