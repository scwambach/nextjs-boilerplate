import { MdLink } from 'react-icons/lib/md';

export default {
  title: 'Tiled Links',
  name: 'tiledLinks',
  type: 'object',
  icon: MdLink,
  fields: [
    {
      title: 'Tiles',
      name: 'tiles',
      type: 'array',
      of: [
        {
          title: 'Tile',
          name: 'tile',
          type: 'tile',
        },
      ],
    },
    {
      title: 'No Margin',
      name: 'noMargin',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      slides: 'tiles',
    },
    prepare(selection) {
      return Object.assign({}, selection, {
        title: 'Tiled Links',
      });
    },
  },
};
