export default {
  title: 'Color List',
  name: 'colorList',
  type: 'object',
  fields: [
    {
      title: 'Colors',
      name: 'colors',
      type: 'colors',
      options: {
        borderradius: {
          outer: '100%',
          inner: '100%',
        },
        list: [
          { title: 'Black', value: '#000000' },
          { title: 'White', value: '#ffffff' },
          { title: 'Darker Gray', value: '#636466' },
          { title: 'Green', value: '#96AD41' },
          { title: 'Orange', value: '#D57824' },
          { title: 'Blue', value: '#1A77B9' },
          { title: 'Red', value: '#b80000' }
        ],
      },
    },
  ],
};
