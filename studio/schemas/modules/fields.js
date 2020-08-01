export default {
  title: 'Fields',
  name: 'fields',
  type: 'object',
  fields: [
    {
      title: 'Field Select',
      name: 'fieldSelect',
      type: 'array',
      of: [
        {
          title: 'Field',
          name: 'field',
          type: 'field',
        },
        {
          title: 'Textarea',
          name: 'textarea',
          type: 'textarea',
        },
      ],
    },
  ],
};
