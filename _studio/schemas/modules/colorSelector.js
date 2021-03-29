export default {
  name: 'colorSelector',
  title: 'Color Selector',
  type: 'object',
  fields: [
    {
      title: 'Color',
      name: 'color',
      type: 'string',
      options: {
        list: [
          { title: 'white', value: '#fff' },
          { title: 'black', value: '#2f2f2f' },
          { title: 'gray', value: '#eee' },
          { title: 'green', value: '#bada55' },
          { title: 'blue', value: '#8A0094' },
        ],
      },
    },
  ],
};
