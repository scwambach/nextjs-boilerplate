import ZoViewTile from '@meronex/icons/zo/ZoViewTile';

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
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'colorSelector',
    },
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
