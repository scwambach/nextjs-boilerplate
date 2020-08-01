import { FaDotCircle } from 'react-icons/lib/fa';

export default {
  title: 'Feature',
  name: 'feature',
  type: 'object',
  icon: FaDotCircle,
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Copy',
      name: 'copy',
      type: 'text',
      description: 'Keep it short and sweet!',
      validation: Rule => Rule.max(150).required(),
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'iconSelector',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      copy: 'copy',
    },
    prepare(selection) {
      const {
        title, copy,
      } = selection;
      return Object.assign({}, selection, {
        title,
        subtitle: copy,
      });
    },
  },
};
