export default {
  title: 'Minimal Content',
  name: 'minimalContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      name: 'block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        annotations: [],
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
      },
    },
  ],
};
