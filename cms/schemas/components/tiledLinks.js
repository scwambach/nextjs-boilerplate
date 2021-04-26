import ZoViewTile from '@meronex/icons/zo/ZoViewTile';
import { backgroundColor } from '../commonFields';

export default {
  title: 'Tiled Links',
  name: 'tiledLinks',
  type: 'object',
  icon: ZoViewTile,
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
    { ...backgroundColor },
  ],
  preview: {
    select: {
      slides: 'tiles',
    },
    prepare(selection) {
      return { ...selection, title: 'Tiled Links' };
    },
  },
};
