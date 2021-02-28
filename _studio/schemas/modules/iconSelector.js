export default {
  name: 'iconSelector',
  title: 'Icon Selector',
  type: 'object',
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'string',
      options: {
        list: [
          { title: 'square', value: 'square' },
          { title: 'circle', value: 'circle' },
        ],
      },
    },
  ],
  preview: {
    select: {
      icon: 'icon',
    },
    prepare(selection) {
      const { icon } = selection;
      return Object.assign({}, selection, {
        title: 'Icon Selector',
        subtitle: icon,
      });
    },
  },
};
