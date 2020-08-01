import { FaImage } from 'react-icons/lib/fa';

export default {
  title: 'Image Block',
  name: 'imageBlock',
  type: 'object',
  icon: FaImage,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Contained',
      name: 'contained',
      type: 'boolean',
    },
    {
      title: 'Width',
      name: 'width',
      description: 'This only applies with Contained is checked.',
      type: 'number',
    },
    {
      title: 'No Margin',
      name: 'noMargin',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'image.asset.originalFilename',
      image: 'image',
      contained: 'contained',
      width: 'width',
    },
    prepare(selection) {
      const { image, width, contained } = selection;
      return Object.assign({}, selection, {
        title: 'Large Image',
        subtitle:
          width && contained
            ? `${width}px wide`
            : contained
            ? 'Contained at page width'
            : 'Full width',
        media: image,
      });
    },
  },
};
