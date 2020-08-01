import { FaImage } from 'react-icons/lib/fa';

export default {
  title: 'Logo Grid',
  name: 'logoGrid',
  type: 'object',
  icon: FaImage,
  fields: [
    {
      title: 'Grid',
      name: 'grid',
      type: 'array',
      icon: FaImage,
      of: [
        {
          title: 'Logo Grid Item',
          name: 'logoGridItem',
          type: 'logoGridItem',
          validation: Rule => Rule.required(),
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
      image: 'grid[0].image',
    },
    prepare(selection) {
      const { image } = selection;
      return Object.assign({}, selection, {
        title: 'Logo Grid',
        media: image,
      });
    },
  },
};
