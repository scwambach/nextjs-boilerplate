import { FaImage } from 'react-icons/lib/fa';

export default {
  title: 'Image Gallery',
  name: 'imageGallery',
  type: 'object',
  icon: FaImage,
  fields: [
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      icon: FaImage,
      of: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          validation: Rule => Rule.required(),
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      title: 'No Margin',
      name: 'noMargin',
      type: 'boolean'
    },
  ],
  preview: {
    select: {
      image: 'gallery[0].asset',
    },
    prepare(selection) {
      const { image } = selection;
      return Object.assign({}, selection, {
        title: 'Image Gallery',
        media: image,
      });
    },
  },
};
