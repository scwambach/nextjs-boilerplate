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
      title: 'Contained',
      name: 'contained',
      type: 'boolean',
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
