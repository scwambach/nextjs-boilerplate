export default {
  title: 'Section Heading',
  name: 'sectionHeading',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Copy',
      name: 'copy',
      type: 'simpleContent'
    }
  ]
};
