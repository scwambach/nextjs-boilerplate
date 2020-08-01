
import { FaDotCircle } from 'react-icons/lib/fa';

export default {
  title: 'Tile',
  name: 'tile',
  type: 'object',
  icon: FaDotCircle,
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
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
      copy: 'link.copy',
    },
    prepare(selection) {
      const { title, copy } = selection;
      return Object.assign({}, selection, {
        title,
        subtitle: copy,
      });
    },
  },
};
